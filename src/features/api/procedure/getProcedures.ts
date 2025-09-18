import { prisma } from '@/shared/db/prisma';

export async function getProcedures() {
  return await prisma.procedure.findMany({
    orderBy: {
      id: 'asc',
    },
  });
}

export async function getProcedureById(id: number) {
  return await prisma.procedure.findUnique({
    where: { id },
  });
}
