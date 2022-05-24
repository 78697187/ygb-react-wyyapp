import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GetRoutes from './router';
import store from './store/index';

import AppSiderNav from './components/app-sidernav';
import AppHeader from './components/app-header';
import AppPlayBar from './components/app-play-bar';

import {
  AppWrapper
} from './appStyle';

const App = memo(() => {
  return (
    <Provider store={store}>
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
                <Suspense fallback={<div>page loading</div>}>
                  <GetRoutes />
                </Suspense>
              </div>
              <AppPlayBar />
            </div>
          </div>
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  )
})

export default App;