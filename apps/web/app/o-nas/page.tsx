import { Card, CardContent } from '../../components/ui/card'
import { Truck, Package, Shield, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center">O Nas</h1>
        <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Jesteśmy producentem nowoczesnych wyrobów aluminiowych, 
          specjalizującym się w wysyłce na terenie całego kraju.
        </p>

        {/* Mission */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Nasza Misja</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Naszym celem jest dostarczanie wysokiej jakości produktów aluminiowych 
              bezpośrednio do klientów w całej Polsce. Wierzymy, że każdy powinien mieć 
              dostęp do nowoczesnych, estetycznych i trwałych rozwiązań dla swojego domu, 
              bez konieczności korzystania z pośredników czy lokalnych dystrybutorów.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nasze Wartości</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Jakość</h3>
                    <p className="text-slate-600">
                      Używamy tylko najlepszych materiałów i technologii produkcji. 
                      Każdy produkt przechodzi kontrolę jakości.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Dostępność</h3>
                    <p className="text-slate-600">
                      Wysyłka w całej Polsce sprawia, że nasze produkty są dostępne 
                      dla każdego, niezależnie od lokalizacji.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Prostota</h3>
                    <p className="text-slate-600">
                      Oferujemy produkty gotowe do montażu wraz ze szczegółowymi 
                      instrukcjami. Montaż jest prosty i intuicyjny.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Pewność</h3>
                    <p className="text-slate-600">
                      10 lat gwarancji na wszystkie produkty. Jesteśmy pewni 
                      jakości tego, co oferujemy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-slate-900 text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Dlaczego Wyróżniamy Się Na Rynku?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-lg">
                  <strong>Wysyłka w całej Polsce</strong> – większość konkurencji oferuje 
                  tylko montaż lokalny. My dostarczamy produkty pod same drzwi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-lg">
                  <strong>Transparentne ceny</strong> – widzisz dokładnie ile płacisz, 
                  bez ukrytych kosztów czy konieczności wysyłania zapytań ofertowych.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-lg">
                  <strong>Kompletne instrukcje montażu</strong> – filmy instruktażowe 
                  i szczegółowe PDF-y sprawiają, że montaż jest prosty.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-lg">
                  <strong>Wsparcie techniczne</strong> – jesteśmy dostępni telefonicznie 
                  i mailowo, aby pomóc w każdej sytuacji.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
