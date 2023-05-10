import localFont from "next/font/local";
import { Poppins } from "next/font/google";

// export const sfPro = localFont({
//   src: "./SF-Pro-Display-Medium.otf",
//   variable: "--font-sf",
// });

export const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
