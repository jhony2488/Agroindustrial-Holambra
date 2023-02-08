/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REACT_APP_CLIENT_ID: string;
  readonly VITE_REACT_APP_PASSPORT_URL: string;
  readonly VITE_REACT_APP_PLATAFORMA_URL: string;
  readonly VITE_REACT_APP_PLATAFORMA_PROD_URL: string;
  readonly VITE_REACT_APP_MAPS_API_KEY: string;
  readonly VITE_REACT_APP_BASE_URL_MAPS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
