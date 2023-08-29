'use client';

import { Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import Tickets from '@/app/(about)/about/tickets';

export default function TicketsModal() {
  const router = useRouter();

  return (
    <Modal dismissible onClose={() => router.back()} show>
      <Modal.Header>Tickets</Modal.Header>
      <Modal.Body>
        <Tickets />
      </Modal.Body>
    </Modal>
  );
}
