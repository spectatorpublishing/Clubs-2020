import React from 'react';
import { FaqBox } from '../components/faqbox';
import styled from 'styled-components';

export const FAQ = () => {

  return (
    <Wrapper>
      <PageWrapper>
        <Title>Frequently Asked Questions</Title>
        <FaqBox
          title='What is LionClubs?'
          text='LionClubs is your central source of information about student organizations at Barnard and Columbia. 
                Keep discovering new clubs throughout the year, not just at the Club Fair.'
          buttonText='Explore Clubs'
          buttonLink='/'
        />
        <FaqBox
          title='How do I use LionClubs? (Student)'
          text='Want to browse clubs at Barnard and Columbia? LionClubs is your best resource!

                > Do an organized search with our many search tools
                > Do a random search with our shuffle functionality
                > Cursorily glance over many clubs at once 
                > Peruse club profiles for in depth information by clubs themselves'
          buttonText='Explore Clubs'
          buttonLink='/'
        />
        <FaqBox
          title='How do I use LionClubs? (Clubs)'
          text='Run an official or unrecognized club? Both are welcome to create profiles on our platform and be represented here.'
          buttonText='Register Club'
          buttonLink='/signup'
        />
        <FaqBox
          title='I have a specific inquiry.'
          text='Lost access to club profile? Club profile hacked or no longer secure? If you have a sensitive or pressing request, please let us know.'
          buttonText='Contact Us'
          buttonLink='/'
        />
        <FaqBox
          title='How can I provide feedback?'
          text='Designed for club seekers and club leaders, LionClubs values your feedback! To report a bug, ask a question, or suggest a modification, please fill out our feedback form.'
          buttonText='Feedback Form'
          buttonLink='/'
        />
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f4f6f8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/FAQ+Waves.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: contain;  
  @media only screen and (max-width : 768px) {
    background-size: auto 30rem; 
    background-position: right top;
  }
`;

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  margin-top: 12rem;
  font-size: 2rem;
  text-align: center;
  width: 100vw;
  @media only screen and (max-width : 768px) {
    margin-top: 8rem;
  }
`;
