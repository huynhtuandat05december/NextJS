import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import * as React from 'react';

export interface PostPageProps {
  posts: any[];
}

export default function PostPage({ posts }: PostPageProps) {
  // console.log(posts)
  const router = useRouter();
  const handleClick = (post: any) => {
    router.push({
      pathname: '/post/[postId]',
      query: {
        postId: post.id,
      },
    });
  };
  return (
    <div>
      <h1>Post List Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  // console.log(data)
  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
