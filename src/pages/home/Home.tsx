import { Hero } from './components';
import superDecor from '@/img/dekor/ьтльдльольодльодл.png';

export default function Home() {
  return (
    <div
      style={{ '--decor-bg': `url(${superDecor})` } as React.CSSProperties}
      className="before:content-[''] before:absolute before:inset-0
  before:bg-[image:var(--decor-bg)]
  before:bg-no-repeat before:bg-center before:bg-cover
  before:opacity-30 before:pointer-events-none
    "
    >
      <Hero />
    </div>
  );
}
