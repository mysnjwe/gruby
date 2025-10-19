import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center">Kontakt</h1>
        <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Masz pytania? Potrzebujesz pomocy przy wyborze produktu? Skontaktuj się z nami!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-slate-600">kontakt@gruby.pl</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Odpowiadamy w ciągu 24 godzin
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <p className="text-slate-600">+48 123 456 789</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Pon-Pt: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adres</h3>
                    <p className="text-slate-600">
                      ul. Przykładowa 123<br />
                      00-000 Warszawa<br />
                      Polska
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Godziny otwarcia</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
                      <p>Sobota - Niedziela: Nieczynne</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Wyślij nam wiadomość</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="jan.kowalski@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Temat *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Pytanie o produkt..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Treść wiadomości..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Wyślij wiadomość
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  * Pola wymagane
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Często Zadawane Pytania</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Czy oferujecie montaż?</h3>
                <p className="text-slate-600">
                  Specjalizujemy się w wysyłce produktów w całej Polsce. Każdy produkt 
                  zawiera szczegółową instrukcję montażu oraz oferujemy wsparcie techniczne.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Jaki jest czas dostawy?</h3>
                <p className="text-slate-600">
                  Standardowy czas dostawy to 5-7 dni roboczych. Dla produktów na wymiar 
                  może to być 10-14 dni.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Czy mogę zamówić produkt na wymiar?</h3>
                <p className="text-slate-600">
                  Tak! Skontaktuj się z nami, aby omówić szczegóły. Przygotujemy 
                  indywidualną ofertę dostosowaną do Twoich potrzeb.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Jak wygląda gwarancja?</h3>
                <p className="text-slate-600">
                  Wszystkie produkty objęte są 10-letnią gwarancją producenta na wady 
                  materiałowe i produkcyjne.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
