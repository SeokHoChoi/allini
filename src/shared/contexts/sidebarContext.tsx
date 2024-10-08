import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type SidebarState = {
  isOpen: boolean;
};

type SidebarActions = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<{
  state: SidebarState;
  actions: SidebarActions;
}>({
  state: { isOpen: false },
  actions: {
    setIsOpen: () => {},
  },
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    state: { isOpen },
    actions: {
      setIsOpen,
    },
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
