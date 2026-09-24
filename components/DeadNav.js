'use client';

// Research prototype: global navigation looks live but does not leave the page.
// Sessions are recorded, so we can see if people try to click it.
const LINKS = ['Videos', 'Calculators', 'Stanford IFDM'];

export default function DeadNav() {
  const stay = (e) => e.preventDefault();
  return (
    <nav aria-label="Site">
      {LINKS.map((l) => <a key={l} href="#" onClick={stay}>{l}</a>)}
    </nav>
  );
}
