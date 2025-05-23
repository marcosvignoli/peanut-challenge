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
export default async function Image() {
  // Load the Knerd fonts from the public/fonts directory
  const knerdFilled = await readFile(
    join(process.cwd(), "public/fonts/knerd-filled.ttf")
  );
  const knerdOutline = await readFile(
    join(process.cwd(), "public/fonts/knerd-outline.ttf")
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        className="bg-pink-400"
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
          <div>
            {/* <img src="/public/images/peanut.png" alt="icon" />
            PEANUT */}
            PEANUT
          </div>
          <h2 style={{ fontFamily: "Knerd", fontSize: 48 }}>
            {data.user.username}
          </h2>
          <h3 style={{ fontSize: 40, fontFamily: "sans-serif" }}>
            is sending you
          </h3>
          <h1
            style={{
              fontFamily: "Knerd",
              fontSize: 80,
              color: "white",
              WebkitTextStroke: "4px black",
            }}
          >
            $7070
          </h1>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
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
