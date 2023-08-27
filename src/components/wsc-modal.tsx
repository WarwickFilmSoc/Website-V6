import { CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import React from 'react';

const theme: CustomFlowbiteTheme = {
  modal: {
    content: {
      inner:
        'relative bg-modal shadow flex flex-col max-h-[90vh] border-2 border-white overflow-auto',
    },
    body: {
      base: 'px-4 py-4',
    },
    header: {
      title: 'text-3xl font-bold font-lexend uppercase',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-gray-900',
      },
    },
  },
};

export default function WscModal({
  children,
  show,
  dismissible,
  onClose,
}: {
  children: React.ReactElement[];
  show: boolean;
  dismissible?: boolean;
  onClose: () => void;
}) {
  return (
    <Flowbite theme={{ theme }}>
      <Modal dismissible={dismissible} show={show} onClose={onClose}>
        {children}
      </Modal>
    </Flowbite>
  );
}
