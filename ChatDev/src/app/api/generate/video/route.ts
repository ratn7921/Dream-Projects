import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { prompt } = await req.json();
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt
        }
      }
    );

    return NextResponse.json(output);
  } catch (error) {
    console.error('[VIDEO_GENERATION_ERROR]', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
