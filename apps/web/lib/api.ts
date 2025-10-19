import { Product, Category } from '@/types/product'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${API_URL}/products?category=${category}`
    : `${API_URL}/products`

  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR - revalidate every 60 seconds
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }

  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  })

  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }

  return res.json()
}

export async function getCategory(slug: string): Promise<Category> {
  const res = await fetch(`${API_URL}/categories/${slug}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch category')
  }

  return res.json()
}
