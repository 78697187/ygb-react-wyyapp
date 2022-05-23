import styled from 'styled-components';
import { LIGHT_MODE } from '../../common/constants';
const {
  themeColor,
  bodyColor,
  normalColor,
} = LIGHT_MODE;

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 210px;
  bottom: 0;
  right: 0;
  height: 80px;
  background-color: ${bodyColor};
  /* background-color: skyblue; */

  .control {
    position: relative;
    div {
      position: absolute;
    }
    .left {
      left: 0;
      width: 300px;
    }
    .center {
      display: flex;
      justify-content: center;
      left: 300px;
      right: 300px;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      width: 300px;
      height: 68px;
    }
    span {
      cursor: pointer;
      &:hover {
        color: ${themeColor};
      }
    }
  }
`;

export const PlayerInfo = styled.div`

`;

export const ControlWrapper = styled.div`
  position: relative;
  top: -5px;
  .iconfont {
    font-size: 20px;
    padding: 0 10px;
    margin-left: 5px;
    /* color: ${normalColor}; */
  }
  .prev, .next {
    font-size: 23px;
  }
  .play_pause {
    position: relative;
    top: 5px;
    font-size: 35px;
    /* color: ${themeColor}; */
    color: #0ec7a8;
  }
  .top-volume {
    position: absolute;
    top: -160px;
    right: -14px;
    clear: both;
    width: 75px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
  }
`;

export const OperateWrapper = styled.div`
  position: relative;
  bottom: 25px;
  right: 15;
  /* font-size: 12px; */
  color: #868686;
  /* .desk_lyc {
    margin: 0 8px;
  } */
  .iconfont {
    position: relative;
    top: 8px;
    font-size: 25px;
  }
`;
