export const config = {
    configApi: {
        apiBaseUrl: import.meta.env.VITE_SERVERHOST,
    },
    configAuth0: {
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI, 
        audience: import.meta.env.VITE_AUTH0_AUDIENCE
    }
}