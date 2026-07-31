import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const openrouterKey = process.env.OPENROUTER_API_KEY || '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';

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openrouterKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://9router-cloud-server.vercel.app',
        'X-Title': '9router Cloud Server'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: { message: error.message || 'Internal Router Error' } }, { status: 500 });
  }
}
