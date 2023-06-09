import { NextResponse } from 'next/server';
import { getStage } from 'queries/getStage';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const stage = await getStage.byId(id);

  return NextResponse.json(stage);
}
