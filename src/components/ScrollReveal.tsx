import { type ReactNode, type CSSProperties } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ once });

  const directionMap: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction];

  const style: CSSProperties = {
    transform: isVisible
      ? 'translate3d(0, 0, 0)'
      : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: 'transform, opacity',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;
