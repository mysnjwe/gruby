# Plan Projektu - Gruby E-commerce

## Status: Faza 0 Ukończona ✅

### Faza 0: Setup & Architektura ✅ (Ukończona)

#### Ukończone zadania:
- ✅ Inicjalizacja Monorepo z Turborepo (już istniała)
- ✅ Scaffolding aplikacji NestJS (`/apps/api`)
- ✅ Konfiguracja PostgreSQL + Docker Compose
- ✅ Inicjalizacja Prisma ORM
- ✅ Zdefiniowanie schematu bazy danych (Product, Category, ProductVariant, Order, OrderItem, User)
- ✅ Setup Tailwind CSS + shadcn/ui w Next.js
- ✅ Utworzenie podstawowych komponentów UI (Button, Card)
- ✅ Konfiguracja Zustand dla zarządzania stanem koszyka

#### Utworzone pliki:
- `docker-compose.yml` - PostgreSQL container
- `apps/api/prisma/schema.prisma` - schemat bazy danych
- `apps/api/prisma/seed.ts` - dane przykładowe
- `apps/api/src/prisma/*` - Prisma service i moduł
- `apps/api/src/products/*` - Products module (service, controller, module)
- `apps/api/src/categories/*` - Categories module
- `apps/web/components/ui/*` - Komponenty UI (button, card)
- `apps/web/lib/utils.ts` - Utility functions
- `apps/web/lib/api.ts` - API client
- `apps/web/store/cart.ts` - Zustand store dla koszyka
- `apps/web/types/product.ts` - TypeScript types

---

## Następne Kroki

### Faza 1: Core API & Model Danych (90% ukończone)

#### Do zrobienia:
- [ ] Dodać walidację DTO w NestJS (class-validator)
- [ ] Dodać error handling i logging
- [ ] Utworzyć moduł Orders (controller, service)
- [ ] Testy jednostkowe dla serwisów

---

### Faza 2: Frontend - Prezentacja Produktów (50% ukończone)

#### Ukończone:
- ✅ Layout z nawigacją i stopką
- ✅ Strona główna z featured products
- ✅ Sekcja kategorii
- ✅ Hero section z CTA

#### Do zrobienia:
- [ ] Strona listingu produktów (`/produkty`)
  - [ ] Filtry po kategoriach
  - [ ] Sortowanie
  - [ ] Paginacja
  - [ ] Grid produktów
- [ ] Strona szczegółów produktu (`/produkty/[slug]`)
  - [ ] Galeria zdjęć
  - [ ] Konfigurator wariantów
  - [ ] Dynamiczne przeliczanie ceny
  - [ ] Przycisk "Dodaj do koszyka"
- [ ] Strony statyczne:
  - [ ] O nas (`/o-nas`)
  - [ ] Kontakt (`/kontakt`)
  - [ ] Wysyłka (`/wysylka`)
  - [ ] Montaż (`/montaz`)

---

### Faza 3: Rdzeń Funkcjonalności E-commerce

#### Do zrobienia:
- [ ] Konfigurator produktu
  - [ ] UI dla wyboru wariantów (Select/Radio buttons)
  - [ ] Obliczanie łącznej ceny z modyfikatorami
  - [ ] Walidacja wyborów
- [ ] Koszyk
  - [ ] Strona koszyka (`/koszyk`)
  - [ ] Lista produktów w koszyku
  - [ ] Edycja ilości
  - [ ] Usuwanie produktów
  - [ ] Podsumowanie ceny
  - [ ] Badge z liczbą produktów w nawigacji
- [ ] Proces Checkout
  - [ ] Formularz danych klienta
  - [ ] Formularz adresu dostawy
  - [ ] Podsumowanie zamówienia
  - [ ] Integracja z API do tworzenia zamówienia
  - [ ] Strona podziękowania

---

### Faza 4: Uwierzytelnianie i Panel Klienta

#### Do zrobienia:
- [ ] Integracja NextAuth.js
  - [ ] Konfiguracja providers
  - [ ] Credentials provider (email/hasło)
  - [ ] OAuth providers (Google, opcjonalnie)
- [ ] Backend authentication
  - [ ] Guards w NestJS
  - [ ] JWT strategy
  - [ ] Zabezpieczenie endpointów
- [ ] Panel użytkownika (`/konto`)
  - [ ] Strona profilu
  - [ ] Historia zamówień
  - [ ] Edycja danych

---

### Faza 5: Testowanie, Optymalizacja i Wdrożenie

#### Do zrobienia:
- [ ] Testy E2E (Playwright)
  - [ ] Test dodania produktu do koszyka
  - [ ] Test procesu checkout
  - [ ] Test logowania
- [ ] Optymalizacja wydajności
  - [ ] Analiza Core Web Vitals
  - [ ] Optymalizacja obrazów
  - [ ] Code splitting
  - [ ] Cache strategies
- [ ] SEO
  - [ ] Metadata dla wszystkich stron
  - [ ] Sitemap.xml
  - [ ] Robots.txt
  - [ ] JSON-LD structured data
  - [ ] Open Graph tags
- [ ] Deployment
  - [ ] Setup GitHub Actions CI/CD
  - [ ] Vercel deployment (frontend)
  - [ ] Render/Railway deployment (backend)
  - [ ] Database migration strategy
  - [ ] Environment variables setup

---

## Kluczowe Features do Wyróżnienia Się

### ✅ Wysyłka jako główny atut
- [ ] Dedykowana strona `/wysylka` z informacjami
- [ ] Banner z informacją o wysyłce na stronie głównej
- [ ] Kalkulator kosztów wysyłki w koszyku
- [ ] Szacowany czas dostawy

### ✅ Łatwy montaż
- [ ] Strona `/montaz` z instrukcjami
- [ ] Filmy instruktażowe dla każdego produktu
- [ ] PDF instrukcje do pobrania
- [ ] Chat/wsparcie techniczne

### ✅ Konfigurator produktów
- [ ] Wizualizacja zmian w czasie rzeczywistym (jeśli możliwe)
- [ ] Jasny podgląd wybranej konfiguracji
- [ ] Kalkulacja ceny na żywo

---

## Techniczne To-Do

### Backend
- [ ] Dodać class-validator DTO
- [ ] Implementować error handling middleware
- [ ] Dodać logging (Winston/Pino)
- [ ] Swagger/OpenAPI documentation
- [ ] Rate limiting
- [ ] CSRF protection

### Frontend
- [ ] Dodać loading states
- [ ] Error boundaries
- [ ] Toast notifications
- [ ] Skeleton loaders
- [ ] Optimistic UI updates
- [ ] Image optimization

### DevOps
- [ ] Setup staging environment
- [ ] Database backup strategy
- [ ] Monitoring (Sentry/LogRocket)
- [ ] Analytics (Google Analytics/Plausible)

---

## Notatki

### Aktualna Struktura API:
- `GET /api/products` - lista produktów
- `GET /api/products/:slug` - szczegóły produktu
- `GET /api/categories` - lista kategorii
- `GET /api/categories/:slug` - kategoria ze wszystkimi produktami

### Do dodania:
- `POST /api/orders` - utworzenie zamówienia
- `GET /api/orders/my` - zamówienia użytkownika (wymagana autentykacja)
- `POST /api/auth/register` - rejestracja
- `POST /api/auth/login` - logowanie
- `GET /api/auth/me` - dane zalogowanego użytkownika

### Przykładowe dane w bazie:
Po uruchomieniu seeda, baza zawiera:
- 3 kategorie: Barierki, Balustrady, Pergole
- 4 produkty z wariantami (kolory, rozmiary, automatyka)
- Produkty featured na stronie głównej

---

## Uruchomienie projektu

```bash
# 1. Start PostgreSQL
docker-compose up -d

# 2. Setup backend
cd apps/api
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed

# 3. Start aplikacji
cd ../..
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:3001
