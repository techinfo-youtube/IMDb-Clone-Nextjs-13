import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB CLone",
  description: "By Techinfoyt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
