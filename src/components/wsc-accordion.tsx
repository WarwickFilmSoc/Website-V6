import { Accordion, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import React from 'react';

const theme: CustomFlowbiteTheme = {
  accordion: {
    title: {
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left',
      flush: {
        off: 'hover:bg-[#ffffff11]',
      },
      heading: 'text-base font-medium normal-case',
      open: {
        on: 'text-black bg-white hover:bg-white',
      },
    },
  },
};

export default function WscAccordion({
  children,
}: {
  children: React.ReactElement[];
}) {
  return (
    <Flowbite theme={{ theme }}>
      <Accordion collapseAll>{children}</Accordion>
    </Flowbite>
  );
}
