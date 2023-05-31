import { NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const users = await prismaCLient.user.findUnique({
    where: {
      id
    },
    include: {
      employee: {
        select: {
          position: true
        }
      }
    }
  });

  return NextResponse.json({
    data: {
      users,
      id
    }
  });
}
