import React from 'react';
import { Card, Image, Layout } from 'antd';
const { Content } = Layout;
import { Row, Col } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const content = css`
    padding: 13rem 1.5rem 18rem;
    border-bottom: 1px solid #ff7e57;

    h1 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
`;

const Company = () => {
    return (
        <>
            <Content css={content}>
                <div>
                    <h1>
                        I have collaborated with some
                        <br />
                        experience companies:
                    </h1>
                    {/*<h1>
                        몇몇의 기업과 협업을 했습니다.
                        <br />
                        경력 회사:
                    </h1>*/}
                </div>
                <div
                    className="site-card-wrapper"
                    style={{
                        margin: '0 auto',
                        maxWidth: '1200px',
                        paddingTop: '3rem',
                    }}
                >
                    {/* <Row gutter={16}>
                        <Col lg={8} md={16}>
                            <Image
                                width={200}
                                style={{ paddingTop: '10px' }}
                                src="/img/ci/ci-lunasoft.png"
                            />
                        </Col>
                        <Col lg={8} md={16}>
                            <Image width={100} src="/img/ci/ci-dru.png" />
                        </Col>
                        <Col lg={8} md={16}>
                            <Image
                                width={200}
                                style={{ paddingTop: '15px' }}
                                src="/img/ci/ci-reverselab.svg"
                            />
                        </Col>
                    </Row>*/}

                    <Row>
                        <Col flex="auto">
                            <Image width={200} src="/img/ci/ci-lunasoft.png" />
                        </Col>
                        <Col flex="auto">
                            <Image width={200} src="/img/ci/ci-lunasoft.png" />
                        </Col>
                        <Col flex="auto">
                            <Image width={200} src="/img/ci/ci-lunasoft.png" />
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default Company;
