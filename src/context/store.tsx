import React, { createContext, useState, ReactNode, useContext } from "react";

type contextType = {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  queryVal: string | null;
  setQueryVal: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setisloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const stateContext = createContext<contextType>({
  queryVal: "",
  setQueryVal: () => "",
  data: [],
  setData: () => [],
  error: "",
  setError: () => "",
  isLoading: false,
  setisloading: () => {},
});

type Props = {
  children: ReactNode;
};

export const useContextStoreProvider = () => {
  return useContext(stateContext);
};

const StateProvider = ({ children }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [queryVal, setQueryVal] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setisloading] = useState<boolean>(false);

  const states: contextType = {
    queryVal,
    setQueryVal,
    data,
    setData,
    error,
    setError,
    isLoading,
    setisloading,
  };

  return (
    <stateContext.Provider value={states}>{children}</stateContext.Provider>
  );
};

export default StateProvider;
