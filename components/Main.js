import React from 'react';
import { Layout, Image } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
const { Content } = Layout;

const mainText = css`
    padding: 3rem 1.5rem 5rem 1.5rem;

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
                    <h1>UI UX Planner, Front-end Developer</h1>
                    <h4>
                        사용자를 위한 서비스를 기획하고 코딩하며 제가하는 일을
                        좋아합니다.
                    </h4>
                    <Image width={240} src="/img/1-2.png" />
                </div>
            </Content>
        </>
    );
};

export default Main;
