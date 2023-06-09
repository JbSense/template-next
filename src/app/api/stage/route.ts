import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from 'services/auth/decrypt';
import { prismaCLient } from 'services/prismaClient';
import { StageType } from 'types/stageType';
import { TokenDataType } from 'types/tokenData';

export async function GET() {
  const stages = await prismaCLient.stage.findMany();

  return NextResponse.json({ stages });
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('Authorization');

  const { school } = decrypt(token || '') as TokenDataType;

  const body = await request.json();

  const { nomenclature, room }: StageType = body;

  const stage = await prismaCLient.stage.create({
    data: {
      nomenclature,
      room,
      schoolId: school.id
    }
  });

  return NextResponse.json({ stage });
}
