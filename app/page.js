import Link from 'next/link';
import HomeTop from '@/components/HomeTop';
import { situations, topicOrder } from '@/lib/content';

export default function Home() {
  return (
    <>
      <HomeTop />

      <div className="wrap">
        <section className="block" id="situations">
          <div className="sechead">
            <div>
              <h2>Or find your situation</h2>
              <p className="muted">Grouped by topic. Pick the one that sounds like you.</p>
            </div>
          </div>
          {topicOrder.map((topic) => {
            const group = situations.filter((s) => s.topic === topic);
            if (!group.length) return null;
            return (
              <div className="topicgroup" key={topic} style={{ '--c': group[0].hex }}>
                <h3 className="topicgroup__h"><i /> {topic}</h3>
                <div className="sitgrid">
                  {group.map((s) => (
                    <Link key={s.slug} href={`/situations/${s.slug}`} className="sitcard" style={{ '--c': s.hex }}>
                      <h3>{s.name}</h3>
                      <p>{s.blurb}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <section className="about" aria-labelledby="about-title">
        <div className="wrap about__in">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="about-title">Free, from Stanford, with nothing to sell you</h2>
          </div>
          <div className="about__text">
            <p>Pinecone comes from Stanford&apos;s Initiative for Financial Decision-Making (IFDM), a university research initiative led by Professor Annamaria Lusardi. Its mission is to make good financial education available to everyone, everywhere, through teaching, research and tools like this one.</p>
            <p>We are a nonprofit university program, not a bank or an app that sells products. We don&apos;t tell you what to do with your money. We help you understand how it works so you can decide for yourself.</p>
            <a className="btn ghost" href="https://ifdm.stanford.edu" target="_blank" rel="noreferrer">About IFDM at Stanford →</a>
          </div>
        </div>
      </section>
    </>
  );
}
