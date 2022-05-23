import request from './request';

// 获取轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}