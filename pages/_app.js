import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import GlobalStyle from './globalStyle.js'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return(
            <Provider store={store}>
                <GlobalStyle/>
                <Component {...pageProps}></Component>
            </Provider>
        )
    }
}

const makestore = () => store;

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);