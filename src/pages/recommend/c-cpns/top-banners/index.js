import React, { memo, useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'element-react';
import {
  BannerWrapper,

} from './style';

const TopBanner = memo(() => {
  // 组件和redux关联： 获取数据和进行操作
  // 2. 获取数据（useSelector）
  // 这个方法有缺陷。（24课2:20） 默认不会对返回的对象进行浅层比较
  //底层是 === 比较前后两次状态， 解决：加一个shallowEqual浅层比较的参数
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  // 1.进行操作（useDispatch）
  const dispatch = useDispatch();

  // 组件完成挂载后发送Ajax请求，获取数据
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <BannerWrapper>
      <div className='banner w1100'>
        <Carousel interval="4000" type="card" height="204px">
        {
            topBanners.map((item, index) => {
              return (
                <Carousel.Item key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} className="img"></img>
                </Carousel.Item>
              )
            })
        }
        </Carousel>
      </div>
    </BannerWrapper>
  )
});

export default TopBanner;