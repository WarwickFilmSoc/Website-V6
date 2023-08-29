import { PrismaClient, Prisma } from '@prisma/client';

const WRITE_METHODS = [
  'create',
  'update',
  'upsert',
  'delete',
  'createMany',
  'updateMany',
  'deleteMany',
] as const;

// @ts-ignore
BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

const ReadonlyClient = Prisma.defineExtension({
  name: 'ReadonlyClient',
  model: {
    $allModels: Object.fromEntries(
      WRITE_METHODS.map((method) => [
        method,
        function (args: never) {
          throw new Error(
            `Calling the \`${method}\` method on a readonly client is not allowed`,
          );
        },
      ]),
    ) as {
      [K in (typeof WRITE_METHODS)[number]]: (
        args: `Calling the \`${K}\` method on a readonly client is not allowed`,
      ) => never;
    },
  },
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(ReadonlyClient);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
