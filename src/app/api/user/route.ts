import { NextRequest, NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';
import { UserType } from 'types/userType';

export async function GET() {
  const users = await prismaCLient.user.findMany();

  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { level, email, employeeId, password }: UserType = body;

  const user = await prismaCLient.user.create({
    data: {
      level,
      email,
      password,
      employeeId
    }
  });

  return NextResponse.json({ user });
}
