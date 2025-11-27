import { useContext, type Context } from "react";
import { createContext } from "react";

export const useStrictContext = <T>(context: Context<T | null>): T => {
  const value = useContext(context);

  if (value === null) {
    throw new Error("Пустое значение контекста");
  }

  return value;
};

export const createStrictContext = <T>() => createContext<T | null>(null);

export const createDi = <T>() => {
  const injector = createStrictContext<T>();
  const useDi = () => useStrictContext(injector);

  return { Injector: injector.Provider, useDi };
};
