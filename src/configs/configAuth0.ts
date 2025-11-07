import { ROUTES } from "../routes.ts";

export const configAuth0 = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirectUri: `${window.location.origin}${ROUTES.PRIVATE.DASHBOARD}`
}