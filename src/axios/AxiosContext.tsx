import React, { createContext, useContext } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/test',
});

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);
