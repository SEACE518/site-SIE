/// <reference types="vite/client" />

// Vite déclare les assets en minuscules (ex: `*.jpg`), mais sur Windows on peut importer
// des fichiers avec extension en majuscules (ex: `IMG_6657.JPG`).
// On ajoute donc les variantes en majuscules pour éviter une erreur TypeScript.
declare module '*.JPG' {
  const src: string
  export default src
}

declare module '*.JPEG' {
  const src: string
  export default src
}
