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
        <p className="muted" style={{ fontSize: 20 }}>{q.blurb}</p>
      </div>

      {q.story && (
        <section className="story" aria-label={`Meet ${q.story.who}`}>
          <div className="story__who">
            <div className="story__avatar" aria-hidden="true">{q.story.who[0]}</div>
            <div>
              <p className="eyebrow">Meet {q.story.who}</p>
              <h2>{q.story.who}</h2>
              <p className="muted">{q.story.role}</p>
            </div>
          </div>
          <ul className="story__facts">{q.story.facts.map((f) => <li key={f}>{f}</li>)}</ul>
          <div className="story__goal"><span className="eyebrow">Her goal</span><p>{q.story.goal}</p></div>
        </section>
      )}
      <a className="learnjump" href="#learn">New to this? Read the idea behind it</a>
      <div className={q.game.wide ? "qgrid qgrid--wide" : "qgrid"}>
        <GameFrame game={q.game} />
        <LearnPanel learn={q.learn} />
      </div>

      {q.video && (
        <section className="block">
          <div className="sechead">
            <div>
              <h2>{q.video.title}</h2>
              <p className="muted">{q.video.lead}</p>
            </div>
          </div>
          <div className="video__box" aria-label={q.video.title}><span>▶</span><b>{q.video.title}</b><small>{q.video.note}</small></div>
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
