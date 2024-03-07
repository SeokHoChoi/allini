import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type HasErrorState = {
  hasError: boolean;
};

type HasErrorActions = {
  setHasError: Dispatch<SetStateAction<boolean>>;
};

const HasErrorContext = createContext<{
  state: HasErrorState;
  actions: HasErrorActions;
}>({
  state: { hasError: false },
  actions: {
    setHasError: () => {},
  },
});

export function CheckErrorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasError, setHasError] = useState<boolean>(false);

  const value = {
    state: { hasError },
    actions: {
      setHasError,
    },
  };

  return (
    <HasErrorContext.Provider value={value}>
      {children}
    </HasErrorContext.Provider>
  );
}

export function useCheckError() {
  return useContext(HasErrorContext);
}
