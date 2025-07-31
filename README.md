# Portfolio - Valentin Joanne

Portfolio moderne développé avec Next.js, TypeScript, Tailwind CSS et shadcn/ui.

## Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes

## Fonctionnalités

- 🌙 Mode sombre/clair avec toggle
- 📱 Design responsive
- ✨ Animations avec Framer Motion
- 🎨 Interface moderne avec shadcn/ui
- ⚡ Performance optimisée

## Installation

1. Cloner le projet :
```bash
git clone <url-du-repo>
cd portfolio
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Lance ESLint

## Structure du projet

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts
```

## Personnalisation

Le portfolio est entièrement personnalisable :

- Modifiez le contenu dans `src/app/page.tsx`
- Ajustez les styles dans `src/app/globals.css`
- Personnalisez les couleurs dans `tailwind.config.ts`
- Ajoutez de nouveaux composants dans `src/components/`

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou tout autre plateforme supportant Next.js.

```bash
npm run build
``` 