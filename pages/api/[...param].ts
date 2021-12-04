import Cookies from 'cookies';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
type Data = {
  name: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};
const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resovle, reject) => {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    req.headers.cookie = '';
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once('proxyRes', () => {
      resovle(true);
    });
  });
}
