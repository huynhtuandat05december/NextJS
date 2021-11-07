import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface PostDetailProps {}

export default function PostDetailPage(props: PostDetailProps) {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
}
