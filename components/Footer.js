import React from 'react';
import { Button, Card, Col, Row, Layout, Image } from 'antd';
const { Content } = Layout;
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const conDiv = css`
    background-color: #ff7e57;
    padding: 4rem 0rem;

    .subDiv {
        margin: 0 100px;
        margin-top: -7rem;
    }

    .cardDiv {
        background-color: rgb(51 43 46);
        border: 0px;
        border-radius: 20px;
        padding: 3.5rem 1.25rem;

        p1 {
            color: #fff;
            font-size: 28px;
            font-weight: 400;
        }

        p2 {
            color: #fff;
            font-size: 18px;
            font-weight: 200;
            padding-top: 10px;
        }
    }
`;

const emailBtn = css`
    font-weight: 300;
    font-size: 17px;
    background-color: transparent;
    border: 2px solid #ff7e57;
    color: #fff;
    border-radius: 40px;
    padding: 10px 40px 37px 40px;
    &:hover {
        background-color: #ff7e57;
        color: #fff;
        border-color: #ff7e57;
    }
    &:focus {
        border: 2px solid #ff7e57;
        color: #ff7e57;
        border-radius: 40px;
    }
`;

const Footer = () => {
    return (
        <>
            <Content css={conDiv}>
                <div className="subDiv">
                    <Card className="cardDiv">
                        <Row>
                            <Col flex="auto">
                                <p1>Start a project</p1>
                            </Col>
                            <Col flex="auto">
                                <p2>
                                    더 궁금하신 점이 있다면
                                    <br />
                                    이메일로 연락 부탁드립니다.
                                </p2>
                            </Col>
                            <Col flex="auto">
                                <a
                                    href="mailto:kmhayeon12@gmail.com"
                                    title="문의 메일 보내기"
                                >
                                    <Button css={emailBtn}>
                                        Let's do this
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Content>
        </>
    );
};

export default Footer;
