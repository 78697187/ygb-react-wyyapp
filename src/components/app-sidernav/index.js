import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';


import {
  AppSider,
  NavList
} from './style';
import { siderList, siderSongList } from '@/common/local-data';

const AppSiderNav = memo(() => {
  return (
    <AppSider>
        <NavLink className="logo text-indent sprite_01" to="/recommend">
          网页云音乐
        </NavLink>
        <NavList>
          <span className='list_title text-indent'>在线音乐</span>
          {
            siderList &&
            siderList.map((item, index) => {
              return (
                <a className='list_item' key={item.title} to={item.link}>
                  {item.icon}
                  <em>{item.title}</em>
                </a>
              )
            })
          }
        </NavList>
        <NavList>
          <span className='list_title'>我的音乐</span>
          {
            siderSongList &&
            siderSongList.map((item, index) => {
              return (
                <NavLink className="list_item" key={item.title} to={item.link}>
                  {item.icon}
                  <em>{item.title}</em>
                </NavLink>
              )
            })
          }
        </NavList>
    </AppSider>
  )
})

export default AppSiderNav

