import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "./DMSans/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./DMSans/DMSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

// export const fontSans = localFont({
//   src: [
//     {
//       path: "./AlbertSans/AlbertSans-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-ExtraLight.ttf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./AlbertSans/AlbertSans-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-sans",
// });
