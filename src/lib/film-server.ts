import prisma from '@/lib/prisma';

export async function getFilmAspectRatio(
  aspectCode: number,
): Promise<string | null> {
  const ratio = await prisma.aspectCode.findUnique({
    where: { code: aspectCode },
  });
  if (ratio) return ratio.description;
  return null;
}
