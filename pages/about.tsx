import Header from '@/components/common/Header';
import { AdminLayout } from '@/components/layout/admin';
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
AboutPage.Layout = AdminLayout;
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
