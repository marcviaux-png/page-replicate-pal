import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Seo from '@/components/Seo';

type State = 'loading' | 'valid' | 'already' | 'invalid' | 'done' | 'error';

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const [state, setState] = useState<State>('loading');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function validate() {
      if (!token) {
        setState('invalid');
        return;
      }
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) setState('invalid');
        else if (data.valid) setState('valid');
        else if (data.reason === 'already_unsubscribed') setState('already');
        else setState('invalid');
      } catch {
        if (!cancelled) setState('error');
      }
    }
    validate();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setBusy(true);
    try {
      const { data, error } = await supabase.functions.invoke('handle-email-unsubscribe', {
        body: { token },
      });
      if (error) throw error;
      if (data?.success || data?.reason === 'already_unsubscribed') {
        setState('done');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-24">
      <Seo title="Unsubscribe — LeapUX" description="Manage your email preferences" path="/unsubscribe" />
      <div className="max-w-lg w-full bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">
        <h1 className="text-3xl font-bold text-leap-black mb-4">Unsubscribe</h1>

        {state === 'loading' && <p className="text-slate-600">Checking your link…</p>}

        {state === 'valid' && (
          <>
            <p className="text-slate-600 mb-8">
              Click below to confirm and stop receiving emails from LeapUX at this address.
            </p>
            <button
              onClick={confirm}
              disabled={busy}
              className="px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all disabled:opacity-70"
            >
              {busy ? 'Processing…' : 'Confirm unsubscribe'}
            </button>
          </>
        )}

        {state === 'already' && (
          <p className="text-slate-600">You're already unsubscribed. No further action needed.</p>
        )}

        {state === 'done' && (
          <p className="text-slate-600">You've been unsubscribed. Sorry to see you go.</p>
        )}

        {state === 'invalid' && (
          <p className="text-slate-600">This unsubscribe link is invalid or expired.</p>
        )}

        {state === 'error' && (
          <p className="text-slate-600">
            Something went wrong. Please try again, or email{' '}
            <a href="mailto:contact@leapux.com" className="text-leap-orange font-medium">contact@leapux.com</a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
