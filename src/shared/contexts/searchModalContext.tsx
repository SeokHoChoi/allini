import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type ModalState = {
  isOpen: boolean;
};

type ModalActions = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<{
  state: ModalState;
  actions: ModalActions;
}>({
  state: { isOpen: false },
  actions: {
    setIsOpen: () => {}, // Placeholder function, to be replaced in the provider
  },
});

export function SearchModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    state: { isOpen },
    actions: {
      setIsOpen,
    },
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useSearchModal() {
  return useContext(ModalContext);
}
