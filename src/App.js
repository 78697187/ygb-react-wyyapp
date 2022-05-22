import React, { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GetRoutes from './router';

import AppSiderNav from './components/app-sidernav';
import AppHeader from './components/app-header';
import AppPlayBar from './components/app-play-bar';

import {
  AppWrapper
} from './appStyle';

const App = memo(() => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <div className='app_window'>
          <div className='app_left'>
            <AppSiderNav />
          </div>
          <div className='app_right'>
            <div className='app_top'>
              <AppHeader />
            </div>
            <div className='w1100'>
              主界面
              <Suspense fallback={<div>page loading</div>}>
                <GetRoutes />
              </Suspense>
            </div>
            <AppPlayBar/>
          </div>
        </div>
      </AppWrapper>
    </BrowserRouter>
  )
})

export default App;