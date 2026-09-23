import HomeTop from '@/components/HomeTop';
import SituationsFilter from '@/components/SituationsFilter';

export default function Home() {
  return (
    <>
      <HomeTop />

      <div className="wrap">
        <section className="block" id="situations">
          <div className="sechead">
            <div>
              <h2>Or find your situation</h2>
              <p className="muted">Pick a topic to narrow it down, or browse them all.</p>
            </div>
          </div>
          <SituationsFilter />
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
