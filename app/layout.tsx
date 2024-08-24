import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

// include a metadata object from any layout.js or page.js file to add TDK、metadataBase
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // title模板，The %s in the template will be replaced with the specific page title.
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
