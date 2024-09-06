// components/QR.tsx
"use client";

import React from 'react';
import { QRCode } from 'react-qrcode-logo';

function Qr() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-customLightBlue">
      <h1 className="text-2xl text-black font-semibold mb-4">Share my Portfolio</h1>
      <QRCode
        value="https://leiva-programming.vercel.app/"
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
      />
    </div>
  );
}

export default Qr;
