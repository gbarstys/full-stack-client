export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH_TOKEN_IN_LOCAL_STORAGE?: string;
      REACT_APP_API_SERVER_ADDRESS?: string;
      REACT_APP_API_SERVER_ADDRESS_NEW?: string;
    }
  }
}
