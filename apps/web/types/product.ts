export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface ProductVariant {
  id: string
  productId: string
  type: string
  value: string
  priceModifier: number
  label?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDesc?: string
  basePrice: number
  dimensions?: any
  gallery?: string[]
  specifications?: any
  categoryId: string
  category: Category
  variants: ProductVariant[]
  featured: boolean
  inStock: boolean
  createdAt: string
  updatedAt: string
}
