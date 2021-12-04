import { authApi } from '@/services';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(option: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    revalidateOnFocus: false,
    ...option,
  });

  async function login() {
    const { data, errCode, errDetail } = await authApi.login({
      username: 'test1',
      password: '123123',
    });
    await mutate();
    return {
      data,
      errCode,
      errDetail,
    };
  }
  async function logout() {
    const { data, errCode, errDetail } = await authApi.logout();
    await mutate({}, false);
    return {
      data,
      errCode,
      errDetail,
    };
  }
  return {
    profile,
    error,
    login,
    logout,
  };
}
