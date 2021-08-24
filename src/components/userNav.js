import '../components/user.css';

import React from 'react';

import { useHistory } from 'react-router';

const UserNav = () => {
  const history = useHistory()

  const userTitleClickHandle = (event) => {
    event.preventDefault()
    history.push('/')
  }
  return (
  <div className='userNav'>
    <div className='userTitle'>
      <a href="/" title='Home'><h1 onClick={userTitleClickHandle}>RecipeHub</h1></a>
    </div>
  </div>
  )
}

export default UserNav
