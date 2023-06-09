import { NextResponse } from 'next/server';
import { Student } from '@prisma/client';
import { prismaCLient } from 'services/prismaClient';

export async function GET() {
  const students = await prismaCLient.student.findMany();

  return NextResponse.json({ students });
}

export async function POST(request: Request) {
  const body = await request.json();

  const {
    name,
    birthdate,
    birthCertificate,
    cpf,
    rg,
    nis,
    mother,
    father,
    district,
    street,
    number,
    period,
    observations,
    stageId
  }: Student = body;

  const student = await prismaCLient.student.create({
    data: {
      name,
      birthdate,
      birthCertificate,
      cpf,
      rg,
      nis,
      mother,
      father,
      district,
      street,
      number,
      period,
      observations,
      stageId
    }
  });

  return NextResponse.json({ student });
}
