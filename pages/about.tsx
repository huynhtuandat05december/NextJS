import Header from '@/components/common/Header';
import { AdminLayout } from '@/components/layout/admin';
import { Box, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <Header />
    </Box>
  );
}
AboutPage.Layout = AdminLayout;
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
