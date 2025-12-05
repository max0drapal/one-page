kocour-web/
├─ README.md               # Krátký popis + instrukce pro lokální spuštění
│
├─ index.html              # Hlavní a jediná stránka webu (one-page)
│
├─ /assets                   # Statické soubory (styly, skripty, obrázky)
│  ├─ /css
│  │  └─ style.css          # Vlastní CSS styly a responzivita
│  │
│  ├─ /js
│  │  ├─ main.js            # Inicializace, plynulé scrollování, navigace
│  │  └─ data-loader.js     # Skript pro načítání a vykreslení dat z JSONu
│  │
│  └─ /img                   # Veškerá grafika a obrázky
│     ├─ logo.png           # Logo pivovaru
│     ├─ hero-bg.jpg        # Obrázek na pozadí úvodní sekce
│     ├─ /piva              # Fotky jednotlivých piv (pro karty)
│     └─ /akce              # Plakáty/fotky pro sekci Akce
│
└─ /data                     # Zde budou uložena strukturovaná data
   ├─ piva.json             # Detailní data pro sekci "Výběr nápojů"
   ├─ akce.json             # Data o nadcházejících událostech
   └─ ubytovani.json        # Volitelné, data o dostupnosti nebo cenác
