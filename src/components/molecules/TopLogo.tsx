import Link from 'next/link';
import Img from '../atoms/Image';

const TopLogo = () => (
  <h1>
    <Link href="/">
      <Img src="/img/top_logo.svg" alt="ゆうあい鍼灸接骨院（沼津市）" className="topLogo" />
    </Link>
  </h1>
);

export default TopLogo;