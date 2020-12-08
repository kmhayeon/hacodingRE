import React from 'react';
import {Card, Image, Layout} from 'antd';
import Link from 'next/link';

const {Content} = Layout;
import {Row, Col} from 'antd';
/** @jsx jsx */
import {jsx, css} from '@emotion/core';

const content = css`
    padding: 9rem 1.5rem;
    border-bottom: 1px solid #e6ecf8;

    h1 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 17px;
        font-weight: 300;
        margin-bottom: 1.5rem;
    }

    a {
        color: #ff7e57;

        &:hover {
            font-weight: 500;
        }
    }
`;

const workContent = css`
    margin: 0 auto;
    max-width: 1200px;
    padding: 8rem 0.4rem;

    .img {
        width: 90%;
        height: 250px;
        background: url('/img/con1.png') no-repeat;
        border-radius: 20px;

        &:hover {
            .txt {
                color: #ffffff;
                opacity: 0.9;
                cursor: pointer;
                background-color: #ff7e57;
                transition: all 0.3s;
                position: absolute;
                border-radius: 20px;
                width: 100%;
                height: 250px;
                margin: auto;
                position: relative;
            }
        }
    }
    .txt {
        color: #ffffff;
        background: #00000;
        opacity: 0;
    }
    h1{
        padding-top: 60px;
        color: #ffffff;
    }
    span{
        color: #ffffff;
    }
`;


const Work = () => {
    return (
        <>
            <Content css={content}>
                <div>
                    <h1>My Recent Work</h1>
                    {/*<h1>최근 프로젝트</h1>*/}
                    <p>
                        작업한 몇 가지 프로젝트들이 있습니다. 더 궁금하신 점이
                        있나요?
                        <a
                            href="mailto:kmhayeon12@gmail.com"
                            title="문의 메일 보내기"
                        >
                            &nbsp;Email me.
                        </a>
                    </p>
                </div>
                <div className="site-card-wrapper" css={workContent}>
                    <Row>
                        <Col flex={12}>
                            <div className="img">
                                <Link
                                    href="//drive.google.com/file/d/13h5nxIywueOUpQZskQ_WzxRbxOC9MlY4/view?usp=sharing">
                                    <a className="foo" target="_blank" rel="noopener noreferrer">
                                        <div className="txt">
                                            <div className="data">
                                                <h1>D.aid</h1>
                                                <span>기획 및 구축<br/>
                                                    HTML / CSS / VUE</span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <h1>Company Homepage</h1>
                                    <span>유지 / 보수<br/>
                                        HTML / CSS / javascript</span>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <h1>YellowBus admin 1.0</h1>
                                    <span>유지 / 보수<br/>
                                        HTML / CSS / javascript / Jquery</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '50px'}}>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <h1>YellowBus admin 2.0</h1>
                                    <span>구축 및 유지/보수<br/>
                                        HTML / SCSS / React / Mobx</span>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <h1>Payment admin</h1>
                                    <span>구축 및 유지/보수<br/>
                                        HTML / SCSS / React / Redux</span>
                                </div>
                            </div>
                        </Col>
                        {/*<Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <h1>D.aid</h1>
                                    <span>기획 및 프론트 개발<br/>
                                        HTML / CSS / VUE</span>
                                </div>
                            </div>
                        </Col>*/}
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default Work;
