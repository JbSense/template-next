import { NextRequest, NextResponse } from 'next/server';
import { prismaCLient } from 'services/prismaClient';
import { EmployeeType } from 'types/employeeType';

export async function GET() {
  const employees = await prismaCLient.employee.findMany();

  return NextResponse.json({ employees });
}

export async function POST(request: NextRequest) {
  const body: EmployeeType = await request.json();

  const { name, position, schoolId } = body;

  const employee = await prismaCLient.employee.create({
    data: {
      name,
      position,
      schoolId
    }
  });

  return NextResponse.json({ employee });
}
