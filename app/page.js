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

    </>
  );
}
