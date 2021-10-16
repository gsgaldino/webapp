import * as React from 'react';

const DialogContext = React.createContext();

export default function DialogProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <DialogContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      { children }
    </DialogContext.Provider>
  );
};

export function useDialog() {
  const context = React.useContext(DialogContext);
  const { isOpen, setIsOpen } = context;

  return { isOpen, setIsOpen };
};
