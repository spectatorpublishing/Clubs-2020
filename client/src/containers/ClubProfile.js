import React from 'react';
import styled from 'styled-components';
//import ExploreBox from '../components/explorebox/index';

const PageWrapper = styled.main`
    padding: 2rem;

    h1{
        font-size: 20px;
    }
`;

const Content = styled.div`

`;

const Cards = styled.div`

`;

export const ClubProfile = () => {
    return(
        <PageWrapper>
            <Content>
                <h1>Columbia University Jazz Ensemble</h1>
                <p>Last Updated: 'date'</p>
                <h2>Description:</h2>
                <p>Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.</p>
                <h2>Highlights</h2>
                    <li>A caring and loving community that adheres to these values</li>
                    <li>Friends to study, eat, and hang out with</li>
                    <li>Weekly get togethers at the Multicultural Affairs space with food</li>
                    <li>Connections to the wonderful staff who work in the MA Office</li>
                <h2>How to Join</h2>
                <p>As a political group that has well-defined values, we look for students who share our values and take our community and work seriously. For this reason, we require an application. To respect everyone’s time and capacity, our application is short. If your application does not have any major issues, you will be invited to interview with us! Afterwards, we will email you with a decision. We try to be as inclusive as possible; in fact, our club has nearly doubled in size in the last two years. If you think MSA is a good fit for you, apply here: https://googl.form.abcdef12345</p>
                <p><b>Application</b>: https://googl.form.abcdef12345</p>
            </Content>
            <Cards>

            </Cards>
        </PageWrapper>
    )
}