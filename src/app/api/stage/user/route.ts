import { NextResponse } from 'next/server';
import { getStage } from 'queries/getStage';
import { decrypt } from 'services/auth/decrypt';

export async function GET(request: Request) {
  const token = request.headers.get('Authorization');

  const tokenData = decrypt(token || '');

  if (tokenData) {
    if (tokenData.user.level === 'admin') {
      const stage = await getStage.bySchool(tokenData.school.id);

      return NextResponse.json({ stage });
    }

    const stage = await getStage.byEmployee(tokenData.employee.id);

    return NextResponse.json({ stage });
  }
}
