import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  productId: string
  name: string
  slug: string
  basePrice: number
  quantity: number
  configuration?: {
    [key: string]: {
      type: string
      value: string
      label: string
      priceModifier: number
    }
  }
  totalPrice: number
  image?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'totalPrice'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === item.id)

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          const configPrice = item.configuration
            ? Object.values(item.configuration).reduce(
                (sum, config) => sum + config.priceModifier,
                0
              )
            : 0
          const totalPrice = (item.basePrice + configPrice) * item.quantity

          set({
            items: [...items, { ...item, totalPrice }],
          })
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }

        set({
          items: get().items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity,
                  totalPrice:
                    (item.basePrice +
                      (item.configuration
                        ? Object.values(item.configuration).reduce(
                            (sum, config) => sum + config.priceModifier,
                            0
                          )
                        : 0)) *
                    quantity,
                }
              : item
          ),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + item.totalPrice, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
