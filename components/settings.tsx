import Image from 'next/image';
import SourceconLogo from '../components/sourceconCircles';
import EreLogo from '../components/ereCircles';
import Talent42Logo from '../public/images/talent42LogoWhite.png';

const settings = {
  ere: {
    brandName: 'ERE Recruiting Conference',
    surveyActive: false,
    typeformId: 'zoFJfQTJ',
    useDefiniteArticle: true,
    favicon: '/images/favicons/ere.ico',
    logo: (
      <div className="mx-auto w-52 fill-white stroke-white stroke-3 pb-4">
        <EreLogo />
      </div>
    ),
  },
  sourcecon: {
    brandName: 'SourceCon',
    surveyActive: true,
    typeformId: 'saoikhzc',
    useDefiniteArticle: false,
    favicon: '/images/favicons/sourcecon.ico',
    logo: (
      <div className="mx-auto w-52 fill-white stroke-white stroke-3 pb-4">
        <SourceconLogo />
      </div>
    ),
  },
  talent42: {
    brandName: 'Talent42',
    surveyActive: false,
    typeformId: 'RlMAkQD9',
    useDefiniteArticle: false,
    favicon: '/images/favicons/talent42.ico',
    logo: (
      <div className="relative mx-auto w-60 pb-2 sm:w-96">
        <Image src={Talent42Logo} alt="Talent42 logo" />
      </div>
    ),
  },
};

export default settings;
