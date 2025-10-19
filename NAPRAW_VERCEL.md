# 🔧 NAPRAWA - Vercel Root Directory

## ⚠️ Problem:
Vercel próbuje budować z głównego folderu zamiast z `apps/web`.

## ✅ ROZWIĄZANIE - Zmień Root Directory w Vercel (2 minuty):

### **Krok 1: Wejdź w Ustawienia**

1. Otwórz: https://vercel.com
2. Kliknij projekt **"gruby"**
3. Kliknij **"Settings"** (menu górne)

---

### **Krok 2: Zmień Root Directory**

1. W lewym menu kliknij **"General"**
2. Przewiń w dół do sekcji **"Root Directory"**
3. Kliknij **"Edit"** (lub przycisk edycji)
4. W polu **Root Directory** wpisz:
   ```
   apps/web
   ```
5. Kliknij **"Save"**

---

### **Krok 3: Sprawdź Build & Development Settings**

Upewnij się że masz:

```
Framework Preset: Next.js
Build Command: (puste lub domyślne)
Output Directory: (puste lub domyślne)
Install Command: npm install
Development Command: npm run dev
```

**Zostaw wszystko domyślne!** Vercel automatycznie wykryje Next.js.

---

### **Krok 4: Redeploy**

1. Wróć do **"Deployments"**
2. Kliknij **"..." (trzy kropki)** przy najnowszym deploymencie
3. Wybierz **"Redeploy"**
4. Potwierdź
5. **Czekaj 2-4 minuty** ⏳

---

## 📊 Co zobaczysz tym razem:

```
▲ Vercel
Root Directory: apps/web
✓ Installing dependencies in apps/web
✓ Building Next.js application
✓ Linting passed
✓ Type checking passed
✓ Optimizing pages
✅ Deployment Ready!
```

---

## 🎉 GOTOWE!

Gdy zobaczysz ✅:
1. Kliknij link do strony
2. **DZIAŁA!** 🎊

---

## 📞 NAPISZ MI:

**"Root directory zmieniony"** - gdy zapiszesz ustawienia

**"DZIAŁA!"** - gdy strona będzie live! 🚀

---

## 🆘 Jeśli dalej błąd:

Wklej tu CAŁY komunikat błędu z logów - naprawię!
