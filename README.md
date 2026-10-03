# cshautsnogent
Conseil syndical des hauts Nogent

## Arborescnce :

```text
src/
 
├── components/
│ ├── Header.astro
│ ├── Footer.astro
│ ├── Navigation.astro
│
├── layouts/
│ └── MainLayout.astro
│
├── pages/
│ ├── index.astro
│ ├── actualites.astro
│ ├── travaux.astro
│ ├── incidents.astro
│ ├── documents.astro
│ ├── ag.astro
│ └── contact.astro
│
└── content/
├── actualites/
├── travaux/
├── incidents/
└── decisions-ag/
```

## Accessibilité :
```text
landmarks HTML natifs ;
liens d'évitement ;
contraste élevé ;
navigation clavier ;
thème sombre natif ;
respect systématique des critères RGAA.
```

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
