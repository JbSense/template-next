import { NextResponse } from 'next/server';
import { getSchool } from 'queries/getSchool';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const school = await getSchool.byUser(id);

  return NextResponse.json({
    data: {
      school
    }
  });
}
