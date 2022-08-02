import Image from 'next/image';

import logo from './logo.png';

export default function AppLogo() {
  return (
    <Image
      alt='Health App! logo'
      height={40}
      layout='intrinsic'
      quality={100}
      src={logo}
      width={40}
    />
  );
}
