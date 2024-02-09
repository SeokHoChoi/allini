import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type PanelState = {
  isOpen: boolean;
};

type PanelActions = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const PanelContext = createContext<{
  state: PanelState;
  actions: PanelActions;
}>({
  state: { isOpen: false },
  actions: {
    setIsOpen: () => {}, // Placeholder function, to be replaced in the provider
  },
});

export function PanelProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    state: { isOpen },
    actions: {
      setIsOpen,
    },
  };

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
}

export function usePanel() {
  return useContext(PanelContext);
}
