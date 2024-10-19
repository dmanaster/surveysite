import Image from 'next/image';
import SourceconLogo from '../components/sourceconCircles';
import EreLogo from '../components/ereCircles';
import Talent42Logo from '../public/images/talent42LogoWhite.png';

const settings = {
  ere: {
    name: 'ERE Recruiting Conference',
    text: (
      <div>
        <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          We want to provide you with the best ERE Recruiting Conference
          experience possible, so we'd like to hear your thoughts on the event
          and how we can improve. Please take a few minutes to complete this
          survey. Your feedback is very valuable to us - thank you!
        </p>
      </div>
    ),
    surveyActive: false,
    typeformId: 'YywasPNi',
    useDefiniteArticle: true,
    favicon: '/images/favicons/ere.ico',
    logo: (
      <div className="mx-auto w-52 fill-white stroke-white stroke-3 pb-4">
        <EreLogo />
      </div>
    ),
  },
  sourcecon: {
    name: 'SourceCon',
    text: (
      <div>
        <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          Maximize your SourceCon conference experience! Your input matters to
          us. Kindly take a moment to share your thoughts in the survey below.
          Feel free to answer all or none of the questions – it's your chance to
          influence the content of our presentations and tailor them to your
          preferences.
        </p>
        <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          If you're not ready with specific questions or thoughts right now,
          that's perfectly fine! There will be times to ask questions at the
          conference. See you at SourceCon!
        </p>
      </div>
    ),
    surveyActive: false,
    typeformId: 'CF2Y6EAi',
    useDefiniteArticle: false,
    favicon: '/images/favicons/sourcecon.ico',
    logo: (
      <div className="mx-auto w-52 fill-white stroke-white stroke-3 pb-4">
        <SourceconLogo />
      </div>
    ),
  },
  talent42: {
    name: 'Talent42',
    text: (
      <div>
        <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          We want to provide you with the best Talent42 experience possible, so
          we'd like to hear your thoughts on the event and how we can improve.
          Please take a few minutes to complete this survey. Your feedback is
          very valuable to us - thank you!
        </p>
      </div>
    ),
    surveyActive: false,
    typeformId: 'jKRJsyrn',
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
