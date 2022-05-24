import request from './request';

// 获取轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  });
};

// 调用此接口 , 可获取推荐歌单
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  });
};

// 调用此接口 , 可获取推荐电台
export function getDjProgram() {
  return request({
    url: '/personalized/djprogram',
  })
}

// 还是用下面这种，毕竟推荐页面嘛
// 调用此接口 , 可获取推荐电台
export function getProgramRecommend() {
  return request({
    url: '/program/recommend'
  });
};

// 调用此接口 , 可获取推荐 mv
export function getMvRecommend() {
  return request({
    url: '/personalized/mv'
  });
};

// 调用此接口 , 可获取新歌速递
// 必选参数 : type: 地区类型 id,
// 对应以下: 全部:0 华语:7 欧美: 96 日本: 8 韩国: 16
export function getNewSongs(type) {
  return request({
    url: '/top/song',
    params: {
      type
    }
  });
};
