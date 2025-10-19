# 🚀 Witaj w Projekcie Gruby!

## ✅ Aplikacja jest URUCHOMIONA i GOTOWA!

Twoje aplikacje działają na:
- **Frontend (Strona)**: http://localhost:3000
- **Backend (API)**: http://localhost:3001

## 🌐 Otwórz stronę w przeglądarce

1. Otwórz przeglądarkę (Chrome, Safari, Firefox)
2. Wpisz: **http://localhost:3000**
3. Zobaczysz stronę główną sklepu z produktami aluminiowymi!

## 📱 Co możesz zobaczyć?

### Gotowe strony:
✅ **Strona główna** (http://localhost:3000)
   - Hero sekcja z nagłówkiem o wysyłce
   - 3 główne cechy (Wysyłka, Łatwy montaż, Gwarancja)
   - Kategorie produktów: Barierki, Balustrady, Pergole
   - Polecane produkty z cenami

✅ **Wszystkie produkty** (http://localhost:3000/produkty)
   - Lista wszystkich produktów
   - Filtry po kategoriach
   - Karty produktów z cenami i opisami

✅ **Szczegóły produktu** (http://localhost:3000/produkty/barierka-nowoczesna-minimal)
   - Pełny opis produktu
   - Konfigurator wariantów (kolory, rozmiary)
   - Dynamiczne przeliczanie ceny
   - Specyfikacja techniczna

✅ **O nas** (http://localhost:3000/o-nas)
   - Informacje o firmie
   - Misja i wartości
   - Wyróżniki na tle konkurencji

✅ **Kontakt** (http://localhost:3000/kontakt)
   - Dane kontaktowe
   - Formularz kontaktowy
   - FAQ

### Przykładowe produkty w bazie:
- ✅ **Barierka Nowoczesna Minimal** - od 450 zł
- ✅ **Barierka ze Szkłem** - od 650 zł
- ✅ **Pergola Bioklimatyczna Premium** - od 8500 zł
- ✅ **Balustrada Wewnętrzna Classic** - od 380 zł

## 🎨 Funkcje działające:

- ✅ Responsywny design (działa na telefonie i komputerze)
- ✅ Filtrowanie produktów po kategoriach
- ✅ Konfigurator wariantów produktu
- ✅ Dynamiczne przeliczanie ceny
- ✅ Nawigacja między stronami
- ✅ API REST z produktami i kategoriami

## 🛠️ Komendy do zarządzania

### Zatrzymanie aplikacji:
Jeśli chcesz zatrzymać serwery, wciśnij **CTRL+C** w terminalu gdzie działają

### Ponowne uruchomienie:
```bash
# W głównym katalogu projektu
cd /Users/mateuszminge/Desktop/Gruby

# OPCJA 1: Uruchom wszystko razem (w jednym terminalu)
npm run dev

# OPCJA 2: Osobno backend i frontend (w dwóch terminalach)
# Terminal 1 - Backend
cd apps/api && npm run dev

# Terminal 2 - Frontend  
cd apps/web && npm run dev
```

### Obejrzyj dane w bazie:
```bash
cd /Users/mateuszminge/Desktop/Gruby/apps/api
npm run prisma:studio
```
To otworzy wizualny interfejs do przeglądania danych w przeglądarce!

## 🎯 Co działa i co jeszcze można dodać

### ✅ Gotowe funkcje:
- Pełna strona główna z hero i kategoriami
- Listing wszystkich produktów z filtrowaniem
- Strona szczegółów produktu z konfiguratorem
- Dynamiczne przeliczanie ceny produktu
- Strony "O nas" i "Kontakt"
- Backend API z produktami
- Baza danych PostgreSQL z przykładowymi danymi

### 🔨 Do dodania w przyszłości:
- Koszyk zakupowy (dodawanie produktów, edycja, usuwanie)
- Proces składania zamówienia (formularz, podsumowanie)
- Logowanie i rejestracja użytkowników
- Panel użytkownika z historią zamówień
- Panel administracyjny
- Płatności online
- System opinii o produktach

## 📂 Struktura projektu - gdzie co znajdziesz

```
Gruby/
├── apps/
│   ├── web/                    # 🎨 FRONTEND - Strona internetowa
│   │   ├── app/
│   │   │   ├── page.tsx       # Strona główna
│   │   │   ├── layout.tsx     # Nawigacja i stopka
│   │   │   ├── produkty/      # Strony produktów
│   │   │   ├── o-nas/         # Strona O nas
│   │   │   └── kontakt/       # Strona Kontakt
│   │   ├── components/ui/     # Komponenty (Button, Card)
│   │   ├── lib/              # Funkcje pomocnicze
│   │   └── store/            # Zarządzanie stanem (koszyk)
│   │
│   └── api/                   # 🔧 BACKEND - Serwer API
│       ├── src/
│       │   ├── products/     # Moduł produktów
│       │   ├── categories/   # Moduł kategorii
│       │   └── prisma/       # Połączenie z bazą danych
│       └── prisma/
│           ├── schema.prisma # Struktura bazy danych
│           └── seed.ts       # Dane przykładowe
│
└── package.json
```

## 🎨 Jak edytować stronę?

### Zmień tekst na stronie głównej:
1. Otwórz plik: `apps/web/app/page.tsx`
2. Znajdź teksty które chcesz zmienić
3. Zapisz - strona odświeży się automatycznie!

### Zmień kolory lub style:
1. Otwórz plik: `apps/web/app/globals.css`
2. Edytuj zmienne kolorów
3. Lub użyj klas Tailwind CSS w komponentach

### Dodaj nowy produkt do bazy:
1. Otwórz: `apps/api/prisma/seed.ts`
2. Dodaj nowy produkt według wzoru
3. Uruchom: `cd apps/api && npx tsx prisma/seed.ts`

## 🆘 Pomoc - Co zrobić gdy...

### ❌ Problem: Strona nie ładuje się
**Rozwiązanie:**
```bash
# Sprawdź czy oba serwery działają
# Backend powinien pokazywać: "🚀 API is running on: http://localhost:3001"
# Frontend powinien pokazywać: "✓ Ready in..."

# Jeśli nie działają, uruchom ponownie:
cd /Users/mateuszminge/Desktop/Gruby
npm run dev
```

### ❌ Problem: Błąd "Cannot connect to API"
**Rozwiązanie:**
```bash
# Upewnij się że backend działa na porcie 3001
curl http://localhost:3001/api/categories

# Jeśli nie odpowiada, uruchom backend:
cd apps/api && npm run dev
```

### ❌ Problem: Brak produktów na stronie
**Rozwiązanie:**
```bash
# Wypełnij bazę danych ponownie
cd apps/api
npx tsx prisma/seed.ts
```

### ❌ Problem: "Database connection error"
**Rozwiązanie:**
```bash
# Sprawdź czy PostgreSQL działa
pg_isready

# Jeśli nie działa, uruchom:
# Na Mac z Homebrew:
brew services start postgresql@16
```

## 📸 Testuj różne strony

Wypróbuj te linki w przeglądarce:

1. **Strona główna**: http://localhost:3000
2. **Wszystkie produkty**: http://localhost:3000/produkty
3. **Barierki**: http://localhost:3000/produkty?kategoria=barierki
4. **Balustrady**: http://localhost:3000/produkty?kategoria=balustrady
5. **Pergole**: http://localhost:3000/produkty?kategoria=pergole
6. **Przykładowy produkt**: http://localhost:3000/produkty/barierka-nowoczesna-minimal
7. **O nas**: http://localhost:3000/o-nas
8. **Kontakt**: http://localhost:3000/kontakt

## 📚 Przydatne zasoby

Jeśli chcesz się nauczyć więcej:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 🎉 Gratulacje!

Masz w pełni działający sklep e-commerce z:
- ✅ Piękną, nowoczesną stroną
- ✅ Produktami aluminiowymi (barierki, balustrady, pergole)
- ✅ Konfiguratorem produktów
- ✅ Pełnym API backendowym
- ✅ Bazą danych z przykładami

**Wszystko działa i jest gotowe do dalszej rozbudowy!** 🚀

W razie pytań, sprawdź też:
- `README.md` - pełna dokumentacja techniczna
- `PLAN.md` - plan rozwoju projektu
- `DATABASE_SETUP.md` - instrukcje dotyczące bazy danych
