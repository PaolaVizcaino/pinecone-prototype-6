import Link from 'next/link';
import { liveQuestions } from '@/lib/content';

const Clock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

// Same card anatomy as prototype 3: topic tag, question, one line, time.
export default function QuestionCard({ slug, q }) {
  const live = liveQuestions.includes(slug);
  const Tag = live ? Link : 'div';
  const props = live ? { href: `/q/${slug}` } : { 'aria-disabled': 'true' };
  return (
    <Tag {...props} className={live ? 'module' : 'module module--off'} style={{ '--c': q.hex }}>
      <div className="module__body">
        <div className="module__tags">
          <span className="tag tag--topic">{q.topic}</span>
          <span className="popular">{live ? 'Try it' : 'Coming soon'}</span>
        </div>
        <h3>{q.title}</h3>
        <p>{q.blurb}</p>
        <div className="meta"><span><Clock /> ~{q.minutes} min</span></div>
      </div>
    </Tag>
  );
}
