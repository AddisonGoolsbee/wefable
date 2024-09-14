"use client";

import { ChapterBanner } from './ChapterBanner';
import { ChapterSlice } from './ChapterSlice'; // Make sure to point to the correct file path

export function Chapter() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* Banner Component */}
        <ChapterBanner
          storyTitle="The Yellow Wallpaper"
          author="Charlotte Perkins Gilman"
        />
        
        {/* ChapterSlice Component */}
        <ChapterSlice
          chapterNumber={1}
          storyTitle="The Yellow Wallpaper"
          authors="Charlotte Perkins Gilman"
          storyImageUrl="https://via.placeholder.com/1200x400"
          chapterText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          images={[
            "https://via.placeholder.com/600x400", 
            "https://via.placeholder.com/600x400"
          ]}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
