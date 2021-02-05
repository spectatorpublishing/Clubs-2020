import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%; 
    top: 0; 
    left: 0;
    bottom: 0:
    position: relative;
    font-weight: 600;
`;

const Container = styled.div`
    width: 34.7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (max-device-width: 30rem) {
        width: 100%; 
    }
`;

const Title = styled.div`
    font-size: 2.25rem;
    line-height: 2.7rem;
    text-align: center;
    color: #000000;
`;

const Description = styled.div`
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;
    color: #9A9A9A;
    padding: 0.75rem;
`;

const SignUp = styled.div`
    display: ${props => props.hidden};
    background-color: #FFFFFF;
    width: 24.4rem;
    border-radius: 0.4rem;
    box-shadow: 0.125rem 0.625rem 1.875rem rgba(0, 0, 0, 0.05);
    padding: 8%;
    font-size: 0.875rem;
    line-height: 1rem;
    color: #696969;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-device-width: 30rem) {
        width: 75%; 
    }
`;

const Confirmation = styled.div`
    display: ${props => props.hidden};
    background-color: #FFFFFF;
    width: 24.4rem;
    border-radius: 0.4rem;
    box-shadow: 0.125rem 0.625rem 1.875rem rgba(0, 0, 0, 0.05);
    padding: 8%;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #696969;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media only screen and (max-device-width: 30rem) {
        width: 75%; 
    }
`;

const Icon = styled.div`
    position: relative;
    height: 2.67rem;
    width: 3.33rem;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #42B7CB;
    border-radius: 0.4rem;
    margin-top: 1rem;
`;

const Flap = styled.div`
    width: 0;
    height: 0;
    border-left: 1.76rem solid transparent;
    border-right: 1.76rem solid transparent;
    border-top: 1.4rem solid #42B7CB;
    border-bottom: 0.2rem solid transparent;
    margin-left: auto;
    margin-right: auto;
`;

const Dot = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: #EC6C52;
    margin-left: 0.8rem;
    margin-top: -2rem;
`

const Link = styled.a`
    padding-left: 0.3rem;
    color: #87bff0;
    text-decoration: none;
`;

const EmailLink = styled.a`
    color: #87bff0;
    text-decoration: none;
`;

const Details = styled.div`
    padding-bottom: 1.125rem;
    padding-top: 1.125rem;
`;
const Input = styled.input`
    width: 100%;
    background: none;
    color: #696969;
    border: none;
    border-bottom: 0.03rem solid #9A9A9A;
`;

const InputDesc = styled.div`
    font-size: 0.8rem;
    line-height: 0.95rem;
    color: #9A9A9A;
    padding-top: 0.3rem;
`

export const SignUpBox = ({ title, desc, descLink, descLinkText, detail, detailDesc, detailLink, detailLinkText, detailTwo, detailThree, signUp, confirmation}) => {
  return (
    <Wrapper>
        <Container>
            <Title>
                {title}
            </Title>
            <Description>
                {desc}
                <Link href={descLink}>
                    {descLinkText}
                </Link>
            </Description>
            <SignUp hidden={signUp}>
                <Details>{detail}</Details>
                <Input type="text" id="userEmail"></Input>
                <InputDesc>{detailDesc}</InputDesc>
                <Details>{detailTwo}</Details>
                <Input type="text" id="userPassword"></Input>
                <Details>{detailThree}</Details>
                <Input type="text" id="userPasswordConfirm"></Input>
            </SignUp>
            <Confirmation hidden={confirmation}>
                <Icon><Flap><Dot></Dot></Flap></Icon>
                
                
                {detail} 
                <EmailLink href={detailLink}>
                    {detailLinkText}
                </EmailLink>
                {detailTwo}
            </Confirmation>
        </Container>
    </Wrapper>
  );
};
