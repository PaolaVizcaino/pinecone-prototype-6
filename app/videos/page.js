import { videos } from '@/lib/content';

export const metadata = { title: 'Videos · Pinecone by Stanford' };

export default function Videos() {
  return (
    <div className="wrap">
      <div className="qhead narrow" style={{ paddingTop: 40 }}>
        <h1>Videos</h1>
        <p className="muted" style={{ fontSize: 20 }}>Short stories from the five people whose money lives run through Pinecone. Watch one, then try the decision yourself.</p>
      </div>
      <div className="sitgrid" style={{ paddingBottom: 48 }}>
        {videos.map((v) => (
          <div key={v.title} className="vcard" style={{ '--c': v.hex }}>
            <div className="vcard__thumb" aria-hidden="true"><span>▶</span></div>
            <div className="vcard__body">
              <span className="tag tag--topic">{v.topic}</span>
              <h3>{v.title}</h3>
              <p>{v.module} · {v.minutes} min</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
