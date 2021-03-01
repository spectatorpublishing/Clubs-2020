
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import styled from 'styled-components';


const adCarrier = ({Height, Width, Path}) =>{
  return (
    <div>
      <DFPSlotsProvider 
        dfpNetworkId="59699124"
        /* sizeMapping={[{viewport:[sizeMobile,sizeMobile], sizes: []},
                      {viewport:[sizeTab,sizeTab], sizes: []},
                      {viewport:[sizeCPU,sizeCPU], sizes: []} ]} //ADSLOT ACCEPTS, DEPENDENT USAGE
        //collapseEmptyDivs Turn back on for final product */
      >
        <div>
          <AdSlot sizes={[[Width, Height]]} adUnit={Path} />
        </div>
      </DFPSlotsProvider>
    </div> 
  );
}

export default adCarrier;



 
/*
NOTE: ALL REQUIRED AD SLOTS BASED ON PROVIDED MOCKUPS:
 - Explore:
   - DESKTOP Top banner, 728x90
   - MOBILE Top banner, 328x50
 - Club profile:
   - UNIVERSAL Sidebar, 300x250


Check necessity later, when ads resources are given to actually link content:
 - adSenseAttributes.
 - Rendering sequence and desires - see last 5 AdSlot props in documentation.
 - Refreshing ads on certain intervals, which may affect revenue. See DFPManager docs, 'refresh'
 - Option to disable ad personalization.
 */