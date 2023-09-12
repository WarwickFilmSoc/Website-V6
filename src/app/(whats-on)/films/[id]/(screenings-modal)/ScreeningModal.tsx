import prisma from '@/lib/prisma';
import { Film, Screening } from '@prisma/client';
import ClientModal from './ClientModal';

export type FilmScreening = Partial<Screening> & { film: Film };

export default async function ScreeningModal({ id }: { id: string }) {
  const numericId = parseInt(id);

  if (Number.isNaN(numericId)) {
    return null;
  }

  const screening = await prisma.screening.findFirst({
    where: {
      scr_id: numericId,
    },
    include: {
      film: true,
    },
  });

  if (screening === null) {
    return null;
  }

  return <ClientModal screening={screening} />;
}
