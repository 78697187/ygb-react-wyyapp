import React, { memo } from 'react';


import {
  PlayerBarWrapper,
  ControlWrapper,
  OperateWrapper
} from './style';

const AppPlayBar = memo(() => {
  return (
    <PlayerBarWrapper>
      AppPlayBar
      <div className='control'>
        <div className='left'></div>
        <div className='center'>
          <ControlWrapper>
            <span className='iconfont order'>
              &#xe6a3;
            </span>
            <span className='iconfont prev'>
              &#xe603;
            </span>
            <span className="iconfont play_pause">
              &#xe634;
            </span>
            <span className="iconfont next">
              &#xe602;
            </span>
            <span className="iconfont volume">
              &#xe73b;
            </span>
          </ControlWrapper>
        </div>
        <div className='right'>
          <OperateWrapper>
            <span className='iconfont'>
              &#xe607;
            </span>
            <span className='iconfont'>
              &#xe609;
            </span>
          </OperateWrapper>
        </div>
      </div>
    </PlayerBarWrapper>
  )
});

export default AppPlayBar;