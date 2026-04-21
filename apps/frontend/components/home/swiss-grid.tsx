'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/lib/i18n';

export const SwissGrid = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslations();

  return (
    // 1. Outer Wrapper: Fixed height with grid background
    <div
      className="h-screen w-full flex justify-center items-start py-12 px-4 md:px-8 overflow-hidden bg-white"
    >
      {/* 2. The Main Container: Sharp black borders, creating the "Canvas" */}
      <div className="w-full max-w-full max-h-full border border-black bg-white flex flex-col overflow-hidden">
        {/* Header Section - stays above hovered cards */}
        <div className="border-b border-black p-8 md:p-12 shrink-0 bg-white relative z-30">
          <h1 className="font-serif text-5xl md:text-7xl text-black tracking-tight leading-[0.95] uppercase">
            {t('nav.dashboard')}
          </h1>
        </div>

        {/* Content Grid - Scrollable area with NO padding.
            @container makes the card grid respond to the container's actual
            width, not the viewport. The Swiss frame is max-w-86rem so on
            ultra-wide screens the cards no longer over-stretch. */}
 <div className="@container flex-1 overflow-y-auto  relative z-10">
  <div className="max-w-7xl mx-auto py-10 px-6">

    {/* ✅ CLEAN 2 COLUMN LAYOUT */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* 🔹 LEFT: MASTER RESUME */}
      <div className="md:col-span-1 bg-white rounded-xl shadow-sm border p-6 flex flex-col">
        

        <div className="flex-1 flex items-center justify-center text-gray-400">
          {React.Children.toArray(children)[0] || (
            <p>No resume uploaded</p>
          )}
        </div>
      </div>

      {/* 🔹 RIGHT: EDITOR */}
      <div className="md:col-span-2 bg-white rounded-xl shadow-sm border p-6 flex flex-col">
      

        <div className="flex-1 flex items-center justify-center">
          {React.Children.toArray(children)[1] || (
            <button className="px-6 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              + Create Resume
            </button>
          )}
        </div>
      </div>

    </div>

  </div>
</div>

        {/* Footer - stays above hovered cards */}
        <div className="p-4 bg-white flex justify-between items-center font-mono text-xs text-blue-700 border-t border-black shrink-0 relative z-30">
          <div className="flex items-center gap-2">
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/settings"
              className="bg-[#da0007] text-white border border-[#da0007] px-6 py-2 rounded-2xl uppercase font-bold tracking-wide hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all min-w-[140px] text-center"
            >
              {t('nav.settings')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
