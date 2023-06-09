import { NextRequest, NextResponse } from 'next/server';
import { getEmployee } from 'queries/getEmployee';
import { getSchool } from 'queries/getSchool';
import { getUser } from 'queries/getUser';
import { signIn } from 'services/auth/signIn';
import { EmployeeType } from 'types/employeeType';
import { SchoolType } from 'types/schoolType';
import { SignInType } from 'types/signInType';

export async function POST(request: NextRequest) {
  const body: SignInType = await request.json();

  const result = await signIn(body);

  if (!result) return NextResponse.json(false);

  const user = await getUser.byEmail(body.email);

  const { name: employeeName, position } = (await getEmployee.byUser(
    user?.id || ''
  )) as EmployeeType;

  const { name: schoolName } = (await getSchool.byUser(
    user?.id || ''
  )) as SchoolType;

  return NextResponse.json({
    school: { name: schoolName },
    user: { name: employeeName, position, level: user?.level },
    token: result
  });
}
