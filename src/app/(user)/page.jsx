import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';
import groq from 'groq';
import Container from '../../components/Container';

export const query = groq`
*[_type == "post"]{
  title,
  content,
  coverImage,
  date
} | order(date desc)
`;

export default function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading...">
        <div className="">this is preview mode</div>
      </PreviewSuspense>
    );
  }

  return (
    <Container>
      <div>hello anh em</div>
    </Container>
  );
}
