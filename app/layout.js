import ToasterProvider from "@/components/providers/ToasterProvider";
import "./globals.css";
import {Archivo} from 'next/font/google';
import localFont from 'next/font/local';
import SmoothScrolling from "@/components/SmoothScrolling";

const archivo = Archivo({
  subsets:['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: '400'
})

const clashDisplay = localFont({
  src: '../utils/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  variable: '--font-clash',
  weight: '600'
})

export const metadata = {
  title: {
    template: '%s | Kanav Midha',
    default: 'Kanav Midha'
  },
  description: 'An enthusiastic freelancer web developer and designer based in Canada looking for opportunities across Canada.',
  icons: [
    {
      url: '/favicon.png',
      rel: 'icon',
      type: 'image/png',
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${clashDisplay.variable}`}>
      <body>
          <ToasterProvider/>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
      </body>
    </html>
  );
}
