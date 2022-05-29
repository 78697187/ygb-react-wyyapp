import React, { memo, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GetRoutes from './router';
import store from './store/index';

import AppSiderNav from './components/app-sidernav';
import AppHeader from './components/app-header';
import AppPlayBar from './components/app-play-bar';

import {
  AppWrapper
} from './appStyle';

const App = memo(() => {
  const [theme, setTheme] = useState(
    localStorage.getItem('Dark') === 'false' ? false : true
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme ? { mode: 'dark'} : { mode: 'light'}}>
          <AppWrapper>
            <div className='app_window'>
              <div className='app_left'>
                <AppSiderNav />
              </div>
              <div className='app_right'>
                <div className='app_top'>
                  <AppHeader theme={[theme, setTheme]}/>
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
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
})

export default App;