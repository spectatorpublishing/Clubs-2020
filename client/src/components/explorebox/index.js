import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import SearchTag from '../searchTag/index';

const Box = styled.div`
    background-color: ${(props) => props.theme.colors.fullWhite};
    text-align: left;
    width: auto;
    margin: 1rem;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 7px;
    border: none;
    font-weight: 500;

    @media only screen and (max-width : 768px) {
      margin: 1rem 0.5rem 1rem 0.5rem;
    }

    h2 {
      color: ${(props) => props.theme.colors.black};
      font-weight: 600;

      @media only screen and (max-width: 768px) {
        padding-left: 1.5rem;
      }

      @media only screen and (max-width: 320px) {
        padding-left: 1rem;
      }
    }

    a {
        text-decoration: none;
    }

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (max-width: 320px) {
      padding: 0rem 0.5rem 0rem 0.5rem;
    }
  }

  p {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray};
    padding-right: 0.5rem;
    @media only screen and (max-width: 768px) {
      margin-left: 1.5rem;
    }

    @media only screen and (max-width: 320px) {
      margin-left: 1rem;
    }
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 1px solid;
    border-bottom: 0px solid;
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1.5rem;
  margin-right: 1rem;

  @media only screen and (max-width: 768px) {
    margin: 0rem 0rem 0rem auto;
  }
`;

const SimpleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgDesktop = styled.div`
  padding-right: 0.5rem;
  margin: 1rem 0rem 0.5rem auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ImgMobile = styled.div`

  display: none;
  margin-left: auto;
  margin: auto 0rem auto auto;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.div`
  margin: 0.5rem auto 0rem 0.5rem;
  height: 6rem;
  width: 6rem;

  img {
    object-fit: cover;
    height: 6rem;
    width: 6rem;
    margin-bottom: 0rem;
    -webkit-border-radius: 3rem;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 1rem;
    height: 5rem;
    width: 5rem;

    img {
      height: 5rem;
      width: 5rem;
      -webkit-border-radius: 5rem;
    }
  }
`;

const Tags = styled.div`
  padding: 0rem 0rem 0.5rem 0rem;
  margin: 0rem 1.5rem 0rem 1.2rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.red};

  button {
    margin: 5px;
  }

  @media only screen and (max-width: 320px) {
    margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
`;

const Item = styled.div`
  margin: 0.3rem auto 0.3rem auto;
  padding: 0.2rem;
  color: ${(props) => props.theme.colors.gray};
  font-size: 1rem;
  text-align: center;
  min-width: 2rem;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 0.875rem;

  svg {
    padding-right: 0.5rem;
    position: relative;
    top: 15%;
    font-size: 0.875rem;

    @media only screen and (max-width: 320px) {
      padding-right: 0.25rem;
    }
  }

  p {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;


export const ExploreBox = ({name, description, clubSize, tags, imageURL, acceptingMembers, applicationRequired, cardLink}) => {
    const Members = acceptingMembers ? <><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon><p>Open</p></> 
                  : <><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon><p>Closed</p></>;
    const Application = applicationRequired ? <p>Application</p> : <p>No Application</p>;
        
    return (
        <Box>  
            <a href={cardLink}>
                <Row>
                    <div>
                      <SimpleRow>
                        <h2>{name}</h2>
                        <ImgMobile>
                          {((imageURL === "") || (imageURL === " ")) ? null :
                          <Icon><img alt='club logo' src={imageURL}/></Icon>}
                        </ImgMobile>
                      </SimpleRow>
                        <p>{description}</p>
                    </div>
                    <ImgDesktop>
                      {((imageURL === "") || (imageURL === " ")) ? null :
                      <Icon><img alt='club logo' src={imageURL}/></Icon>}
                    </ImgDesktop>
                </Row>
                <Tags>{tags.map((tag, key) => <SearchTag key={key} text={tag}/>)}</Tags>
                <hr/>
                <Row>
                    <Item>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        {clubSize}
                    </Item>
                    <Item>
                        {Members}
                    </Item>
                    <Item>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        {Application}
                    </Item>
                </Row>
            </a>
        </Box>   
    );
};

export default ExploreBox;
