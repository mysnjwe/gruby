# 🚀 KROK 3: Deploy na Vercel (5 minut)

## ✅ CO MAMY:
- ✓ Repo na GitHub: https://github.com/mysnjwe/gruby
- ✓ Kod wypchany ✓
- ✓ Wszystko gotowe do deploy!

---

## 🌐 TERAZ - Wdrożenie na Vercel

### A. Otwórz Vercel

Kliknij ten link (lub wklej w przeglądarkę):
```
https://vercel.com/signup
```

---

### B. Zaloguj się przez GitHub

1. Zobaczysz przycisk: **"Continue with GitHub"** (czarny)
2. **Kliknij go**
3. GitHub zapyta: "Authorize Vercel?"
4. **Kliknij "Authorize Vercel"** (zielony przycisk)
5. Może zapytać o hasło GitHub → podaj
6. ✅ Jesteś w dashboardzie Vercel!

---

### C. Import Projektu

1. W prawym górnym rogu kliknij: **"Add New..."**
2. Z menu wybierz: **"Project"**
3. Zobaczysz listę repo z GitHub
4. Znajdź **"gruby"** (twoje repo)
5. Po prawej stronie kliknij: **"Import"**

---

### D. Konfiguracja Projektu

Vercel pokaże formularz. **Większość zostaw jak jest!**

```
✓ Framework Preset: Next.js (auto-wykryte)
✓ Root Directory: ./ (zostaw)
✓ Build Command: (zostaw domyślne)
✓ Output Directory: (zostaw domyślne)
✓ Install Command: (zostaw domyślne)
```

**Przewiń w dół** do sekcji "Environment Variables"

---

### E. Environment Variables (WAŻNE!)

Kliknij **"Environment Variables"** aby rozwinąć.

#### Dodaj 3 zmienne:

**Zmienna 1:**
```
Key: NODE_ENV
Value: production
```
Kliknij **"Add"**

**Zmienna 2:**
```
Key: API_URL
Value: http://localhost:3001/api
```
Kliknij **"Add"**

**Zmienna 3:**
```
Key: NEXT_PUBLIC_API_URL
Value: http://localhost:3001/api
```
Kliknij **"Add"**

**UWAGA:** To tymczasowe ustawienia. Backend uruchomimy później osobno!

---

### F. DEPLOY! 🚀

1. Przewiń na sam dół
2. Zobaczysz niebieski przycisk: **"Deploy"**
3. **KLIKNIJ GO!**
4. Vercel zaczyna budować projekt
5. Zobaczysz zielony tekst (logi budowania)
6. **Poczekaj 2-4 minuty** ⏳

---

### G. Co zobaczysz podczas budowania:

```
🔨 Building...
▲ Vercel CLI 34.x.x
▲ Installing dependencies...
▲ npm install
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Finalizing page optimization
✓ Build completed

🎊 Congratulations!
```

---

### H. GOTOWE! 🎉

Gdy build się skończy zobaczysz:

1. ✅ **Duży zielony checkmark**
2. 🎊 **Konfetti animacja**
3. 🔗 **Link do strony**: `https://gruby-xxx.vercel.app`
4. Przycisk: **"Visit"** lub **"Continue to Dashboard"**

**KLIKNIJ na link** lub przycisk **"Visit"**

---

## ✅ Twoja strona jest LIVE!

Powinieneś zobaczyć:
- Niebieski hero z gradientem
- Sekcje: Dlaczego My, Kategorie, Produkty
- Header i Footer

**GRATULACJE!** 🎉🎉🎉

---

## 🔗 Co dalej?

### Opcja A: Baza Danych (Railway)
Jeśli chcesz podłączyć bazę danych → napisz **"Chcę bazę danych"**

### Opcja B: Własna Domena
Jeśli chcesz `gruby.juraquest.pl` → napisz **"Chcę domenę"**

### Opcja C: Backend API
Jeśli chcesz uruchomić backend → napisz **"Chcę backend"**

---

## 📞 NAPISZ MI:

**"DEPLOYED!"** gdy zobaczysz swoją stronę live! 🚀

I podeślij link do strony!

---

## 🆘 Problemy?

### Build Error
Sprawdź logi w Vercel → podeślij mi screenshot

### 404 Error
Odśwież stronę (Cmd+R)

### "Failed to compile"
Sprawdź czy dodałeś wszystkie 3 zmienne środowiskowe (Krok E)

---

**ŚMIAŁO! To ostatni krok!** 💪🎯
