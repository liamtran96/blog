import '../../../styles/globals.css';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';
import groq from 'groq';

export const query = groq`
*[_type == "post"]{
  title,
  content,
  coverImage,
  date
} | order(date desc) 
`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading...">
        <div className="">this is preview mode</div>
      </PreviewSuspense>
    );
  }

  return (
    <>
      <div>this is not preview mode</div>
    </>
  );
}
