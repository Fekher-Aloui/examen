import "./globals.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "TechStore – High-Tech & Innovation",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
