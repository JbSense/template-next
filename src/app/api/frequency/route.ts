import { NextRequest, NextResponse } from 'next/server';
import { Frequency } from '@prisma/client';
import { prismaCLient } from 'services/prismaClient';

export async function GET() {
  const frequencies = await prismaCLient.frequency.findMany();

  return NextResponse.json({ frequencies });
}

export async function POST(request: NextRequest) {
  // const token = request.headers.get('Authorization');

  const body = await request.json();

  const frequencies = await prismaCLient.frequency.createMany({
    data: body
  });

  return NextResponse.json({ frequencies });
}

export async function PUT(request: Request) {
  const body = await request.json();

  const { id, date, frequency, justification, stageId, studentId }: Frequency =
    body;

  const response = await prismaCLient.frequency.upsert({
    where: {
      id
    },
    update: {
      frequency,
      justification
    },
    create: {
      date,
      frequency,
      justification,
      stageId,
      studentId
    }
  });

  return NextResponse.json(response);
}
