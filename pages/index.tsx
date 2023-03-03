import Head from 'next/head';
import { Widget } from '@typeform/embed-react';
import settings from '../lib/settings';
import { BrandSettings } from '../lib/types';

// import background from '../public/CircuitBackground.png';
// import SourceconDigitalLogoWhite from '../public/SourceconDigitalLogoWhite.png';

if (
  process.env.NEXT_PUBLIC_BRAND !== 'ere' &&
  process.env.NEXT_PUBLIC_BRAND !== 'sourcecon' &&
  process.env.NEXT_PUBLIC_BRAND !== 'talent42'
) {
  throw new Error(`Variable is not defined`);
}

const brandSettings: BrandSettings = settings[process.env.NEXT_PUBLIC_BRAND];

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${brandSettings.brandName} Attendee Survey`}</title>
        <link rel="icon" href={brandSettings.favicon} />
      </Head>
      <div className="bg-main-primary relative overflow-hidden bg-circuitBoard">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            {brandSettings.logo}
            <h1 className="text-center tracking-tight">
              {process.env.NEXT_PUBLIC_BRAND !== 'talent42' && (
                <span className="block text-3xl font-bold leading-tight text-white sm:text-5xl">
                  {brandSettings.brandName}
                </span>
              )}
              <span className="mt-2 block text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Survey
              </span>
            </h1>
          </div>
        </div>
      </div>
      {brandSettings.surveyActive ? (
        <div className="mx-auto max-w-7xl py-8 px-4 sm:py-16 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-center pb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Thank you for joining us at{' '}
                {brandSettings.useDefiniteArticle ? 'the ' : ''}
                {brandSettings.brandName}!
              </h2>
              <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
                We want to provide you with the best {brandSettings.brandName}{' '}
                experience possible, so we'd like to hear your thoughts on the
                event and how we can improve. Please take a few minutes to
                complete this survey. Your feedback is very valuable to us -
                thank you!
              </p>
            </div>
          </div>
          <div className="flex w-full min-w-full justify-center">
            <Widget
              id={brandSettings.typeformId}
              className="h-192 w-full lg:w-3/4"
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl py-8 px-4 sm:py-16 sm:px-6">
          <div className="mx-auto flex max-w-3xl items-center justify-center pb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Thank you for joining us at{' '}
                {brandSettings.useDefiniteArticle ? 'the ' : ''}
                {brandSettings.brandName}!
              </h2>
              <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
                Our survey is now closed - thank you for providing your feedback
                and helping us make{' '}
                {brandSettings.useDefiniteArticle ? 'the ' : ''}
                {brandSettings.brandName} better.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
