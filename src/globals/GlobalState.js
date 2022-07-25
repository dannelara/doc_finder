import React, { useState, useEffect } from "react";

export const GlobalStateContext = React.createContext(null);

const GlobalState = ({ children }) => {
  const currentStoredSearchString = localStorage.getItem("search_string")
    ? JSON.parse(localStorage.getItem("search_string"))
    : undefined;

  // FIX THIS! Search string must be saved to the local storage!
  const [searchString, setSearchString] = useState(currentStoredSearchString);
  const [searchOptions, setSearchOptions] = useState({});
  const [currentSelectedArticle, setCurrentSelectedArticle] = useState(null);

  const state = {
    searchString,
    setSearchString,
    searchOptions,
    setSearchOptions,
    currentSelectedArticle,
    setCurrentSelectedArticle,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
