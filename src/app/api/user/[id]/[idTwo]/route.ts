import { NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string; idTwo: string } }
) {
  const { id, idTwo } = params;

  const users = await prismaCLient.user.findMany();

  return NextResponse.json({
    data: {
      users,
      id,
      idTwo
    }
  });
}
