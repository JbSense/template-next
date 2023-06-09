import { NextResponse } from 'next/server';
import { Student } from '@prisma/client';
import { getStudent } from 'queries/getStudent';
import { prismaCLient } from 'services/prismaClient';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const student = await getStudent.byId(id);

  return NextResponse.json(student);
}

export async function PUT(request: Request) {
  const body = (await request.json()) as Student;

  const {
    id,
    name,
    birthdate,
    birthCertificate,
    cpf,
    rg,
    mother,
    father,
    district,
    street,
    number
  } = body;

  const student = await prismaCLient.student.update({
    where: {
      id
    },
    data: {
      name,
      birthdate,
      birthCertificate,
      cpf,
      rg,
      mother,
      father,
      district,
      street,
      number
    }
  });

  return NextResponse.json(student);
}
