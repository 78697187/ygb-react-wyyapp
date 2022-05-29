import React, { memo } from 'react'


import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

const AppHeader = memo((props) => {
  const [theme, setTheme] = props.theme;

  const changeTheme = () => {
    setTheme(theme => !theme);
  };
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <div className='prev_next'>
          <span className='iconfont'>
            &#xed4f;
          </span>
          <em>&nbsp;&nbsp;</em>
          <span className='iconfont'>
            &#xed4e;
          </span>
        </div>
        <Input
          className='search'
          placeholder='搜索音乐'
          prefix={<SearchOutlined/>}
          bordered={false}
          allowClear={true}
        />
      </HeaderLeft>
      <HeaderRight>
        <span className="login-button">
          点击登录
        </span>
        <span className='iconfont toolbar'
              onClick={changeTheme}
        >&#xe647;</span>
        <span className='iconfont toolbar'>&#xe63f;</span>
      </HeaderRight>
    </HeaderWrapper>
  )
});

export default AppHeader;