import React, { useEffect, useState } from 'react';
import { GrayTagContext } from '../contexts/index';

const GrayTagContainer = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState('');
  useEffect(() => {
    console.log(selectedTag);
  }, [selectedTag]);

  const handleClick = (identifier) => {
    if (selectedTag === identifier) setSelectedTag('');
    else setSelectedTag(identifier);
  };
  return (
    <GrayTagContext.Provider value={{ handleClick, selectedTag }}>
      {children}
    </GrayTagContext.Provider>
  );
};

export default GrayTagContainer;
