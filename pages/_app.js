import React from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>HAYEON</title>
            </Head>
            <Component />
        </>
    );
};

App.propTypes = {
    Component: Proptypes.elementType.isRequired,
};

export default App;
