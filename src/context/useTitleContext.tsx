import React, { useContext } from 'react';

export const TitleContext = React.createContext(true);

export const useTitleContext = () => useContext(TitleContext);

export default TitleContext;
