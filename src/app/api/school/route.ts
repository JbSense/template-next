import { NextRequest, NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';
import { SchoolType } from 'types/schoolType';

export async function GET() {
  const schools = await prismaCLient.school.findMany();

  return NextResponse.json({ schools });
}

export async function POST(request: NextRequest) {
  const body: SchoolType = await request.json();

  const { name, city, district, number, street } = body;

  const school = await prismaCLient.school.create({
    data: {
      name,
      city,
      district,
      street,
      number
    }
  });

  return NextResponse.json({ data: school });
}
