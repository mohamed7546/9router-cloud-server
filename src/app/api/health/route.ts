import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    service: '9router Cloud Server',
    timestamp: new Date().toISOString(),
    version: '1.0.0-cloud',
    provider: 'Vercel + Supabase'
  });
}
