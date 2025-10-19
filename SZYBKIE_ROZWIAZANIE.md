# ⚡ SZYBKIE ROZWIĄZANIE - GitHub Logowanie

## 🎯 Problem: "Authentication failed"

GitHub wymaga tokena zamiast hasła. Zrobimy to ŁATWIEJ przez GitHub CLI.

---

## ✅ ROZWIĄZANIE - 3 Komendy (2 minuty):

### **Krok 1: Zainstaluj GitHub CLI**

W Terminalu wklej:
```bash
brew install gh
```

Poczekaj ~30 sekund (pobiera i instaluje).

---

### **Krok 2: Zaloguj się**

W Terminalu wklej:
```bash
gh auth login
```

**Odpowiedz na pytania:**

```
? What account do you want to log into?
→ Wybierz: GitHub.com (naciśnij Enter)

? What is your preferred protocol for Git operations?
→ Wybierz: HTTPS (naciśnij Enter)

? Authenticate Git with your GitHub credentials?
→ Wybierz: Yes (naciśnij Enter)

? How would you like to authenticate GitHub CLI?
→ Wybierz: Login with a web browser (naciśnij Enter)
```

**UWAGA:** Pokaże kod (np. `ABCD-1234`)

```
! First copy your one-time code: ABCD-1234
Press Enter to open github.com in your browser...
```

1. **SKOPIUJ KOD** (zaznacz i Cmd+C)
2. **Naciśnij Enter** (otwórzy przeglądarkę)
3. **Wklej kod w przeglądarce**
4. **Kliknij "Authorize"**
5. ✅ Zobaczysz: "✓ Authentication complete"

---

### **Krok 3: Wypchnij kod na GitHub**

Teraz w Terminalu:
```bash
git push -u origin main
```

**NIE ZAPYTA o hasło!** Po prostu wypchnie kod.

✅ **GOTOWE!**

---

## 📊 Co zobaczysz:

```
Enumerating objects: 145, done.
Counting objects: 100% (145/145), done.
Writing objects: 100% (145/145), 234.56 KiB | 12.34 MiB/s, done.
To https://github.com/mysnjwe/gruby.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Kod jest na GitHub!**

---

## 🔗 Sprawdź:

Otwórz w przeglądarce:
https://github.com/mysnjwe/gruby

Powinieneś zobaczyć wszystkie pliki!

---

## 📞 NASTĘPNY KROK:

Gdy zobaczysz "Branch 'main' set up to track..." napisz mi:

**"PUSHED!"**

I przejdziemy do wdrożenia na Vercel! 🚀
