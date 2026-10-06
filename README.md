# 🕒 Pointeuse

Pointeuse web (badgeage début / fin de journée) pour une petite équipe, construite avec **Google Apps Script** + **Google Sheets**. Interface en français, thème sombre néon.

## ✨ Fonctionnalités

- 🟢 **Démarrer** / 🔴 **Terminer** sa journée en 1 clic, avec sélection de l'utilisateur
- 📜 **Historique** des pointages (date, action, durée)
- 📊 **Profil** : total de la semaine + totaux par jour
- 🧪 **Mock local** : testable sans aucun déploiement

## 🧱 Stack

| Couche | Techno |
|---|---|
| Front | HTML / CSS / JS vanilla — zéro dépendance |
| Back | Google Apps Script (`google.script.run`) |
| Données | Google Sheets |

## 📂 Structure

```
.
├── index.html            → page d'accueil ; logique UI inline, mock chargé en local uniquement
├── history.html          → fragment « historique » (servi côté Apps Script)
├── profile.html          → fragment « profil » (placeholder — rendu par loadProfilePage)
├── code.gs               → backend Apps Script (placeholder — à récupérer via `clasp pull`)
├── css/style.css         → thème sombre néon
└── js/simulateGAS.js     → simulateur de google.script.run pour le test local
```

## 🧪 Tester en local

Ouvrez `index.html` directement dans un navigateur (même en `file://`).
Le simulateur `js/simulateGAS.js` est chargé automatiquement quand `google.script.run` est absent — aucune configuration requise.

## 🚀 Déployer sur Apps Script

1. Créez un projet Apps Script sur [script.google.com](https://script.google.com)
2. Copiez-y `code.gs`, `index.html`, `history.html`, `profile.html`
3. Liez votre feuille de pointage (le script y écrit)
4. Dans **Déployer → Nouveau déploiement**, choisissez **Application Web**
5. À chaque modification, **redéployez une nouvelle version**

> ⚠️ **L'URL de déploiement est un secret** : elle vit dans le fichier local `infos` (exclu du dépôt via `.gitignore`), et ne doit pas être commitée.

## 🔒 Sécurité

- Secrets (URL de déploiement, ID de déploiement) exclus du dépôt
- Dépôt public : le code est lisible par tous — n'y positionnez **jamais** d'identifiants

## 🗺️ Roadmap

Issues identifiées en review, par priorité :

- [ ] **P0** Récupérer le backend réel dans `code.gs` (`clasp pull` depuis l'éditeur Apps Script)
- [ ] **P0** Redéployer une nouvelle version pour que la correction de page blanche passe en production
- [ ] **P1** `withFailureHandler` + états de chargement sur tous les appels serveur
- [ ] **P1** Anti-double-clic + validation d'état côté serveur (intégrité des pointages)
- [ ] **P1** Afficher l'état réel au chargement (`getLastAction`) et pouvoir reprendre
- [ ] **P1** Utilisateurs gérés côté serveur (fini le `<select>` codé en dur)
- [ ] **P2** Fuseau horaire unifié (`Session.getScriptTimeZone()`)
- [ ] **P2** Remplacer `document.write` ; échappement HTML systématique
- [ ] **P2** Manifeste `appsscript.json` explicite (scopes, timezone, accès web)

## 📄 Licence

[MIT](LICENSE)