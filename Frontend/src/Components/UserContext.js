import React, { createContext, useState } from 'react';

const UserContext = createContext({
  username2: '',
  setUsername2: () => {}
  
});
export default UserContext;