import React from 'react';
import { Card, Image, Layout } from 'antd';
const { Content } = Layout;
import { Row, Col } from 'antd';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Steps } from 'antd';
import { BulbTwoTone } from '@ant-design/icons';


const { Step } = Steps;

const content = css`
    padding: 13rem 1.5rem;

    h1 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
    Step{
        
    }
    .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title:after{
        background-color: #ff7e57;
    }
    
    .ant-steps-item-description, .ant-steps-item-subtitle{
        color: #000;
        font-size: 12px;
        display: block;
    }
    
    .ant-steps-small .ant-steps-item-title{
        padding-right: 12px;
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
    }
    
    .ant-steps-item-subtitle{
        margin-left:0;
    }
    .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description{
        color: #000;
    }
    
     @media only screen and (max-width: 653px) {
        display:none;
    }
`;

const Company = () => {
    return (
        <>
            <Content css={content}>
                <div>
                    <h1>Experience</h1>
                </div>
                <div
                    className="site-card-wrapper"
                    style={{
                        margin: '0 auto',
                        maxWidth: '1200px',
                        paddingTop: '4rem',
                    }}
                >
                    <Steps size="small" current={4}>
                        <Step title="계원예술대학" subTitle="2014.03 - 2017.02" description="디지털 미디어과 졸업" icon={<BulbTwoTone twoToneColor="#ff7e57" />} />
                        <Step title="LUNA SOFT" subTitle="2018.04 - 2018.06" description="플랫폼팀 인턴" icon={<BulbTwoTone twoToneColor="#ff7e57" />} />
                        <Step title="DataRep.Up" subTitle="2019.02 - 2020.02" description="Data & Platform팀 근무" icon={<BulbTwoTone twoToneColor="#ff7e57" />}/>
                        <Step title="Reverse Lab" subTitle="2020.06 - 2021.02" description="Development팀 근무" icon={<BulbTwoTone twoToneColor="#ff7e57" />}/>
                    </Steps>
                </div>
            </Content>
        </>
    );
};

export default Company;
