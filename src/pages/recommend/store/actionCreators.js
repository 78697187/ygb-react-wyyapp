import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommend,
} from '@/services/recommend';

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners,
});

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});


// 获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  };
};

// 获取热门推荐歌曲
export const getHotRecommendAction = () => {
  return (dispatch) => {
    getHotRecommend().then(res => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};


