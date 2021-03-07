import React from 'react';
import {Image, Layout} from 'antd';
import {Card} from 'antd';

/** @jsx jsx */
import {Row, Col} from 'antd';
import {jsx, css} from '@emotion/core';

const {Content} = Layout;

const content = css`
    padding: 10rem 5rem 18rem;
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
    padding: 5rem 0.5rem;
    
    .ant-card{
        max-width: 350px;
        min-height: 250px;
        border-radius: 25px;
    }
   
    img {
        border-radius: 25px 25px 0px 0px;
    } 
   
    h3{
        color: #000;
    }
    
    span{
         #484848;
        font-weight: 200;
    }
`;


const onClickImg = (url) => {
    window.open(url, '_blank')
}


const Work = () => {
    const items = [
        {
            title: 'D.aid 서비스',
            subtitle: '기획 및 소개서 / 매뉴얼 제작',
            cont: 'HTML / CSS / Javascript / Vue',
            image: "../img/work/01.png",
            url: 'https://drive.google.com/file/d/12H8ONTRvwKPPzq8CTwDWfOpyUZTOaA0z/view?usp=sharing'
        },
        {
            title: '옐로우버스 서비스',
            subtitle: '프론트엔드 개발',
            cont: 'HTML / Sass / React / Bootstrap',
            image: "../img/work/02.png",
            url: 'https://drive.google.com/file/d/1OArp7tiz1N_x1d8YdTPf40sJFiCB9dWq/view?usp=sharing'
        },
        {
            title: '다독다독 앱 서비스',
            subtitle: '퍼소나 분석 및 기획서 제작',
            cont: '개인 프로젝트',
            image: '../img/work/03.png',
            url: 'https://drive.google.com/file/d/1LIYl_tUPhT0gVSyPDUJAlwpQMNuIrPmK/view?usp=sharing'
        },
        {
            title: '네이버페이 기능 개선안',
            subtitle: '개선안 기획서 제작',
            cont: '개인 프로젝트',
            image: '../img/work/04.png',
            url: 'https://drive.google.com/file/d/1utqaEpNKZ8wzXaJ9WbnAaEEuhEWGcdH3/view?usp=sharing'
        },
        {
            title: '상담톡 플로우 정리',
            subtitle: '챗봇 플로우 정리',
            cont: '인턴 프로젝트',
            image: "../img/work/05.png",
            url: 'https://drive.google.com/file/d/1KussC4EDzLW38yYF2eXmEwDBlh3DKyhT/view?usp=sharing'
        },
    ];


    return (
        <>
            <Content css={content}>
                <div>
                    <h1>My Recent Work</h1>
                    <p>
                        작업한 몇 가지 프로젝트들이 있습니다. 더 궁금하신 점이 있나요?
                        <a href="mailto:kmhayeon12@gmail.com"> &nbsp;Email me.</a>
                    </p>
                </div>
                <div>
                    <Row>
                        {items.map((item, idx) => {
                            return (
                                <div className="site-card-wrapper" css={workContent} key={idx}>
                                    <Col flex={3}>
                                        <Card hoverable
                                              style={{width: 240}}
                                              cover={<img src={item.image}/>}
                                              onClick={(e) => onClickImg(item.url)}>
                                            <h3> {item.title}</h3>
                                            <span>{item.subtitle}<br/>
                                                {item.cont}</span>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })}
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default Work;
