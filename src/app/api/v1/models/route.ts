import { NextResponse } from 'next/server';

export async function GET() {
  const models = [
    { id: 'auto/claude-opus', name: 'Claude 3.5 Opus', provider: 'Anthropic' },
    { id: 'auto/claude-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
    { id: 'auto/gpt-4o', name: 'GPT-4o Cloud', provider: 'OpenAI' },
    { id: 'auto/gemini-1.5-pro', name: 'Gemini 1.5 Pro', provider: 'Google' },
    { id: 'openrouter/auto', name: 'OpenRouter Auto Proxy', provider: 'OpenRouter' },
    { id: 'huggingface/auto', name: 'HuggingFace Inference', provider: 'HuggingFace' }
  ];

  return NextResponse.json({
    object: 'list',
    data: models
  });
}
