import Typeform from '../components/typeform';
import brandData from '../lib/brandData';
import type { BrandData } from '../lib/types';

if (
  process.env.NEXT_PUBLIC_BRAND !== 'ere' &&
  process.env.NEXT_PUBLIC_BRAND !== 'sourcecon' &&
  process.env.NEXT_PUBLIC_BRAND !== 'talent42'
) {
  throw new Error(`NEXT_PUBLIC_BRAND is not an event brand`);
}

const {
  name,
  text,
  surveyActive,
  typeformId,
  useDefiniteArticle,
  logo,
}: BrandData = brandData[process.env.NEXT_PUBLIC_BRAND];

export default async function Home(): Promise<React.ReactElement> {
  return (
    <div>
      <div className="bg-main-primary relative overflow-hidden bg-circuitBoard">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            {logo}
            <h1 className="text-center tracking-tight">
              {process.env.NEXT_PUBLIC_BRAND !== 'talent42' && (
                <span className="block text-3xl font-bold leading-tight text-white sm:text-5xl">
                  {name}
                </span>
              )}
              <span className="mt-2 block text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Survey
              </span>
            </h1>
          </div>
        </div>
      </div>
      {surveyActive ? (
        <div className="mx-auto max-w-7xl py-8 px-4 sm:py-16 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-center pb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Thank you for joining us at {useDefiniteArticle ? 'the ' : ''}
                {name}!
              </h2>
              {text}
            </div>
          </div>
          <div className="flex w-full min-w-full justify-center">
            <Typeform typeformId={typeformId} />
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl py-8 px-4 sm:py-16 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-center pb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Thank you for joining us at {useDefiniteArticle ? 'the ' : ''}
                {name}!
              </h2>
              <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
                Our survey is now closed - thank you for providing your feedback
                and helping us make {useDefiniteArticle ? 'the ' : ''}
                {name} better.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
