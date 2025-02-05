'use client';

import NextTopLoader from 'nextjs-toploader';

export default function TopLoadingBar() {
  return (
    <NextTopLoader
      color='#87CEEB' // Skyblue color in hex
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      crawl
      showSpinner={false}
      easing='ease'
      speed={200}
      shadow='0 0 10px #87CEEB,0 0 5px #87CEEB' // Skyblue color in hex for shadow
      // template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false}
    />
  );
}
