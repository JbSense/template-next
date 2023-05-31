import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from 'services/auth/decrypt';

export async function GET(request: NextRequest) {
  const authorization = request.headers.get('Authorization');

  const userDecoded = decrypt(authorization || '');

  return NextResponse.json({ user: userDecoded });
}
