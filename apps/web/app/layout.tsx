import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Gruby - Nowoczesne Wyroby Aluminiowe",
  description: "Barierki, balustrady i pergole aluminiowe z wysyłką w całej Polsce. Najwyższa jakość, łatwy montaż, 10 lat gwarancji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={geistSans.variable}>
        <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-500 transition-all">
                Gruby
              </Link>
              <div className="flex gap-8 items-center">
                <Link href="/produkty" className="font-medium hover:text-blue-600 transition-colors relative group">
                  Produkty
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/o-nas" className="font-medium hover:text-blue-600 transition-colors relative group">
                  O nas
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/kontakt" className="font-medium hover:text-blue-600 transition-colors relative group">
                  Kontakt
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/koszyk" className="relative p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  {/* Można dodać badge z ilością produktów */}
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main>{children}</main>

        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mb-4">
                  Gruby
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Profesjonalne wyroby aluminiowe najwyższej jakości z wysyłką w całej Polsce
                </p>
                <div className="flex gap-3">
                  {/* Social media ikony - można dodać później */}
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    📘
                  </div>
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    📷
                  </div>
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    🐦
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Produkty</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/produkty?kategoria=barierki" className="hover:text-blue-400 transition-colors">Barierki aluminiowe</Link></li>
                  <li><Link href="/produkty?kategoria=balustrady" className="hover:text-blue-400 transition-colors">Balustrady</Link></li>
                  <li><Link href="/produkty?kategoria=pergole" className="hover:text-blue-400 transition-colors">Pergole bioklimatyczne</Link></li>
                  <li><Link href="/produkty" className="hover:text-blue-400 transition-colors">Wszystkie produkty</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Informacje</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/o-nas" className="hover:text-blue-400 transition-colors">O nas</Link></li>
                  <li><Link href="/wysylka" className="hover:text-blue-400 transition-colors">Dostawa i wysyłka</Link></li>
                  <li><Link href="/montaz" className="hover:text-blue-400 transition-colors">Instrukcje montażu</Link></li>
                  <li><Link href="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Kontakt</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <a href="mailto:kontakt@gruby.pl" className="hover:text-blue-400 transition-colors">
                      kontakt@gruby.pl
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <a href="tel:+48123456789" className="hover:text-blue-400 transition-colors">
                      +48 123 456 789
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>⏰</span>
                    <span>Pn-Pt: 8:00-18:00<br />Sb: 9:00-14:00</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Gruby. Wszystkie prawa zastrzeżone.</p>
                <div className="flex gap-6">
                  <Link href="/regulamin" className="hover:text-blue-400 transition-colors">Regulamin</Link>
                  <Link href="/polityka-prywatnosci" className="hover:text-blue-400 transition-colors">Polityka prywatności</Link>
                  <Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
