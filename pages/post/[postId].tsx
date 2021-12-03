import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface PostDetailProps {
  post: any;
}

export default function PostDetailPage(props: PostDetailProps) {
  const router = useRouter();
  const post = props.post;
  if (!post) return null;
  const handleClick = () => {
    router.push({
      pathname: '/post',
    });
  };
  return (
    <div>
      <h1>Post Detail</h1>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.postId;
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
