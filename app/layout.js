import "./globals.css";
import {Archivo} from 'next/font/google';
import localFont from 'next/font/local';

const archivo = Archivo({
  subsets:['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: '600'
})

const clashDisplay = localFont({
  src: '../utils/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  variable: '--font-clash',
  weight: '600'
})

export const metadata = {
  title: "Kanav Midha - Freelance Developer",
  description: "An enthusiastic freelancer web developer and designer based in Canada looking for opportunities across Canada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${clashDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
