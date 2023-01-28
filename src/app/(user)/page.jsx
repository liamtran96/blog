'use client';

import '../../styles/globals.css';
// import { previewData } from 'next/headers';
// import PreviewSuspense from '../../components/PreviewSuspense';
// import groq from 'groq';
import { useTheme } from 'next-themes';

// export const query = groq`
// *[_type == "post"]{
//   title,
//   content,
//   coverImage,
//   date
// } | order(date desc)
// `;

export default function Home() {
  const { theme, setTheme } = useTheme();

  // if (previewData()) {
  //   return (
  //     <PreviewSuspense fallback="Loading...">
  //       <div className="">this is preview mode</div>
  //     </PreviewSuspense>
  //   );
  // }

  return (
    <>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <div>this is not preview mode</div>
    </>
  );
}
