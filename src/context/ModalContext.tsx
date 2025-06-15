'use client';
// TODO USE SLOTS?

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContent = ReactNode | null;

type ModalContextType = {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const openModal = (content: ModalContent) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <div className="modal">
          <div className="bg-white p-4 rounded-xl" onClick={(e) => e.stopPropagation()}>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within a ModalProvider');
  return ctx;
};
