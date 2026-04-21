'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from '@/lib/i18n';

export default function Hero() {
  const { t } = useTranslations();

  // Hover translates DOWN-RIGHT (+1, +1) for the press-in effect — matches
  // every other button in the codebase. The previous version translated
  // UP-LEFT (-1, -1) which was the inverse and looked broken next to the
  // rest of the design system.
  const buttonClass =
    'group relative border border-black bg-transparent px-8 py-3 font-mono text-sm font-bold uppercase text-black rounded-4xl transition-[transform,box-shadow,background-color,color] duration-150 ease-out hover:bg-[#da0007] hover:text-background hover:translate-y-[1px] hover:translate-x-[1px] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer';

  return (
    <section
      className="h-screen w-full p-4 md:p-12 lg:p-24 bg-white"

    >
      <div className="flex h-full w-full flex-col items-center justify-center border border-black text-[#da0007] bg-white">
        <h1 className="mb-12 text-center font-mono text-6xl font-bold uppercase leading-none tracking-tighter md:text-8xl lg:text-9xl selection:bg-blue-700 selection:text-white">
          {t('Rewrite ')}
          <br />
          {t('Resumes.')}
        </h1>

        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          {/* <a
            href="https://github.com/srbhr/Resume-Matcher"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            GitHub
          </a> */}
          {/* <a
            href="https://resumematcher.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            {t('home.docs')}
          </a> */}
          <Link href="/dashboard" className={buttonClass}>
            {t('home.launchApp')}
          </Link>
        </div>
      </div>
    </section>
  );
}
