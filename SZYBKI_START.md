# ⚡ SZYBKI START - 3 Kroki do Wdrożenia

## 🎯 CO MUSISZ ZROBIĆ (15 minut):

### 1️⃣ Stwórz Repo na GitHub (5 min)
```
1. Wejdź na: https://github.com/new
2. Repository name: gruby
3. Public/Private: jak wolisz
4. ☐ NIE zaznaczaj "Initialize with README"
5. Kliknij "Create repository"
```

### 2️⃣ Wypchnij Kod (2 min)
**ZAMIEŃ `TWOJ-USERNAME` na swoją nazwę z GitHub!**

Otwórz Terminal i wklej:
```bash
cd /Users/mateuszminge/Desktop/Gruby
git remote add origin https://github.com/TWOJ-USERNAME/gruby.git
git push -u origin main
```

Podaj hasło GitHub gdy zapyta.

### 3️⃣ Deploy na Vercel (8 min)
```
1. Wejdź na: https://vercel.com/signup
2. "Continue with GitHub" → zaloguj się
3. "Add New..." → "Project"
4. Import repo "gruby"
5. Dodaj Environment Variables:
   - NODE_ENV = production
   - API_URL = http://localhost:3001/api
6. Kliknij "Deploy"
7. Czekaj 2-3 minuty
8. ✅ GOTOWE!
```

---

## 🗄️ BONUS: Baza Danych (5 min)

### Railway - DARMOWA PostgreSQL:
```
1. Wejdź: https://railway.app
2. Login with GitHub
3. New Project → Provision PostgreSQL
4. Skopiuj "Postgres Connection URL"
5. W Vercel → Settings → Environment Variables:
   - DATABASE_URL = (wklej connection string)
6. Vercel → Deployments → Redeploy
```

---

## 🎉 TERAZ:

**Twoja strona jest LIVE!**

URL: `https://gruby-xxx.vercel.app`

---

## 📖 Pełna Instrukcja:

Wszystkie szczegóły w: `VERCEL_DEPLOY_GUIDE.md`

---

## ❓ Problemy?

**Build Error:** Sprawdź logi w Vercel
**Pytania:** Pytaj mnie!

**Powodzenia!** 🚀
