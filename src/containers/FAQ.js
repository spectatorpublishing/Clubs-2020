import React from 'react';
import { FaqBox } from '../components/faqbox';

export const FAQ = () => {
    return(
        <>
            <h1>FAQ</h1>
            <FaqBox 
                title="What is Clubs@CU?" 
                text="Clubs@CU is your central source of information about student organizations at Barnard and Columbia. 
                Keep discovering new clubs throughout the year, not just at the Club Fair."
                buttonText="Explore Clubs"
                buttonLink="/explore"
            />
            <FaqBox 
                title="How do I use Clubs@CU? (Clubs)" 
                text="Run an official or unrecognized club? Both are welcome to create profiles on our platform and be represented here."
                buttonText="Explore Clubs"
                buttonLink="/"
            />
        </>
    )
}