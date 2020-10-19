import React from 'react';
import {ExploreBox} from '../components/explorebox/index.js';

export const Explore = () => {
    return(
        <main>
            <h1>Explore</h1>
            <ExploreBox 
                name="Columbia University Jazz Ensemble" 
                description="A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                imageURL = "icon"
                tags = "**Tags go here**"
                clubSize = "20-50"
                acceptingMembers = "Open"
                applicationRequired = "Application"
                cardLink="/explore"
            />
        </main>
    )
}