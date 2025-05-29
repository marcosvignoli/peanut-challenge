import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { data } from "../../../data";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: { id?: string; amount?: string };
}) {
  const amount = params?.amount;

  console.log(params);
  // Load fonts
  const knerdFilled = await readFile(
    join(process.cwd(), "public/fonts/knerd-filled.ttf")
  );
  const knerdOutline = await readFile(
    join(process.cwd(), "public/fonts/knerd-outline.ttf")
  );

  // Load peanut SVG and convert to base64
  const peanutSVGBuffer = await readFile(
    join(process.cwd(), "public/images/peanut.svg")
  );
  const peanutSVGBase64 = `data:image/svg+xml;base64,${peanutSVGBuffer.toString(
    "base64"
  )}`;

  // Load all other SVGs in public/images and convert to base64
  // const cloudLeftSVGBuffer = await readFile(
  //   join(process.cwd(), "public/images/cloud_left.svg")
  // );
  // const cloudLeftSVGBase64 = `data:image/svg+xml;base64,${cloudLeftSVGBuffer.toString(
  //   "base64"
  // )}`;

  // const leftBottomHighlightSVGBuffer = await readFile(
  //   join(process.cwd(), "public/images/left-bottom-highlight.svg")
  // );
  // const leftBottomHighlightSVGBase64 = `data:image/svg+xml;base64,${leftBottomHighlightSVGBuffer.toString(
  //   "base64"
  // )}`;

  // const leftTopHighlightSVGBuffer = await readFile(
  //   join(process.cwd(), "public/images/left-top-highlight.svg")
  // );
  // const leftTopHighlightSVGBase64 = `data:image/svg+xml;base64,${leftTopHighlightSVGBuffer.toString(
  //   "base64"
  // )}`;

  const nameHighlightSVGBuffer = await readFile(
    join(process.cwd(), "public/images/name-highlight.svg")
  );
  const nameHighlightSVGBase64 = `data:image/svg+xml;base64,${nameHighlightSVGBuffer.toString(
    "base64"
  )}`;

  // const rightBottomHighlightSVGBuffer = await readFile(
  //   join(process.cwd(), "public/images/right-bottom-highlight.svg")
  // );
  // const rightBottomHighlightSVGBase64 = `data:image/svg+xml;base64,${rightBottomHighlightSVGBuffer.toString(
  //   "base64"
  // )}`;

  // const rightTopHighlightSVGBuffer = await readFile(
  //   join(process.cwd(), "public/images/right-top-highlight.svg")
  // );
  // const rightTopHighlightSVGBase64 = `data:image/svg+xml;base64,${rightTopHighlightSVGBuffer.toString(
  //   "base64"
  // )}`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#F19AE3",
            width: "100%",
            height: "100%",
            border: "10px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* peanut logo and text  */}
          <section
            style={{
              width: "100%",
              flex: 3,
              padding: "20px",
              display: "flex",
            }}
          >
            {/* top section  */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                alignSelf: "flex-start",
              }}
            >
              <img src={peanutSVGBase64} width={80} height={80} />

              <span style={{ fontSize: 36 }}>PEANUT</span>
            </div>
            <div
              style={{
                backgroundImage: `url(${nameHighlightSVGBase64})`,
                backgroundRepeat: "no-repeat",
                width: "60%",
                height: "100%",
                backgroundSize: "100% 100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2em",
                color: "black",
                justifySelf: "flex-end",
              }}
            >
              {data.user.username}
            </div>
          </section>

          <h3 style={{ fontSize: 40 }}>is sending you</h3>
          <h1
            style={{
              fontFamily: "Knerd",
              fontSize: "4em",
              color: "white",
              WebkitTextStroke: "4px black",
              flex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ${amount ? amount : "7000"}
          </h1>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Knerd",
          data: knerdFilled,
          style: "normal",
          weight: 400,
        },
        {
          name: "KnerdOutline",
          data: knerdOutline,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
