import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@repo/ui/card'
import { Button } from '@repo/ui/button'
import { ArrowRight, Package, Truck, Shield, Star, CheckCircle2, Sparkles } from 'lucide-react'
import Image from 'next/image'

// Static data for now (API not deployed yet)
const categories = [
  {
    id: '1',
    name: 'Barierki Aluminiowe',
    slug: 'barierki',
    description: 'Nowoczesne barierki aluminiowe do balkonów i tarasów'
  },
  {
    id: '2', 
    name: 'Balustrady',
    slug: 'balustrady',
    description: 'Eleganckie balustrady aluminiowe dla schodów i balkonów'
  },
  {
    id: '3',
    name: 'Pergole Bioklimatyczne', 
    slug: 'pergole',
    description: 'Funkcjonalne pergole z regulacją nasłonecznienia'
  }
]

const products = [
  {
    id: '1',
    name: 'Barierka Aluminiowa Premium',
    slug: 'barierka-premium',
    description: 'Nowoczesna barierka aluminiowa z anodowanym wykończeniem',
    shortDesc: 'Barierka aluminiowa premium',
    basePrice: 450,
    category: categories[0],
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Balustrada Elegancka',
    slug: 'balustrada-elegancka', 
    description: 'Elegancka balustrada aluminiowa z szklanymi panelami',
    shortDesc: 'Balustrada z szklanymi panelami',
    basePrice: 680,
    category: categories[1],
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Pergola Bioklimatyczna',
    slug: 'pergola-bioklimatyczna',
    description: 'Funkcjonalna pergola z regulacją nasłonecznienia',
    shortDesc: 'Pergola z regulacją nasłonecznienia', 
    basePrice: 1200,
    category: categories[2],
    featured: true,
    inStock: true
  }
]

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Nowy efektowny design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 py-24 px-4">
        {/* Tło z efektem */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center text-white animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Profesjonalne wyroby aluminiowe</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Twój Dom Zasługuje
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Na Najlepsze
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Barierki, balustrady i pergole aluminiowe premium. Wysyłka w całej Polsce, 
              łatwy montaż i 10 lat gwarancji.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Link href="/produkty">
                <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  Zobacz Produkty <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button size="lg" variant="outline" className="gap-2 border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
                  Bezpłatna Wycena
                </Button>
              </Link>
            </div>

            {/* Statystyki */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-blue-100 text-sm">Zadowolonych Klientów</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">10 Lat</div>
                <div className="text-blue-100 text-sm">Gwarancji</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Wsparcie Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Ulepszony wygląd */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dlaczego My?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Łączymy najwyższą jakość z wygodą zakupów online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Wysyłka w Całej Polsce</h3>
                <p className="text-gray-600 leading-relaxed">
                  Profesjonalne pakowanie i bezpieczna dostawa pod Twoje drzwi. 
                  Śledzenie przesyłki w czasie rzeczywistym.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Łatwy Montaż</h3>
                <p className="text-gray-600 leading-relaxed">
                  Szczegółowe instrukcje wideo, dedykowane wsparcie techniczne
                  i wszystkie potrzebne elementy montażowe w zestawie.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">10 Lat Gwarancji</h3>
                <p className="text-gray-600 leading-relaxed">
                  Materiały premium, odporne na korozję i warunki atmosferyczne.
                  Certyfikaty jakości i pełna gwarancja producenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Z obrazkami placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nasze Kategorie</h2>
            <p className="text-xl text-gray-600">
              Wybierz kategorię dopasowaną do Twoich potrzeb
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ]
              return (
                <Link key={category.id} href={`/produkty?kategoria=${category.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer h-full">
                    {/* Gradient placeholder dla zdjęć */}
                    <div className={`h-64 bg-gradient-to-br ${gradients[index % 3]} relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <div className="text-6xl mb-4">
                            {index === 0 && '🏗️'}
                            {index === 1 && '🎨'}
                            {index === 2 && '☂️'}
                          </div>
                          <h3 className="text-2xl font-bold">{category.name}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6">
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Zobacz produkty <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products - Lepszy design */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Bestsellery</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Polecane Produkty</h2>
            <p className="text-xl text-gray-600">
              Najchętniej wybierane przez naszych klientów
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="group relative">
                <Card className="overflow-hidden border-2 hover:border-blue-500 transition-all card-hover h-full">
                  {/* Placeholder dla zdjęcia produktu */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">
                        {index === 0 && '🏗️'}
                        {index === 1 && '🎨'}
                        {index === 2 && '🏛️'}
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Bestseller
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base">{product.shortDesc}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-blue-600">
                        {Number(product.basePrice).toFixed(0)} zł
                      </span>
                      <span className="text-sm text-gray-500">od</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{product.category?.name || 'Produkt'}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Link href={`/produkty/${product.slug}`} className="w-full">
                      <Button className="w-full gap-2 group-hover:shadow-lg transition-shadow">
                        Zobacz szczegóły <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Ulepszony */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Darmowa konsultacja i wycena</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rozpocznij Swoją Przygodę
            <br />
            <span className="text-blue-400">Z Najlepszymi Produktami</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ponad 500 zadowolonych klientów zaufało naszej jakości. 
            Dołącz do nich i przekonaj się sam!
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link href="/produkty">
              <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Przeglądaj Katalog <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="gap-2 border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
                Skontaktuj się z nami
              </Button>
            </Link>
          </div>
          
          {/* Zaufali nam */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-blue-200 mb-4">Zaufali nam:</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Klienci indywidualni</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Deweloperzy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Firmy budowlane</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
