import { PrismaClient } from '@prisma/client';

const prismaCLient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prismaCLient;

export { prismaCLient };
