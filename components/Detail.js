import React from 'react';
import { Card, Image } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col } from 'antd';

const DetailDiv = css`
    background-color: #ff7e57;
    padding: 9rem 1.5rem;

    h1 {
        color: #fff;
        font-size: 1.89rem;
        margin-bottom: 2.3rem;
        line-height: 1.5;
    }

    h4 {
        color: #fff;
        font-size: 1.2em;
        font-weight: 400;
        margin-bottom: 8rem;
        line-height: 1.8;
      }
    }
`;

const ContentDiv = css`
    margin: 0 auto;
    max-width: 1200px;
    padding: 5rem 1.5rem;
    margin-top: -14rem;

    h1 {
        margin-bottom: 1.7em;
        font-weight: 600;
    }

    p {
        margin-bottom: 4em;
        font-size: 17px;
        font-weight: 200;
        margin-top: 0.4em;
    }

    p2 {
        color: #ff7e57;
        margin-top: 50px;
        font-size: 17px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0.4em 0em 0em 0em;
    }
    li {
        font-size: 17px;
        font-weight: 200;
        margin-bottom: 10px;
    }
`;

const row = css`
    background: #fff;
    border: 1px solid #e6ecf8;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
    border-radius: 20px;
`;

const col = css`
    border-right: 1px solid #e6ecf8;
`;

const card = css`
    border-radius: 20px;
    padding: 40px 10px;
`;

const img = css`
    margin: 0 auto 2em;
`;

const Detail = () => {
    return (
        <>
            <Image src="/img/hero.svg" />
            <div css={DetailDiv}>
                <h1>Hi, I’m Hayeon. Nice to meet you.</h1>
                <h4>
                    기획을 시작으로 프론트 개발까지 스타트업 등에서 <br />
                    여러사람들과 협력하여 비즈니스 및 소비자 모두를 위한
                    서비스를 개발하였습니다. <br /> 여러가지에 호기심이 많으며
                    개발을 하며 다양한 관점에서의 문제를 개선하기위해 끊임없이
                    노력하고 있습니다.
                </h4>
            </div>
            <div className="site-card-wrapper" css={ContentDiv}>
                <Row css={row}>
                    <Col span={12} css={col}>
                        <Card bordered={false} css={card}>
                            <Image css={img} width={60} src="/img/sketch.svg" />
                            <h1>Planner & Designer</h1>
                            <p>
                                단순한 콘텐츠 구조와 깨끗한 디자인 패턴,
                                <br />
                                그리고 사려 깊은 상호작용을 중시합니다.
                            </p>
                            <p2>Things I enjoy planning:</p2>
                            <p> UI / UX</p>
                            <p2>Plan&Design Tools:</p2>
                            <ul>
                                <li>Sketch</li>
                                <li>Zeplin</li>
                                <li>figma</li>
                                <li>Illustratior</li>
                                <li>Photoshop</li>
                                <li>Premiere</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col span={12} css={col} style={{ borderRight: '0px' }}>
                        <Card bordered={false} css={card}>
                            <Image
                                css={img}
                                width={60}
                                src="/img/web-programming.svg"
                            />
                            <h1>Front-end Developer</h1>
                            <p>
                                효율을 고려한 코드를 실현하는 것을 좋아하고,
                                <br />
                                브라우저에서 아이디어를 실현하는 것을 즐깁니다.
                            </p>
                            <p2>Languages I speak:</p2>
                            <p>HTML / CSS / Sass / JavaScript</p>
                            <p2>Dev Tools:</p2>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Mobx</li>
                                <li>Vue</li>
                                <li>Github</li>
                                <li>SourceTree</li>
                                <li>Jira</li>
                                <li>Bootstrap</li>
                                <li>Terminal</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Detail;
