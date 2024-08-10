import axios from 'axios';
import AsyncStorageUtils from './AsyncStorage';
import {SESSION_TOKEN} from './constants';
import Config from 'react-native-config';

// const authUrls = ['/user/auth/login', '/user/auth/accept-invitation'];
const axiosClient = axios.create({
  baseURL: `${Config.BASE_URL}`,
  headers: {
    // 'X-API-KEY': `${process.env.NEXT_PUBLIC_X_API_KEY}`,
    'Content-type': 'application/json',
    // 'Access-Control-Allow-Credentials':'true',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: true,
});
axiosClient.interceptors.request.use(
  async (config: any) => {
    // console.log({config});
    // let url = config.url;
    const token = await AsyncStorageUtils.getData(SESSION_TOKEN);
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    // if (token && !authUrls.includes(url)) {
    // }
    return config;
  },
  error => {
    console.log('ERROR RESPONSE:', error.response);
    return Promise.reject(error);
  },
);
// function deleteToken() {
//   let session = hasCookie(SESSION_COOKIE);
//   let refresh_session = hasCookie(REFRESH_TOKEN_COOKIE);
//   let role_login = hasCookie(LOGIN_WITH_ROLE);
//   persistor.purge(); // optional: clear storage if needed
//   // persistor.flush(); // optional: flush storage to make sure state is persisted immediately
//   if (session) {
//     deleteCookie(SESSION_COOKIE);
//   }
//   if (refresh_session) {
//     deleteCookie(REFRESH_TOKEN_COOKIE);
//   }
//   if (role_login) {
//     deleteCookie(LOGIN_WITH_ROLE);
//   }
//   window.location.assign('/');
// }

// async function handleRefreshTokenError(error: AxiosError) {
//   //   const originalConfig = error.config;

//   const isError =
//     error.response?.status === 401 || error.response?.status === 403;

//   if (isError && !authUrls.includes(error.config?.url as string)) {
//     // originalConfig._retry = true;
//     try {
//       //   const token = getCookie(REFRESH_TOKEN_COOKIE);
//       //   const headers = {Authorization: `Bearer ${token}`};
//       //   const res: any = await axios.get(
//       //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/auth/refresh-token`,
//       //     {
//       //       headers,
//       //     },
//       //   );
//       //   setCookie(SESSION_COOKIE, res.data.accessToken);
//       //   setCookie(REFRESH_TOKEN_COOKIE, res.data.refreshToken);
//       //   window.location.assign('/');
//       // debugger;
//       // originalConfig.headers.Authorization = `Bearer ${res.data.accessToken}`;
//       // return axiosClient({
//       //   ...originalConfig,
//       //   headers: { ...originalConfig.headers, Authorization: `Bearer ${res.data.accessToken}` },
//       // });
//     } catch (error: any) {
//       console.log('erorrrrrrrrr', error);
//       const refreshError =
//         error?.response?.data?.statusCode === 401 ||
//         error?.response?.data?.statusCode === 403;
//       if (
//         error.config.url === '/user/auth/refresh-token' ||
//         (error.config.url ===
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/auth/refresh-token` &&
//           refreshError)
//       ) {
//         deleteToken();
//       }
//     }
//   }

//   const {data, status}: AxiosResponse | any = error.response;
//   // console.log({ error: error });

//   const errorMessage = data.desc || '';

//   if (status === 403) {
//     return Promise.reject({errorMessage, status});
//   }

//   return Promise.reject(error);
// }

// axiosClient.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   handleRefreshTokenError,
// );

// async function refreshToken(originalConfig: any) {
//   // return res;
// }

export default axiosClient;

// if (err?.response?.data?.statusCode === 403 || err?.response?.data?.statusCode === 401) {
//   // deleteToken();
// }
