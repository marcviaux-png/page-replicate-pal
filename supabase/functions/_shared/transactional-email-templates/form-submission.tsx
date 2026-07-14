import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  formName?: string
  fields?: Array<{ label: string; value: string }>
}

const FormSubmission = ({ formName = 'Website form', fields = [] }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New {formName} submission on leapux.com</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New {formName} submission</Heading>
        <Text style={intro}>
          A new submission was received from the LeapUX website.
        </Text>
        <Hr style={hr} />
        <Section>
          {fields.map((f, i) => (
            <Section key={i} style={{ marginBottom: '16px' }}>
              <Text style={label}>{f.label}</Text>
              <Text style={value}>{f.value || '—'}</Text>
            </Section>
          ))}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This message was sent from a form on leapux.com.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: FormSubmission,
  subject: (data: Props) => `New ${data.formName ?? 'website'} submission`,
  displayName: 'Website form submission',
  previewData: {
    formName: 'Contact',
    fields: [
      { label: 'Name', value: 'Jane Doe' },
      { label: 'Email', value: 'jane@example.com' },
      { label: 'Organization', value: 'Acme Inc' },
      { label: 'Message', value: 'Hello, we are interested in your services.' },
    ],
  },
  to: 'contact@leapux.com',
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '600px', margin: '0 auto' }
const h1 = { color: '#111111', fontSize: '24px', fontWeight: '700', margin: '0 0 8px' }
const intro = { color: '#4b5563', fontSize: '15px', lineHeight: '24px', margin: '0 0 8px' }
const label = { color: '#6b7280', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' as const, letterSpacing: '0.06em', margin: '0 0 4px' }
const value = { color: '#111111', fontSize: '15px', lineHeight: '22px', margin: 0, whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { color: '#9ca3af', fontSize: '12px', margin: 0 }
