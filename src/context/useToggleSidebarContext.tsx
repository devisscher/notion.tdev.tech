import React, { useContext } from 'react';

export const ToggleSidebarContext = React.createContext(true);

export const useToggleSidebarContext = () => useContext(ToggleSidebarContext);

export default ToggleSidebarContext;
