import { NextRequest, NextResponse } from 'next/server';
import { signIn } from 'services/auth/signIn';
import { SignInType } from 'types/signInType';

export async function POST(request: NextRequest) {
  const body: SignInType = await request.json();

  const result = await signIn(body);

  if (!result) return NextResponse.json(false);

  return NextResponse.json({
    data: {
      token: result
    }
  });
}
