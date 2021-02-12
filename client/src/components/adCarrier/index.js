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
        /* sizeMapping={[{viewport:[sizeMobile,sizeMobile], sizes: []}, //Alternate units?
                      {viewport:[sizeTab,sizeTab], sizes: []},
                      {viewport:[sizeCPU,sizeCPU], sizes: []} ]} //ADSLOT ACCEPTS, DEPENDENT USAGE
        //collapseEmptyDivs Turn back on for final product */
      >
        <div>
          <AdSlot sizes={[[Width, Height]]} adUnit={Path} />
        </div>
      </DFPSlotsProvider>
    </Style> 
  );
}

export default adCarrier;






// "---------------"

/* 
export default class adUnit extends Component {
  render() {
    return (
      <DFPSlotsProvider dfpNetworkId="needToGet">
        <div>
          <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="?{props.path}?" />
        </div>
      </DFPSlotsProvider>
    );
  }
}
 */

// "---------------"

/* Need to determine:
 - What info is passed in / what props am I getting to call and their props
 - dfpNetworkId (example offered 59699124), similarly adUnitPath (example used props.path)
 - "fluid" sizes? Dont anticipate needing this, should render based off of prop...
 - Will sizing accept alterate units?
 

NOTE: ALL REQUIRED AD SLOTS BASED ON PROVIDED MOCKUPS:
 - Home:
   - DESKTOP Top banner, 728x90
   - MOBILE Top banner, 328x50
 - Club profile:
   - UNIVERSAL Sidebar, 300x250


Check necessity later:
 - adSenseAttributes
 - Rendering sequence and desires - see last 5 AdSlot props in documentation
 - Refreshing ads on certain intervals, money based? See DFPManager docs, 'refresh'
 - Disable ad personalization? Money based?
 */