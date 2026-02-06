import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "위풍당당 이진숙입니다 - 북콘서트 & 출판기념회";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Top left corner accent */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 40,
              width: 80,
              height: 80,
              borderTop: "3px solid #C9A962",
              borderLeft: "3px solid #C9A962",
            }}
          />
          {/* Top right corner accent */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: 40,
              width: 80,
              height: 80,
              borderTop: "3px solid #C9A962",
              borderRight: "3px solid #C9A962",
            }}
          />
          {/* Bottom left corner accent */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 40,
              width: 80,
              height: 80,
              borderBottom: "3px solid #C9A962",
              borderLeft: "3px solid #C9A962",
            }}
          />
          {/* Bottom right corner accent */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: 40,
              width: 80,
              height: 80,
              borderBottom: "3px solid #C9A962",
              borderRight: "3px solid #C9A962",
            }}
          />
        </div>

        {/* Decorative line above title */}
        <div
          style={{
            width: 120,
            height: 2,
            backgroundColor: "#C9A962",
            marginBottom: 40,
          }}
        />

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: "#C9A962",
              letterSpacing: "0.3em",
              fontWeight: 400,
            }}
          >
            INVITATION
          </span>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "0.05em",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            위풍당당 이진숙입니다
          </h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 60,
              height: 1,
              backgroundColor: "#C9A962",
            }}
          />
          <span
            style={{
              fontSize: 32,
              color: "#C9A962",
              fontWeight: 500,
              letterSpacing: "0.15em",
            }}
          >
            북콘서트 & 출판기념회
          </span>
          <div
            style={{
              width: 60,
              height: 1,
              backgroundColor: "#C9A962",
            }}
          />
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.1em",
            }}
          >
            이라크전 종군기자에서 자유의 최전선까지
          </span>
        </div>

        {/* Decorative diamond shapes */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 200,
            width: 8,
            height: 8,
            backgroundColor: "#C9A962",
            transform: "rotate(45deg)",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 150,
            right: 250,
            width: 6,
            height: 6,
            backgroundColor: "#C9A962",
            transform: "rotate(45deg)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 180,
            left: 300,
            width: 10,
            height: 10,
            backgroundColor: "#C9A962",
            transform: "rotate(45deg)",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 200,
            right: 350,
            width: 8,
            height: 8,
            backgroundColor: "#C9A962",
            transform: "rotate(45deg)",
            opacity: 0.3,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
