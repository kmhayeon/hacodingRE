import React from 'react';
import { Card, Image, Layout } from 'antd';
const { Content } = Layout;
import { Row, Col } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

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
        background: #00000;
        opacity: 0;
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
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '50px' }}>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col flex={12}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/*<Row gutter={16}>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ paddingTop: '50px' }}>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="img">
                                <div className="txt">
                                    <p>안녕하세요</p>
                                </div>
                            </div>
                        </Col>
                    </Row>*/}
                </div>
            </Content>
        </>
    );
};

export default Work;
