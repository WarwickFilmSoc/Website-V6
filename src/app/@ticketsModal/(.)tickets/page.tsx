'use client';

import { Modal } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function TicketsModal() {
  const router = useRouter();

  return (
    <Modal dismissible onClose={() => router.back()} show>
      <Modal.Header>Tickets</Modal.Header>
      <Modal.Body>
        <p>Description</p>
      </Modal.Body>
    </Modal>
  );
}
