'use client';

import { Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Tickets from '@/app/(about)/about/tickets';
import WscModal from '@/components/wsc-modal';

export default function TicketsModal() {
  const router = useRouter();

  return (
    <WscModal dismissible onClose={() => router.back()} show>
      <Modal.Header>Tickets</Modal.Header>
      <Modal.Body>
        <Tickets />
      </Modal.Body>
    </WscModal>
  );
}
