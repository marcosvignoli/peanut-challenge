import { ImageResponse } from "next/og";
import { data } from "../../../../data";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const fontPath = (name: string) => `http://localhost:3000/fonts/${name}`;
    const knerdFilledRes = await fetch(fontPath("knerd-filled.ttf"));
    const knerdFilled = await knerdFilledRes.arrayBuffer();
    const knerdOutlineRes = await fetch(fontPath("knerd-outline.ttf"));
    const knerdOutline = await knerdOutlineRes.arrayBuffer();
    const nunitoBoldRes = await fetch(fontPath("Nunito-Bold.ttf"));
    const nunitoBold = await nunitoBoldRes.arrayBuffer();

    const { searchParams } = new URL(req.url);
    const amount = searchParams.get("amount") || "";

    const peanutSVG = "http://localhost:3000/images/peanut.svg";
    const nameHighlightSVG = "http://localhost:3000/images/name-highlight.svg";

    return new ImageResponse(
      (
        <div tw="flex flex-col items-center justify-center w-full h-full bg-white p-5">
          <div tw="flex flex-col items-center justify-center bg-[#F19AE3] border-4 border-black w-full h-full p-5">
            {/* Top section: peanut logo and PEANUT text */}
            <section tw="flex w-full flex-1 p-5">
              <div tw="flex items-center gap-2 self-start">
                <img src={peanutSVG} width={80} height={80} />
                <span
                  style={{
                    fontFamily: "Nunito Bold, sans-serif",
                    fontWeight: 700,
                    fontSize: 36,
                  }}
                >
                  PEANUT
                </span>
              </div>
              <div
                style={{
                  backgroundImage: `url(${nameHighlightSVG})`,
                  backgroundRepeat: "no-repeat",
                  width: "60%",
                  height: "100%",
                  backgroundSize: "100% 100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "5em",
                  color: "black",
                  justifySelf: "flex-end",
                  fontFamily: "Nunito Bold, sans-serif",
                }}
              >
                {data.user.username}
              </div>
            </section>
            <h3
              style={{
                fontFamily: "Nunito Bold, sans-serif",
                fontSize: 40,
              }}
            >
              is sending you
            </h3>
            <h1
              style={{
                fontFamily: "Knerd Filled, sans-serif",
                fontSize: "15em",
                color: "white",
                WebkitTextStroke: "4px black",
                flex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {amount ? `$${amount}` : ""}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Knerd Filled",
            data: knerdFilled,
            style: "normal",
            weight: 400,
          },
          {
            name: "Knerd Outline",
            data: knerdOutline,
            style: "normal",
            weight: 400,
          },
          {
            name: "Nunito Bold",
            data: nunitoBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Failed to generate image",
    });
  }
}
