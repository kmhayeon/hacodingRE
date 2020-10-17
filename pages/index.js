import React from 'react';
import AppLayout from '../components/AppLayout';
import Main from '../components/Main';
import Detail from '../components/Detail';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Company from '../components/Company';

const Index = () => (
    <AppLayout>
        <Main />
        <Detail />
        <Work />
        <Company />
        <Footer />
    </AppLayout>
);

export default Index;
