import { LayoutProps } from '@/models';
import { useAuth } from '@/hooks';
import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
import { Auth } from '../common';

export interface IMainLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      console.log('redirect to login page');
      router.push('/login');
    } catch (error) {
      console.log('failed to logout', error);
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <h1>Sidebar</h1>
      <p>Profile: {JSON.stringify(profile)}</p>

      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
