import Header from '@/components/common/Header';
import { MainLayout } from '@/components/layout';
import { GetStaticProps } from 'next';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  );
}
AboutPage.Layout = MainLayout;
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
