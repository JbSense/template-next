import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from 'services/auth/decrypt';
import { TokenDataType } from 'types/tokenData';

export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization');

  const { user } = decrypt(token || '') as TokenDataType;

  if (user.level === 'admin') return NextResponse.json(true);

  return NextResponse.json(false);
}
