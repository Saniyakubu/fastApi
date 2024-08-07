import React, { createContext, useState, ReactNode, useContext } from "react";

type contextType = {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  chunk: any[];
  setChuck: React.Dispatch<React.SetStateAction<any[]>>;
  finalMessage: any;
  setFinalMessage: React.Dispatch<React.SetStateAction<any[]>>;
  queryVal: string | null;
  setQueryVal: React.Dispatch<React.SetStateAction<string>>;
  chatQueryVal: string | null;
  setChatQueryVal: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setisloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const stateContext = createContext<contextType>({
  queryVal: "",
  setQueryVal: () => "",
  chatQueryVal: "",
  setChatQueryVal: () => "",
  data: [],
  setData: () => [],
  chunk: [],
  setChuck: () => [],
  finalMessage: [],
  setFinalMessage: () => [],
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
  const [chunk, setChuck] = useState<any[]>([]);
  const [finalMessage, setFinalMessage] = useState<any>([]);
  const [queryVal, setQueryVal] = useState<string>("");
  const [chatQueryVal, setChatQueryVal] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setisloading] = useState<boolean>(false);

  const states: contextType = {
    queryVal,
    setQueryVal,
    chatQueryVal,
    setChatQueryVal,
    data,
    setData,
    chunk,
    setChuck,
    error,
    setError,
    isLoading,
    setisloading,
    finalMessage,
    setFinalMessage,
  };

  return (
    <stateContext.Provider value={states}>{children}</stateContext.Provider>
  );
};

export default StateProvider;
