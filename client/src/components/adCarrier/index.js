import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import styled from 'styled-components';


const Style = styled.div`
  background-color: red;
  color: black;
  height: ${props => props.Height}px;
  width: ${props => props.Width}px;
  margin-left: auto;
  margin-right: auto;
`

const adCarrier = ({Height, Width, Path}) =>{
  return (
    <Style>
      <h1>PlaceholderText</h1>
      <DFPSlotsProvider 
        dfpNetworkId="59699124"
        /* sizeMapping={[{viewport:[sizeMobile,sizeMobile], sizes: []},
                      {viewport:[sizeTab,sizeTab], sizes: []},
                      {viewport:[sizeCPU,sizeCPU], sizes: []} ]}
                      //Currently unneeded; adCarrier is being called differently for each media size
        collapseEmptyDivs Likely turn on for final product */
      >
        <div>
          <AdSlot sizes={[[Width, Height]]} adUnit={Path} />
        </div>
      </DFPSlotsProvider>
    </Style> 
  );
}

export default adCarrier;


/* 

NOTE: ALL REQUIRED AD SLOTS BASED ON PROVIDED MOCKUPS:
 - Home:
   - DESKTOP Top banner, 728x90
   - MOBILE Top banner, 328x50
 - Club profile:
   - UNIVERSAL Sidebar, 300x250


When we get ads, check:
 - adSenseAttributes
 - Rendering sequence and desires - see last 5 AdSlot props in documentation
 - Refreshing ads on certain intervals, may increase revenue? See DFPManager docs, 'refresh'
 - collapseEmptyDivs (see above in DFPSlotsProvider instantiation)
 
 */