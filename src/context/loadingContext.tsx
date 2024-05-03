import { type ReactNode, createContext, useState } from "react";

type LoadingContext = {
  loadingApp: boolean;
  handleLoadingApp: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContext>(
  {} as LoadingContext,
);

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loadingApp, setLoadingApp] = useState(false);

  const handleLoadingApp = (value: boolean) => {
    setLoadingApp(value);
  };

  return (
    <LoadingContext.Provider value={{ loadingApp, handleLoadingApp }}>
      {children}
    </LoadingContext.Provider>
  );
};
