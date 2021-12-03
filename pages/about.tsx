import Header from '@/components/common/Header';
import { GetStaticProps } from 'next';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  console.log('header');
  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  );
}
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
