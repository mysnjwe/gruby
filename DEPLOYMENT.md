# 🚀 Wdrożenie Projektu "Gruby" na Serwer

## ⚠️ WAŻNE - Wymagania Serwera

Twój projekt **NIE MOŻE** być wgrany jako statyczne pliki HTML!

### Dlaczego?
- Używasz **Server Components** Next.js 15
- Backend API (NestJS) wymaga Node.js
- Baza danych PostgreSQL
- Dynamic rendering i API calls

### Co Jest Potrzebne:
✅ Serwer z **Node.js 18+**
✅ **PostgreSQL** lub dostęp do bazy danych
✅ Możliwość uruchomienia procesów Node.js
✅ Port dostępny dla aplikacji

---

## 📋 3 Opcje Wdrożenia

### **OPCJA 1: VPS/Dedykowany Serwer (NAJLEPSZE)** ⭐⭐⭐⭐⭐

**Gdzie:** DigitalOcean, Hetzner, OVH, AWS, Google Cloud

**Zalety:**
- Pełna kontrola
- Node.js, PostgreSQL, wszystko działa
- Najszybsze
- Profesjonalne

**Koszty:** ~20-50 zł/miesiąc (podstawowy VPS)

**Kroki:**
1. Wynajmij VPS (np. DigitalOcean Droplet - $6/miesiąc)
2. Zainstaluj Node.js i PostgreSQL
3. Upload kodu przez git
4. Uruchom build i start
5. Skonfiguruj Nginx jako reverse proxy
6. Podepnij domenę

**Czas:** 1-2 godziny (z konfiguracją)

---

### **OPCJA 2: Hosting z Node.js** ⭐⭐⭐⭐

**Gdzie:** 
- Vercel (DARMOWY dla hobby!)
- Railway.app (DARMOWY trial)
- Render.com (DARMOWY tier)
- Heroku (płatny)

**Zalety:**
- Łatwe wdrożenie (git push)
- Auto-scaling
- HTTPS automatycznie
- Darmowe opcje!

**Koszty:** 0-100 zł/miesiąc

**POLECAM VERCEL - Najlepsze dla Next.js:**
1. Zarejestruj się na vercel.com
2. Połącz z repo Git
3. Deploy automatyczny!
4. PostgreSQL: Vercel Postgres lub Railway

**Czas:** 15-30 minut

---

### **OPCJA 3: Subdomena na Obecnym Serwerze** ⭐⭐⭐

**JEŚLI** Twój serwer juraquest.pl ma Node.js:

**Sprawdź:**
```bash
ssh srv90026@h61.seohost.pl -p 57185
node --version
npm --version
```

**Jeśli działa Node.js (v18+):**
1. Upload kodu
2. Zainstaluj dependencies
3. Build projekt
4. Uruchom z PM2
5. Nginx proxy na subdomenę

**Czas:** 2-3 godziny

---

## 🎯 MOJA REKOMENDACJA: Vercel (Darmowe!)

### Dlaczego Vercel?
1. ✅ **DARMOWY** dla projektów hobby
2. ✅ Stworzony dla Next.js (przez twórców Next.js!)
3. ✅ Auto-deploy z Git
4. ✅ HTTPS automatycznie
5. ✅ Global CDN
6. ✅ Zero konfiguracji
7. ✅ Można podpiąć własną domenę (gruby.juraquest.pl)

### Jak wdrożyć na Vercel (15 minut):

#### Krok 1: Przygotuj Repo Git
```bash
cd /Users/mateuszminge/Desktop/Gruby
git init
git add .
git commit -m "Initial commit"

# Stwórz repo na GitHub
# Potem:
git remote add origin https://github.com/TWOJ-USERNAME/gruby.git
git push -u origin main
```

#### Krok 2: Deploy na Vercel
1. Wejdź na https://vercel.com
2. Sign up (GitHub account)
3. "New Project"
4. Import z GitHub (wybierz repo "gruby")
5. **Root Directory:** Zostaw puste (monorepo auto-detect)
6. Kliknij "Deploy"

#### Krok 3: Baza Danych
**Opcja A: Vercel Postgres (płatne od $20/m)**
**Opcja B: Railway.app (DARMOWE 5GB)**

Railway:
1. https://railway.app
2. New Project → PostgreSQL
3. Skopiuj CONNECTION_STRING
4. W Vercel: Settings → Environment Variables
5. Dodaj: `DATABASE_URL` = connection string

#### Krok 4: Environment Variables
W Vercel dodaj:
```
DATABASE_URL=postgres://...
NODE_ENV=production
API_URL=https://twoja-app.vercel.app/api
```

#### Krok 5: Własna Domena (opcjonalnie)
1. Vercel: Settings → Domains
2. Dodaj: gruby.juraquest.pl
3. W panelu juraquest.pl dodaj CNAME:
   ```
   gruby → cname.vercel-dns.com
   ```

**GOTOWE!** Strona dostępna pod: `https://twoja-app.vercel.app`

---

## 🔧 Alternatywa: Docker + VPS

Jeśli chcesz pełną kontrolę:

### Dockerfile (już masz w projekcie)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000 3001
CMD ["npm", "start"]
```

### Deploy na VPS:
```bash
# Na serwerze:
docker-compose up -d
```

---

## ❌ CO NIE ZADZIAŁA

### NIE PRÓBUJ:
- ❌ `output: 'export'` - Twój projekt jest dynamiczny!
- ❌ Upload folderów na hosting współdzielony
- ❌ Statyczny HTML - potrzebujesz serwera Node.js
- ❌ PHP hosting - to nie zadziała

---

## 📞 Potrzebujesz Pomocy?

### Sprawdźmy Twój Obecny Serwer:
```bash
ssh srv90026@h61.seohost.pl -p 57185
node --version
```

**Jeśli nie ma Node.js** → Musisz użyć Vercel lub VPS

**Jeśli ma Node.js** → Mogę pomóc w konfiguracji

---

## 🎯 Następny Krok - Co Wybierasz?

1. **Vercel (POLECAM)** - Najłatwiejsze, darmowe, 15 minut
2. **VPS** - Pełna kontrola, ~30 zł/m, 2h setup
3. **Sprawdź obecny serwer** - Może ma Node.js?

**Powiedz którą opcję wybierasz, a pomogę w każdym kroku!** 🚀
