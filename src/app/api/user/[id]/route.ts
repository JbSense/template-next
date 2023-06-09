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
    select: {
      id: true,
      email: true,
      employee: {
        select: {
          id: true,
          position: true,
          school: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });

  return NextResponse.json({
    data: {
      users
    }
  });
}
