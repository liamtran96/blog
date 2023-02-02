import groq from 'groq';
import Container from '../../components/Container';
import { previewData } from 'next/headers';
import { Suspense, cache } from 'react';
import { client } from '../../lib/sanity.client';

const clientFetch = cache(client.fetch.bind(client));

export const query = groq`
*[_type == "post"]{
  title,
  content,
  coverImage,
  date
} | order(date desc)
`;

export default async function Home() {
  const data = await clientFetch(query);
  console.log(data);

  if (previewData()) {
    return (
      <Suspense fallback="Loading...">
        <div className="">preview mode</div>
      </Suspense>
    );
  }

  return (
    <Container>
      <div>hello anh em</div>
    </Container>
  );
}
