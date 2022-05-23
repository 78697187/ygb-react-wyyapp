import * as actionTypes from './constants';

import {
  getTopBanners,
} from '@/services/recommend';

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners,
})


// 获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  };
};
