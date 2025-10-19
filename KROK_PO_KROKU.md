# 📋 KROK PO KROKU - Wdrożenie na Vercel

## ✅ KROK 1: GitHub Repo - GOTOWE! ✓

Twoje repo: https://github.com/mysnjwe/gruby

---

## 🔄 KROK 2: Wypchnij Kod na GitHub

### A. Otwórz Terminal (Aplikacja "Terminal" na Mac)

**Jak znaleźć Terminal:**
1. Naciśnij `Cmd + Spacja` (Spotlight)
2. Wpisz: `terminal`
3. Naciśnij Enter

### B. Wklej te komendy (jedna po drugiej):

#### Komenda 1: Przejdź do folderu projektu
```bash
cd /Users/mateuszminge/Desktop/Gruby
```
**Co robi:** Przechodzi do folderu z projektem
**Wciśnij Enter**

---

#### Komenda 2: Wypchnij kod na GitHub
```bash
git push -u origin main
```
**Co robi:** Wysyła wszystkie pliki na GitHub

**UWAGA:** GitHub zapyta o login i hasło!

---

### C. Logowanie do GitHub (WAŻNE!)

#### Opcja 1: Personal Access Token (ZALECANE)

GitHub nie akceptuje już zwykłych haseł! Musisz użyć tokena.

**Jak stworzyć token:**

1. **Otwórz w przeglądarce:**
   ```
   https://github.com/settings/tokens/new
   ```

2. **Wypełnij formularz:**
   ```
   Note: Vercel Deploy Token
   Expiration: 90 days (lub dłużej)
   
   Zaznacz checkboxy:
   ✓ repo (cały)
   ```

3. **Kliknij "Generate token" (na dole)**

4. **SKOPIUJ TOKEN!** (pokazuje się tylko raz!)
   ```
   Wygląda jak: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

5. **W Terminalu:**
   ```
   Username: mysnjwe
   Password: (wklej skopiowany token, NIE hasło!)
   ```

**WAŻNE:** Token wklej jako "hasło" - nic się nie pokaże gdy wklejasz!

---

#### Opcja 2: GitHub CLI (jeśli wolisz)

Jeśli nie chcesz bawić się tokenem:

```bash
# Zainstaluj GitHub CLI
brew install gh

# Zaloguj się
gh auth login

# Wybierz:
# → GitHub.com
# → HTTPS
# → Yes (authenticate)
# → Login with browser
```

Potem ponów `git push -u origin main`

---

### D. Co zobaczysz gdy się uda:

```
Enumerating objects: 145, done.
Counting objects: 100% (145/145), done.
Delta compression using up to 8 threads
Compressing objects: 100% (120/120), done.
Writing objects: 100% (145/145), 234.56 KiB | 12.34 MiB/s, done.
Total 145 (delta 45), reused 0 (delta 0)
To https://github.com/mysnjwe/gruby.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Oznacza:** ✅ Kod jest na GitHub!

---

## 🌐 KROK 3: Deploy na Vercel

### A. Wejdź na Vercel

**W przeglądarce otwórz:**
```
https://vercel.com/signup
```

### B. Zaloguj się przez GitHub

1. Kliknij **"Continue with GitHub"** (czarny przycisk)
2. GitHub zapyta o autoryzację → Kliknij **"Authorize Vercel"**
3. Może zapytać o hasło GitHub → podaj
4. ✅ Jesteś zalogowany na Vercel!

### C. Import Projektu

1. Zobaczysz dashboard Vercel
2. Kliknij **"Add New..." (prawy górny róg)**
3. Wybierz **"Project"** z menu
4. Znajdź repo **"gruby"** na liście
5. Kliknij **"Import"** przy gruby

### D. Konfiguracja (WAŻNE!)

Vercel pokaże formularz:

```
Framework Preset: Next.js (powinno wykryć automatycznie)
Root Directory: ./ (zostaw jak jest)
Build Command: (zostaw domyślne)
Output Directory: (zostaw domyślne)
Install Command: (zostaw domyślne)
```

### E. Environment Variables (Zmienne Środowiskowe)

**Kliknij "Environment Variables" (rozwiń sekcję)**

Dodaj te 2 zmienne:

#### Zmienna 1:
```
NAME (Key): NODE_ENV
VALUE: production
```
Kliknij "Add"

#### Zmienna 2:
```
NAME (Key): API_URL
VALUE: http://localhost:3001/api
```
Kliknij "Add"

#### Zmienna 3:
```
NAME (Key): NEXT_PUBLIC_API_URL
VALUE: http://localhost:3001/api
```
Kliknij "Add"

**UWAGA:** To tymczasowe ustawienia. Backend uruchomimy później!

### F. Deploy!

1. Wszystko gotowe? Kliknij **"Deploy"** (niebieski przycisk, na dole)
2. Vercel zaczyna budować projekt
3. Zobaczysz logi (zielony tekst = dobrze!)
4. Poczekaj **2-4 minuty**

### G. Co zobaczysz:

```
🔨 Building...
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Build completed

🎉 Deployment Ready!
```

### H. GOTOWE! 🎉

Vercel pokaże:
- ✅ Zielony checkmark
- 🔗 Link do strony: **https://gruby-xxx.vercel.app**

**KLIKNIJ NA LINK** - Twoja strona jest LIVE!

---

## 🗄️ KROK 4: Baza Danych Railway (OPCJONALNIE teraz)

Możesz to zrobić teraz lub później.

### A. Załóż konto na Railway

**W przeglądarce:**
```
https://railway.app
```

1. Kliknij **"Login"**
2. Wybierz **"Login with GitHub"**
3. Autoryzuj Railway
4. ✅ Zalogowany!

### B. Stwórz PostgreSQL

1. Kliknij **"New Project"**
2. Wybierz **"Provision PostgreSQL"**
3. Poczekaj 30 sekund (Railway tworzy bazę)
4. ✅ Baza gotowa!

### C. Skopiuj Connection String

1. Kliknij na **PostgreSQL** (fioletowa kartka)
2. Zakładka **"Connect"**
3. Znajdź **"Postgres Connection URL"**
4. Kliknij **"Copy"** (lub zaznacz i Cmd+C)

Będzie wyglądać tak:
```
postgresql://postgres:H1x...@containers-us-west-123.railway.app:5432/railway
```

### D. Dodaj do Vercel

1. Wróć do Vercel (druga zakładka)
2. Wejdź w projekt **"gruby"**
3. **Settings** (menu górne)
4. **Environment Variables** (lewe menu)
5. Kliknij **"Add New"**
6. Wpisz:
   ```
   NAME: DATABASE_URL
   VALUE: (wklej connection string z Railway)
   ```
7. Kliknij **"Save"**

### E. Redeploy

1. Zakładka **"Deployments"** (menu górne)
2. Znajdź najnowszy deployment (pierwszy na liście)
3. Kliknij **"..." (trzy kropki)** po prawej
4. Wybierz **"Redeploy"**
5. Kliknij **"Redeploy"** (potwierdź)
6. Poczekaj 2 minuty
7. ✅ Strona z bazą danych działa!

---

## ✅ CHECKLIST - Gdzie Jesteś?

- [ ] **KROK 1:** GitHub repo utworzone ✓ (GOTOWE!)
- [ ] **KROK 2:** Kod wypchnięty na GitHub
- [ ] **KROK 3:** Strona wdrożona na Vercel
- [ ] **KROK 4:** Baza danych Railway (opcjonalnie)

---

## 🆘 Problemy?

### "Permission denied" przy git push
**Rozwiązanie:** Potrzebujesz Personal Access Token (zobacz sekcja C w KROK 2)

### "Repository not found" przy git push
**Rozwiązanie:** Sprawdź czy repo nazywa się dokładnie "gruby"

### Build Error w Vercel
**Rozwiązanie:** Sprawdź logi - podeślij mi screenshot

### "Failed to compile" w Vercel
**Rozwiązanie:** Sprawdź czy dodałeś zmienne środowiskowe (KROK 3E)

---

## 📞 GDZIE JESTEŚ TERAZ?

**Napisz mi:**
- "Jestem przy KROK 2" - pomogę z GitHub push
- "Jestem przy KROK 3" - pomogę z Vercel
- "Coś nie działa" - podeślij screenshot!

---

## 🎯 NASTĘPNY KROK DLA CIEBIE:

**TERAZ wykonaj KROK 2:**
1. Otwórz Terminal
2. Wklej: `cd /Users/mateuszminge/Desktop/Gruby`
3. Wklej: `git push -u origin main`
4. Stwórz token na GitHub (jeśli trzeba)
5. Napisz mi "Pushed!" gdy się uda!

**Trzymam kciuki!** 🚀
