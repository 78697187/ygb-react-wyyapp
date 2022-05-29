import styled from 'styled-components';
import { myTheme } from './common/constants';

const {
  bodyColor,
} = myTheme;


export const AppWrapper = styled.div`
  .app_window {
    display: flex;
    height: 100%;
  }
  .app_left {
    position: fixed;
    width: 210px;
    height: 100%;
    overflow-x: auto;
    background-color: ${bodyColor};
    /* background-color: #ec414141; */
    /* opacity: .3; */
  }
  .app_right {
    flex: 1;
    margin-left: 210px;
    margin-top: 75px;
    /* background-color: pink; */
  }
  .app_top {
    position: fixed;
    top: 0;
    left: 210px;
    right: 0;
    z-index: 9;
  }
`