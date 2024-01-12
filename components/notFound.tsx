import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import squirrel404 from '../public/images/squirrel404.png';

const NotFound = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Sorry, we can&apos;t find that page!</title>
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="my-8 mx-auto flex max-w-sm flex-shrink-0 justify-center">
              <Link href="/" className="inline-flex">
                <Image priority alt="404 error image" src={squirrel404} />
              </Link>
            </div>
            <div className="py-5">
              <div className="text-center">
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Sorry, we can&apos;t find this page.
                </h1>
                <p className="mt-6 text-3xl text-gray-500">
                  ...but don&apos;t give up the search!
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="flex justify-center text-lg font-medium text-blue-600 hover:text-blue-700"
                  >
                    Go back home
                    <HiArrowRight className="ml-2 h-7 w-7" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NotFound;
