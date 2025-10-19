# Gruby - Nowoczesny Sklep z Wyrobami Aluminiowymi

> Headless e-commerce platform dla produktów aluminiowych (barierki, balustrady, pergole) z wysyłką w całej Polsce.

## 🏗️ Architektura

System zbudowany w architekturze **Headless** z wykorzystaniem **Monorepo** (Turborepo):

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: NestJS + TypeScript
- **Baza danych**: PostgreSQL + Prisma ORM
- **State Management**: Zustand
- **Monorepo**: Turborepo

## 📦 Struktura Projektu

```
Gruby/
├── apps/
│   ├── web/          # Frontend Next.js
│   ├── api/          # Backend NestJS
│   └── docs/         # Dokumentacja
├── packages/
│   ├── ui/           # Współdzielone komponenty UI
│   ├── eslint-config/
│   └── typescript-config/
└── docker-compose.yml
```

## 🚀 Szybki Start

### Wymagania

- Node.js 18+
- npm 11+
- Docker (dla PostgreSQL)

### Instalacja

1. **Sklonuj repozytorium i zainstaluj zależności**:
```bash
cd Gruby
npm install
```

2. **Uruchom bazę danych PostgreSQL**:
```bash
docker-compose up -d
```

3. **Skonfiguruj zmienne środowiskowe**:

Backend (`apps/api/.env`):
```bash
cp apps/api/.env.example apps/api/.env
# Edytuj apps/api/.env jeśli potrzeba
```

Frontend (`apps/web/.env.local`):
```bash
cp apps/web/.env.local.example apps/web/.env.local
```

4. **Uruchom migracje i seed bazy danych**:
```bash
cd apps/api
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

5. **Uruchom aplikacje w trybie development**:
```bash
# Z głównego katalogu
npm run dev
```

Aplikacje będą dostępne pod:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Prisma Studio: `cd apps/api && npm run prisma:studio`

## 📝 Dostępne Skrypty

### Główne (z root directory)

```bash
npm run dev          # Uruchom wszystkie aplikacje w dev mode
npm run build        # Build wszystkich aplikacji
npm run lint         # Linting wszystkich projektów
npm run format       # Formatowanie kodu
```

### Backend (apps/api)

```bash
npm run dev                # Dev mode z hot reload
npm run build              # Build produkcyjny
npm run prisma:generate    # Generuj Prisma Client
npm run prisma:migrate     # Uruchom migracje
npm run prisma:studio      # Otwórz Prisma Studio
npm run prisma:seed        # Wypełnij bazę przykładowymi danymi
```

### Frontend (apps/web)

```bash
npm run dev          # Dev mode z Turbopack
npm run build        # Build produkcyjny
npm run start        # Uruchom build produkcyjny
```

## 🗄️ Model Danych

### Główne modele:

- **User** - Użytkownicy systemu (klienci, admini)
- **Category** - Kategorie produktów (Barierki, Balustrady, Pergole)
- **Product** - Produkty z wariantami i cenami
- **ProductVariant** - Warianty produktów (kolor, rozmiar, wykończenie)
- **Order** - Zamówienia klientów
- **OrderItem** - Pozycje zamówienia

## 🎨 Frontend Features

- ✅ Server-side rendering (SSR) i Static Site Generation (SSG)
- ✅ Responsive design z Tailwind CSS
- ✅ Komponenty UI z shadcn/ui
- ✅ Zarządzanie stanem koszyka z Zustand
- ✅ Type-safe API calls
- 🚧 Konfigurator produktów
- 🚧 Proces checkout
- 🚧 Panel użytkownika

## 🔧 Backend Features

- ✅ RESTful API z NestJS
- ✅ Prisma ORM z PostgreSQL
- ✅ Type-safe database queries
- ✅ Modułowa architektura
- ✅ CORS configuration
- 🚧 Authentication (NextAuth.js)
- 🚧 Order management
- 🚧 Admin panel

## 🎯 Roadmap

### Faza 1: Core API & Model Danych ✅
- [x] Setup Prisma schema
- [x] Products & Categories modules
- [x] Database seeding

### Faza 2: Frontend - Prezentacja Produktów 🚧
- [x] Homepage z featured products
- [x] Navigation & layout
- [ ] Products listing page
- [ ] Product detail page
- [ ] Category filtering

### Faza 3: E-commerce Core 🔜
- [ ] Product configurator
- [ ] Shopping cart
- [ ] Checkout process
- [ ] Order creation

### Faza 4: Authentication & User Panel 🔜
- [ ] NextAuth.js integration
- [ ] User registration/login
- [ ] Order history
- [ ] User profile

### Faza 5: Testing & Deployment 🔜
- [ ] E2E tests (Playwright)
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Production deployment

## 🔐 Bezpieczeństwo

- Nie commituj plików `.env` do repozytorium
- Używaj silnych haseł w produkcji
- Zmień `JWT_SECRET` przed wdrożeniem
- Regularne aktualizacje zależności

## 📄 Licencja

Projekt prywatny - wszystkie prawa zastrzeżone.

## 👥 Team

Projekt stworzony jako nowoczesny sklep e-commerce dla produktów aluminiowych.

---

**Wsparcie**: kontakt@gruby.pl
