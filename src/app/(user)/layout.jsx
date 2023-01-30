import '../globals.css';

// app/layout.jsx

import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
