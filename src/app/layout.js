"use client"; // Marca este componente como un Client Component

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import { DataProvider } from "@/context/dataContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider> {/* Aquí se debe usar DataProvider */}
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
