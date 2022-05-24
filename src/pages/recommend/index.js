import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banners';
import HotRecommend from './c-cpns/hot-recommend';
import DjProgram from './c-cpns/djprogram';
import MvRecommend from './c-cpns/mvrecommend';
import NewSongs from './c-cpns/newsongs';

import { RecomWrapper } from './style';

const Recommend = memo(() => {
  return (
    <RecomWrapper>
      <TopBanner/>
      <HotRecommend/>
      <DjProgram/>
      <MvRecommend/>
      <NewSongs/>
    </RecomWrapper>
  )
});

export default Recommend;