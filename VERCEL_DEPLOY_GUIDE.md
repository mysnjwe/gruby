# 🚀 Instrukcja Wdrożenia na Vercel

## ✅ Krok 1: Przygotowania (GOTOWE!)

- [x] Git zainicjalizowany
- [x] Pliki dodane do Git
- [x] Pierwszy commit utworzony
- [x] Konfiguracja Vercel gotowa

---

## 📦 Krok 2: Stwórz Repo na GitHub (5 minut)

### A. Wejdź na GitHub
1. Otwórz przeglądarkę: https://github.com
2. Zaloguj się (lub zarejestruj jeśli nie masz konta)

### B. Stwórz Nowe Repo
1. Kliknij **zielony przycisk "New"** (prawy górny róg)
   LUB wejdź na: https://github.com/new

2. Wypełnij formularz:
   ```
   Repository name: gruby
   Description: Sklep z wyrobami aluminiowymi - barierki, balustrady, pergole
   ✓ Public (lub Private - jak wolisz)
   ☐ Initialize with README (ODZNACZ - mamy już pliki!)
   ```

3. Kliknij **"Create repository"**

### C. Połącz Lokalne Repo z GitHub
Po utworzeniu repo, GitHub pokaże instrukcje. Użyj tych komend:

**WAŻNE:** Zamień `TWOJ-USERNAME` na swoją nazwę użytkownika GitHub!

```bash
cd /Users/mateuszminge/Desktop/Gruby

# Dodaj remote (zamień TWOJ-USERNAME!)
git remote add origin https://github.com/TWOJ-USERNAME/gruby.git

# Zmień nazwę brancha na main (jeśli trzeba)
git branch -M main

# Wypchnij kod na GitHub
git push -u origin main
```

**Wpisz te komendy w Terminal** (będziesz musiał podać hasło GitHub)

---

## 🌐 Krok 3: Deploy na Vercel (5 minut)

### A. Zarejestruj się na Vercel
1. Wejdź na: https://vercel.com/signup
2. Kliknij **"Continue with GitHub"**
3. Zaloguj się przez GitHub (autoryzuj dostęp)

### B. Import Projektu
1. Po zalogowaniu kliknij **"Add New..." → Project**
2. Znajdź repo **"gruby"** na liście
3. Kliknij **"Import"**

### C. Konfiguracja Projektu
Vercel wykryje automatycznie Next.js, ale upewnij się:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (zostaw domyślne)
Output Directory: .next (zostaw domyślne)
Install Command: npm install (zostaw domyślne)
```

**NIE KLIKAJ JESZCZE DEPLOY!** Najpierw zmienne środowiskowe.

### D. Environment Variables (WAŻNE!)
Kliknij **"Environment Variables"** i dodaj:

```bash
# Podstawowe
NODE_ENV = production

# API (tymczasowo - później zmienimy)
API_URL = http://localhost:3001/api
NEXT_PUBLIC_API_URL = http://localhost:3001/api
```

**UWAGA:** Backend API będzie działał lokalnie na razie. W kroku 5 wdrożymy backend osobno.

### E. Deploy!
1. Kliknij **"Deploy"**
2. Poczekaj 2-3 minuty (Vercel buduje projekt)
3. ✅ GOTOWE! Twoja strona jest LIVE!

**Twój URL:** `https://gruby-coś-tam.vercel.app`

---

## 🗄️ Krok 4: Baza Danych - Railway (DARMOWE!)

### A. Załóż Konto na Railway
1. Wejdź na: https://railway.app
2. Kliknij **"Login"** → **"Login with GitHub"**
3. Autoryzuj dostęp

### B. Stwórz PostgreSQL Database
1. Kliknij **"New Project"**
2. Wybierz **"Provision PostgreSQL"**
3. Poczekaj chwilę (Railway tworzy bazę)

### C. Pobierz Connection String
1. Kliknij na utworzoną bazę PostgreSQL
2. Zakładka **"Connect"**
3. Znajdź **"Postgres Connection URL"**
4. Kliknij **"Copy"** (skopiuj cały link)

Przykład:
```
postgresql://postgres:hasło@containers-us-west-xxx.railway.app:5432/railway
```

### D. Dodaj do Vercel
1. Wróć do Vercel → Twój projekt
2. **Settings** → **Environment Variables**
3. Dodaj nową zmienną:
   ```
   Name: DATABASE_URL
   Value: (wklej skopiowany connection string z Railway)
   ```
4. Kliknij **"Save"**

### E. Uruchom Migracje Bazy
Na Railway:
1. Kliknij na bazę PostgreSQL
2. Zakładka **"Data"**
3. Możesz zobaczyć tabele (będą puste - OK)

**Migracje uruchomią się automatycznie** przy następnym deploy.

---

## 🔄 Krok 5: Redeploy z Bazą Danych

### A. W Vercel
1. Wejdź w projekt "gruby"
2. Zakładka **"Deployments"**
3. Znajdź najnowszy deployment
4. Kliknij **"..." (trzy kropki)** → **"Redeploy"**
5. Potwierdź

### B. Sprawdź Logi
1. Po redeployu kliknij na deployment
2. Zakładka **"Build Logs"**
3. Sprawdź czy build się powiódł (✓)

---

## 🎯 Krok 6: Własna Domena (OPCJONALNIE)

### A. Subdomena gruby.juraquest.pl

#### W Vercel:
1. **Settings** → **Domains**
2. Wpisz: `gruby.juraquest.pl`
3. Kliknij **"Add"**
4. Vercel pokaże jakie DNS trzeba dodać

#### W Panelu juraquest.pl (SEOhost):
1. Zaloguj się do panelu hostingu
2. Znajdź **"Zarządzanie DNS"** lub **"DNS Zone Editor"**
3. Dodaj rekord CNAME:
   ```
   Type: CNAME
   Name: gruby
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
4. Zapisz

**Poczekaj 5-30 minut** na propagację DNS.

#### Sprawdź:
```bash
dig gruby.juraquest.pl
```

Powinien pokazać: `cname.vercel-dns.com`

---

## 🔧 Krok 7: Backend API (Osobny Deploy)

Backend (NestJS) musi być wdrożony osobno. Opcje:

### Opcja A: Railway (ŁATWE)
1. W Railway: **New Project** → **Deploy from GitHub repo**
2. Wybierz repo "gruby"
3. Root Directory: `apps/api`
4. Start Command: `npm run start:prod`
5. Dodaj zmienną `DATABASE_URL` (ta sama co wcześniej)

### Opcja B: Render.com (DARMOWE)
1. Wejdź na: https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Root Directory: `apps/api`
5. Build Command: `npm install && npm run build`
6. Start Command: `npm run start:prod`

### Opcja C: Vercel Serverless Functions
Trudniejsze - wymaga refactoringu API.

**Po wdrożeniu backendu:**
1. Skopiuj URL backendu (np. `https://gruby-api.railway.app`)
2. W Vercel dodaj zmienną:
   ```
   API_URL = https://gruby-api.railway.app/api
   NEXT_PUBLIC_API_URL = https://gruby-api.railway.app/api
   ```
3. Redeploy

---

## ✅ Checklist Końcowy

- [ ] Repo na GitHub utworzone
- [ ] Kod wypchnięty na GitHub
- [ ] Vercel połączony z GitHub
- [ ] Frontend wdrożony na Vercel
- [ ] Baza danych na Railway
- [ ] DATABASE_URL dodany do Vercel
- [ ] Migracje uruchomione
- [ ] Backend wdrożony (Railway/Render)
- [ ] API_URL zaktualizowany w Vercel
- [ ] Domena skonfigurowana (opcjonalnie)
- [ ] Wszystko działa! 🎉

---

## 🆘 Pomoc i Troubleshooting

### Problem: Build Error w Vercel
**Rozwiązanie:** Sprawdź logi w Vercel → Deployments → Build Logs

### Problem: Database Connection Error
**Rozwiązanie:** 
- Sprawdź czy DATABASE_URL jest poprawny
- Upewnij się że Railway DB działa
- Sprawdź czy IP Vercel jest whitelisted (Railway domyślnie pozwala wszystkim)

### Problem: 404 na podstronach
**Rozwiązanie:** Vercel automatycznie obsługuje routing Next.js - jeśli masz 404, sprawdź build logi.

### Problem: API nie działa
**Rozwiązanie:**
- Backend musi być wdrożony osobno
- Sprawdź czy API_URL wskazuje na właściwy adres
- Sprawdź CORS w backendzie

---

## 🎉 Gratulacje!

Twoja strona jest LIVE na Vercel! 🚀

**Następne kroki:**
1. Dodaj prawdziwe zdjęcia produktów
2. Skonfiguruj email notifications
3. Dodaj Google Analytics
4. SEO optimization

---

## 📞 Potrzebujesz Pomocy?

Jeśli coś nie działa:
1. Sprawdź logi w Vercel
2. Sprawdź dokumentację: https://vercel.com/docs
3. Pytaj mnie! 😊

**Dokumentacja utworzona:** 19 października 2025
**Status:** ✅ Gotowe do wdrożenia
