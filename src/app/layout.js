import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
export const metadata = {
  title: "IMDB CLone",
  description: "By Techinfoyt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
