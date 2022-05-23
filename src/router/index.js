import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

const Discover = lazy((_) => import('../pages/discover'));
const Recommend = lazy((_) => import('../pages/recommend'));
const Mv = lazy((_) => import('../pages/mv'));
const Radio = lazy((_) => import('../pages/radio'));
const Like = lazy((_) => import('../pages/like'));
const LocalSong = lazy((_) => import('../pages/localsong'));
const Download = lazy((_) => import('../pages/download'));
const Recent = lazy((_) => import('../pages/recent'));

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to='/recommend'/>
    },
    {
      path: '/recommend',
      element: <Recommend/>,
    },
    {
      path: '/discover',
      element: <Discover/>
    },
    {
      path: '/mv',
      element: <Mv/>
    },
    {
      path: '/radio',
      element: <Radio/>
    },
    {
      path: '/like',
      element: <Like/>,
    },
    {
      path: '/localsong',
      element: <LocalSong/>
    },
    {
      path: '/download',
      element: <Download/>
    },
    {
      path: '/recent',
      element: <Recent/>
    }
  ]);
  return routes;
}

export default GetRoutes;