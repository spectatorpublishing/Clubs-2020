import React from 'react';
import { A } from 'hookrouter';

export const Navbar = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: 'Aquamarine'}}>
            <A href="/explore">Explore</A>
            <A href="/faq">FAQ</A>
        </div>
    )
}