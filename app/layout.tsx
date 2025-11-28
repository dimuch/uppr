import '../styles/globals.css';
import '../styles/scss/main.scss';
import GoogleStat from '../components/common/googleCtat/GoogleStat';

export const metadata = {
  metadataBase: new URL('https://uppr.com.ua'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" prefix="og: http://ogp.me/ns#" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleStat />
        {children}
      </body>
    </html>
  );
}

