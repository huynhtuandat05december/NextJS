import { useAuth } from '@/hooks';
import * as React from 'react';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    const { data, errCode, errDetail } = await login();
    console.log(data, errCode, errDetail);
  }

  async function handleLogoutClick() {
    const { data, errCode, errDetail } = await logout();
    console.log(data, errCode, errDetail);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>{JSON.stringify(profile)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
