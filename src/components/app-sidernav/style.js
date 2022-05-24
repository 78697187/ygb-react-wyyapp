import styled from "styled-components";

import { LIGHT_MODE } from '@/common/constants';

const {
  themeColor,
  hoverColor,
  sideFontColor,
  grayFontColor,
} = LIGHT_MODE;

export const AppSider = styled.div`

  .logo {
    /* a元素是行内元素没有宽高， 要转成块元素 */
    display: block;
    width: 175px;
    height: 36px;
    background-position: -12px -79px;
    margin: 30px auto 10px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

export const NavList = styled.div`
  margin-bottom: 40px;

  .list_title {
    margin-left: 50px;
    color: ${grayFontColor};
    font-size: 13px;
  }
  .list_item {
    display: block;
    width: 160px;
    height: 30px;
    /* margin-top: 8px;
    margin-left: 25px; */
    margin: 10px 0 10px 25px;
    padding-left: 15px;
    line-height: 30px;
    color: ${sideFontColor};
    font-size: 14px;
    border-radius: 5px;
    .iconfont {
      font-size: 18px;
      margin-right: 20px;
    }
    &:hover {
      background-color: ${hoverColor};
      text-decoration: none;
    }
    &:active {
      background-color: ${themeColor};
      color: #ffffff;
    }
    .active {
      background-color: ${themeColor};
      color: #ffffff;
    }
  }

`