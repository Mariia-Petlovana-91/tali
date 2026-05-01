import { Link } from 'react-router-dom';
import logo from '@/img/hero/nameMob.webp';

const Logo = () => {
  return (
    <Link to="/" aria-label="Go Home">
      <img
        src={logo}
        alt="Talia K2O"
        width={560}
        height={130}
        fetchPriority="high"
        className="w-[120px] md:w-[180px] h-auto"
      />
    </Link>
  );
};

export default Logo;
