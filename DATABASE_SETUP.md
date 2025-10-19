# Setup Bazy Danych

## Opcja 1: Docker (Zalecane)

Jeśli masz zainstalowany Docker:

```bash
# Start PostgreSQL container
docker compose up -d

# Sprawdź czy działa
docker compose ps

# Zatrzymaj
docker compose down

# Zatrzymaj i usuń dane
docker compose down -v
```

## Opcja 2: Lokalna instalacja PostgreSQL

### macOS (Homebrew)
```bash
# Instalacja
brew install postgresql@16

# Start
brew services start postgresql@16

# Utwórz bazę danych
createdb gruby

# Połączenie do bazy
psql gruby
```

### Linux (Ubuntu/Debian)
```bash
# Instalacja
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Utwórz użytkownika i bazę
sudo -u postgres createuser --interactive --pwprompt
sudo -u postgres createdb gruby
```

### Windows
Pobierz i zainstaluj PostgreSQL z: https://www.postgresql.org/download/windows/

## Opcja 3: Prisma Cloud (Development Only)

Prisma oferuje darmową bazę danych dla developmentu:

```bash
cd apps/api
npx prisma dev
```

## Konfiguracja Connection String

Po uruchomieniu PostgreSQL, zaktualizuj `apps/api/.env`:

```env
# Dla Docker (domyślne)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/gruby?schema=public"

# Dla lokalnej instalacji (dostosuj użytkownika/hasło)
DATABASE_URL="postgresql://twoj_user:twoje_haslo@localhost:5432/gruby?schema=public"
```

## Uruchomienie Migracji

Po skonfigurowaniu bazy danych:

```bash
cd apps/api

# Generuj Prisma Client
npm run prisma:generate

# Uruchom migracje
npm run prisma:migrate

# Wypełnij danymi przykładowymi
npm run prisma:seed

# Opcjonalnie: Otwórz Prisma Studio
npm run prisma:studio
```

## Troubleshooting

### Problem: Connection refused
- Sprawdź czy PostgreSQL działa: `pg_isready` (lokalna instalacja)
- Sprawdź czy port 5432 nie jest zajęty
- Sprawdź czy DATABASE_URL jest poprawny

### Problem: Authentication failed
- Sprawdź użytkownika i hasło w DATABASE_URL
- Upewnij się że użytkownik ma uprawnienia do bazy

### Problem: Database does not exist
```bash
# Utwórz bazę ręcznie
psql -U postgres
CREATE DATABASE gruby;
\q
```

### Reset bazy danych
```bash
cd apps/api
npx prisma migrate reset
```
