import { LoginPayload } from '@/models';

import axiosClient from './axios';

export const authApi = {
  async login(payload: LoginPayload) {
    try {
      const { data } = await axiosClient({
        method: 'POST',
        url: '/login',
        data: payload,
      });
      return {
        data,
        errCode: null,
        errDetail: null,
      };
    } catch (error) {
      return {
        data: null,
        errCode: 1,
        errDetail: error,
      };
    }
  },

  async logout() {
    try {
      const { data } = await axiosClient({
        method: 'POST',
        url: '/logout',
      });
      return {
        data,
        errCode: null,
        errDetail: null,
      };
    } catch (error) {
      return {
        data: null,
        errCode: 1,
        errDetail: error,
      };
    }
  },

  async getProfile() {
    try {
      const { data } = await axiosClient({
        method: 'GET',
        url: '/profile',
      });
      return {
        data,
        errCode: null,
        errDetail: null,
      };
    } catch (error) {
      return {
        data: null,
        errCode: 1,
        errDetail: error,
      };
    }
  },
};
