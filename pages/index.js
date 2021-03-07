import React from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import AppLayout from '../components/AppLayout';
import Main from '../components/Main';
import Detail from '../components/Detail';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Company from '../components/Company';


const topBtn = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 20,
    backgroundColor:'rgb(255 245 240)',
    color: 'rgb(255, 126, 87)',
    textAlign: 'center',
    fontSize: 14,
    border: '1px solid rgb(255, 126, 87)'
};

const Index = () => (
    <AppLayout>
        <Main />
        <Detail />
        <Company />
        <Work />
        <Footer />
        <BackTop>
            <div style={topBtn}><UpOutlined/></div>
        </BackTop>
    </AppLayout>
);

export default Index;
