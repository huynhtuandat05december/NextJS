import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export interface IMainLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <h1>Sidebar</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
