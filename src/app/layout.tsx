import "./globals.css";
import Header from "./components/header/header";
import Head from "next/head";
import Footer from "./components/footer/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Head>
          <title>Página Inicial Moderna</title>
          <meta name="description" content="Uma página inicial moderna feita com Next.js" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
