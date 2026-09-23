'use client';
import { useState } from 'react';
import Link from 'next/link';
import { situations, topicOrder } from '@/lib/content';

// Topic tabs filter the situation cards. Default shows everything.
export default function SituationsFilter() {
  const [topic, setTopic] = useState('All');
  const shown = topic === 'All' ? situations : situations.filter((s) => s.topic === topic);
  const colorOf = (t) => (situations.find((s) => s.topic === t) || {}).hex;
  return (
    <>
      <div className="ftabs" role="tablist" aria-label="Filter by topic">
        {['All', ...topicOrder].map((t) => (
          <button key={t} type="button" role="tab" aria-selected={topic === t} className="ftab" style={{ '--c': colorOf(t) || 'var(--navy-deep)' }} onClick={() => setTopic(t)}>
            {t !== 'All' && <i />}{t}
          </button>
        ))}
      </div>
      <div className="sitgrid" aria-live="polite">
        {shown.map((s) => (
          <Link key={s.slug} href={`/situations/${s.slug}`} className="sitcard" style={{ '--c': s.hex }}>
            <span className="tag tag--topic">{s.topic}</span>
            <h3>{s.name}</h3>
            <p>{s.blurb}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
