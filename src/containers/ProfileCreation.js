import React from 'react';
import SearchTag from '../components/searchTag/index';
import Checkbox from '../components/checkbox/index';

const ProfileCreation = () => {
  return (
    <div>
      <SearchTag text='Academic' />
      <SearchTag text='Advising' />
      <SearchTag text='Global Affairs' />
      <Checkbox />
    </div>
  );
};

export default ProfileCreation;
