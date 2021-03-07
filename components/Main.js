import React from 'react';
import { Layout, Image } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
const { Content } = Layout;

const mainText = css`
    padding: 2rem 1.5rem 5rem 1.5rem;


    h1 {
        font-size: 45px;
        font-weight: 600;
    }

    h4 {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 80px;
    }
`;

const Main = () => {
    return (
        <>
            <Content>
                <div css={mainText}>
                    <h1>Hi, I’m Hayeon.</h1>
                    <h4>
                        안녕하세요. 자유로운 사고와 풍부한 호기심을 가진 김하연입니다.
                    </h4>
                    <Image width={240} preview={false} src="/img/1-2.png" />
                </div>
            </Content>
        </>
    );
};

export default Main;
