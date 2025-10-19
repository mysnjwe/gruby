'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { Card, CardContent } from '../../../components/ui/card'
import { Product, ProductVariant } from '../../../types/product'
import { ArrowLeft, Check, Package, Truck, ShieldCheck } from 'lucide-react'

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, ProductVariant>>({})
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:3001/api/products/${params.slug}`)
        const data = await res.json()
        setProduct(data)
        setTotalPrice(parseFloat(data.basePrice))
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.slug])

  useEffect(() => {
    if (!product) return

    const variantsPrice = Object.values(selectedVariants).reduce(
      (sum, variant) => sum + parseFloat(variant.priceModifier.toString()),
      0
    )
    setTotalPrice(parseFloat(product.basePrice.toString()) + variantsPrice)
  }, [selectedVariants, product])

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variant.type]: variant,
    }))
  }

  const groupedVariants = product?.variants.reduce((acc, variant) => {
    if (!acc[variant.type]) {
      acc[variant.type] = []
    }
    acc[variant.type]!.push(variant)
    return acc
  }, {} as Record<string, ProductVariant[]>)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Ładowanie produktu...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produkt nie został znaleziony</h1>
          <Link href="/produkty">
            <Button>Wróć do produktów</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/produkty" className="inline-flex items-center text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do produktów
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-slate-200 flex items-center justify-center">
                <Package className="w-32 h-32 text-slate-400" />
                <p className="absolute text-slate-500 mt-48">Zdjęcie produktu</p>
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="text-sm text-slate-600">{product.category.name}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-slate-600 mb-6">{product.shortDesc}</p>

            {/* Price */}
            <div className="bg-slate-100 rounded-lg p-6 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{totalPrice.toFixed(2)} zł</span>
                {Object.keys(selectedVariants).length > 0 && (
                  <span className="text-sm text-slate-600">
                    (bazowa: {product.basePrice.toFixed(2)} zł)
                  </span>
                )}
              </div>
            </div>

            {/* Variants */}
            {groupedVariants && Object.keys(groupedVariants).length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Konfiguracja:</h3>
                {Object.entries(groupedVariants).map(([type, variants]) => (
                  <div key={type} className="mb-4">
                    <label className="block text-sm font-medium mb-2 capitalize">
                      {type === 'kolor' ? 'Kolor' : 
                       type === 'rozmiar' ? 'Rozmiar' : 
                       type === 'wysokosc' ? 'Wysokość' :
                       type === 'automatyka' ? 'Automatyka' : type}:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {variants.map((variant) => {
                        const isSelected = selectedVariants[type]?.id === variant.id
                        return (
                          <button
                            key={variant.id}
                            onClick={() => handleVariantSelect(variant)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              isSelected
                                ? 'border-slate-900 bg-slate-900 text-white'
                                : 'border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isSelected && <Check className="w-4 h-4" />}
                              <span>
                                {variant.label || variant.value}
                                {parseFloat(variant.priceModifier.toString()) > 0 && (
                                  <span className="text-sm ml-1">
                                    (+{variant.priceModifier} zł)
                                  </span>
                                )}
                              </span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart Button */}
            <Button size="lg" className="w-full mb-4">
              Dodaj do koszyka
            </Button>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <p className="font-medium">Wysyłka w całej Polsce</p>
                  <p className="text-sm text-slate-600">Bezpieczna dostawa pod drzwi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <p className="font-medium">Łatwy montaż</p>
                  <p className="text-sm text-slate-600">Szczegółowa instrukcja w zestawie</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <p className="font-medium">10 lat gwarancji</p>
                  <p className="text-sm text-slate-600">Najwyższa jakość wykonania</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Opis produktu</h2>
              <div className="prose max-w-none text-slate-600 whitespace-pre-line">
                {product.description}
              </div>

              {product.specifications && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Specyfikacja</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <dt className="font-medium text-slate-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </dt>
                        <dd className="text-slate-600">{value as string}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
