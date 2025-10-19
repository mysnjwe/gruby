import Link from 'next/link'
import { getProducts, getCategories } from '@/lib/api'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic'

type ProductsPageProps = {
  searchParams: Promise<{ kategoria?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const [products, categories] = await Promise.all([
    getProducts(params.kategoria),
    getCategories(),
  ])

  const activeCategory = params.kategoria
    ? categories.find((c) => c.slug === params.kategoria)
    : null

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {activeCategory ? activeCategory.name : 'Wszystkie Produkty'}
          </h1>
          <p className="text-slate-600">
            {activeCategory
              ? activeCategory.description
              : 'Przeglądaj naszą pełną ofertę produktów aluminiowych'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-3 flex-wrap">
          <Link href="/produkty">
            <Button variant={!activeCategory ? 'default' : 'outline'}>
              Wszystkie
            </Button>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} href={`/produkty?kategoria=${category.slug}`}>
              <Button
                variant={activeCategory?.slug === category.slug ? 'default' : 'outline'}
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">
              Brak produktów w tej kategorii
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    {product.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Polecane
                      </span>
                    )}
                  </div>
                  <CardDescription>{product.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <p className="text-3xl font-bold text-slate-900">
                      {Number(product.basePrice).toFixed(2)} zł
                    </p>
                    <p className="text-sm text-slate-500">cena od</p>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>📦 Kategoria: {product.category.name}</p>
                    {product.variants.length > 0 && (
                      <p>🎨 Warianty: {product.variants.length} opcji</p>
                    )}
                    <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                      {product.inStock ? '✓ Dostępny' : '✗ Niedostępny'}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/produkty/${product.slug}`} className="w-full">
                    <Button className="w-full">Zobacz szczegóły</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg p-8 border">
          <h2 className="text-2xl font-bold mb-4">Dlaczego warto wybrać nasze produkty?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">🚚 Wysyłka w Całej Polsce</h3>
              <p className="text-slate-600 text-sm">
                Bezpieczna dostawa produktów aluminiowych pod Twoje drzwi. Pakujemy wszystko
                profesjonalnie.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🔧 Łatwy Montaż</h3>
              <p className="text-slate-600 text-sm">
                Każdy produkt zawiera szczegółową instrukcję montażu. Oferujemy też wsparcie
                techniczne.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⭐ 10 Lat Gwarancji</h3>
              <p className="text-slate-600 text-sm">
                Najwyższa jakość aluminium i wykonania. Gwarantujemy trwałość na lata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
