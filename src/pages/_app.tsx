"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
      </ThemeProvider>
      <Analytics />
    </>
  );
}
