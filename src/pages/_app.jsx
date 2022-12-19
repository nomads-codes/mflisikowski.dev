import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';

import '@/styles/tailwind.css';
import 'focus-visible';

export default function App({ Component, pageProps }) {
  const { socials } = pageProps?.data;

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer socials={socials} />
      </div>
    </>
  );
}
