import Link from 'next/link';
import { notFound } from 'next/navigation';
import GameFrame from '@/components/GameFrame';
import LearnPanel from '@/components/LearnPanel';
import QuestionCard from '@/components/QuestionCard';
import { questions, situations } from '@/lib/content';

export function generateStaticParams() {
  return Object.keys(questions).map((slug) => ({ slug }));
}
export function generateMetadata({ params }) {
  const q = questions[params.slug];
  return q ? { title: `${q.title} · Pinecone by Stanford`, description: q.blurb } : {};
}

export default function QuestionPage({ params }) {
  const q = questions[params.slug];
  if (!q) notFound();
  const sit = situations.find((s) => s.slug === q.situation);
  return (
    <div className="wrap">
      <p className="crumbs"><Link href="/">Home</Link> / <Link href={`/situations/${sit.slug}`}>{sit.name}</Link></p>
      <div className="qhead narrow">
        <h1>{q.title}</h1>
        <p className="muted" style={{ fontSize: 20 }}>{q.blurb} About {q.minutes} minutes.</p>
      </div>

      {q.story && (
        <section className="story">
          <span className="tag tag--topic" style={{ '--c': q.hex }}>Meet {q.story.who}</span>
          <div className="story__lines">{q.story.lines.map((l) => <p key={l}>{l}</p>)}</div>
        </section>
      )}
      <a className="learnjump" href="#learn">New to this? Read the idea behind it</a>
      <div className={q.game.wide ? "qgrid qgrid--wide" : "qgrid"}>
        <GameFrame game={q.game} />
        <LearnPanel learn={q.learn} />
      </div>

      {q.story && q.story.video && (
        <section className="block">
          <div className="video">
            <div className="video__box" aria-label={q.story.video.title}><span>▶</span><b>{q.story.video.title}</b><small>{q.story.video.note}</small></div>
          </div>
        </section>
      )}

      <section className="block">
        <div className="sechead">
          <h2>Where to next</h2>
          <Link className="linkbtn" href={`/situations/${sit.slug}`}>More on: {sit.name} →</Link>
        </div>
        <div className="modules">
          {q.related.map((slug) => <QuestionCard key={slug} slug={slug} q={questions[slug]} />)}
        </div>
      </section>
    </div>
  );
}
