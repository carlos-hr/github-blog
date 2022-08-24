import { createContext, ReactNode } from "react";

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({});

export const IssuesProvider = ({ children }: IssuesProviderProps) => {
  return (
    <IssuesContext.Provider value={"aaaa"}>{children}</IssuesContext.Provider>
  );
};
