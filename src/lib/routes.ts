import { NextResponse } from 'next/server';

export function redirectWith302(url: string) {
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: url,
    },
  });
}
