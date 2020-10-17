import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button, Layout, Menu, Card, Col, Image, Row } from 'antd';
const { Header, Content, Footer } = Layout;

const header = css`
    background-color: #fff;
    padding: 3rem 3rem !important;
`;

const emailBtn = css`
    float: right;
    font-weight: 300;
    font-size: 16px;
    background-color: transparent;
    border: 2px solid #ff7e57;
    color: #ff7e57;
    border-radius: 40px;
    padding: 8px 22px 33px 22px;
    top: 10px;
    &:hover {
        background-color: #ff7e57;
        color: #fff;
        border-color: #ff7e57;
    }
    &:focus {
        border: 2px solid #ff7e57;
        color: #fff;
        border-radius: 40px;
    }
`;

const ContentSt = css`
    background: #fff;
`;

const ContentMain = css`
    text-align: center;
`;

const bodyFont = css`
    font-family: 'Poppins', 'Open Sans', sans-serif;
`;

const FooterDiv = css`
    text-align: center;
    background-color: #ff7e57;
    padding: 24px 50px 100px;

    .imgDiv {
        margin-bottom: 70px;
    }

    h1 {
        font-size: 1.6rem;
        color: #fff;
        margin-bottom: 70px;
    }

    p {
        font-size: 1rem;
        font-weight: 200;
        color: #fff;
    }
`;

const AppLayout = ({ children }) => {
    return (
        <Layout css={bodyFont}>
            <div css={header}>
                <img width={60} src="../img/logo.png" />
                <a href="mailto:kmhayeon12@gmail.com" title="문의 메일 보내기">
                    <Button css={emailBtn}>Say Hello</Button>
                </a>
            </div>
            <Content css={ContentSt}>
                <Content css={ContentMain}>{children}</Content>
            </Content>
            <Footer css={FooterDiv}>
                <Image
                    className="imgDiv"
                    width={80}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                <h1>
                    learning, & leveling up <br /> one day at a time.
                </h1>
                <p>Copyrightⓒ 2020 All rights reserved by HAYEON</p>
            </Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
