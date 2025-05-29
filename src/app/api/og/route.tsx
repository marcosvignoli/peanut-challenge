import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(<div tw="bg-pink-400">Hola</div>);
}
