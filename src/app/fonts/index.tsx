import LocalFont from "next/font/local";

export const gilroy = LocalFont({
  src: [
    { path: "../../../public/assets/fonts/Gilroy-Bold.ttf", weight: "700" },
    { path: "../../../public/assets/fonts/Gilroy-Semibold.ttf", weight: "600" },
    { path: "../../../public/assets/fonts/Gilroy-Medium.ttf", weight: "500" },
  ],
});
