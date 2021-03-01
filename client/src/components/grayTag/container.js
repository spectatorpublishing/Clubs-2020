import React, { useState } from 'react';
import { GrayTagContext } from '../contexts/index';

const GrayTagContainer = ({ children, objId, data, setData }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleClick = (identifier, data, setData, objId, text) => {
    let tempData = { ...data };
    if (selectedTag === identifier) {
      if (objId in tempData) {
        tempData[objId] = '';
        setData(tempData);
      } else {
        console.error('objId not in the obj');
      }
      setSelectedTag('');
    } else {
      setSelectedTag(identifier);
      if (objId in tempData) {
        tempData[objId] = text;
        setData(tempData);
      } else {
        console.error('objId not in the obj');
      }
    }
  };
  return (
    <GrayTagContext.Provider
      value={{ handleClick, selectedTag, data, setData, objId }}
    >
      {children}
    </GrayTagContext.Provider>
  );
};

export default GrayTagContainer;
