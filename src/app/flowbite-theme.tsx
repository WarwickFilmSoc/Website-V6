'use client';
import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import React from 'react';

const theme: CustomFlowbiteTheme = {
  accordion: {
    title: {
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left',
      flush: {
        off: 'hover:bg-[#ffffff11]',
      },
      heading: 'text-lg font-medium normal-case',
      open: {
        on: 'text-black bg-white hover:bg-white',
      },
    },
    content: {
      base: 'bg-primary/40 text-base p-5',
    },
  },
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
  textInput: {
    field: {
      input: {
        sizes: {
          md: 'p-2.5 text-[16px]',
        },
      },
    },
  },
};

export default function FlowbiteTheme({
  children,
}: {
  children: React.ReactElement;
}) {
  return <Flowbite theme={{ theme }}>{children}</Flowbite>;
}
