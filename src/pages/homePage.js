import React, { useState } from 'react';

import { curRentState } from '../assets/pageTitles';
import HomeNav from '../components/homeNav';
import HomePageContent from '../components/homePageContent';

const HomePage = () => {
  //eslint-disable-next-line
  const [currentState, setCurrentState] = useState({ ...curRentState })

  return (
    <div>
      <HomeNav />
      <HomePageContent
        title={currentState.home.title}
        text={currentState.home.text}
      />
    </div>
  )
}

export default HomePage
