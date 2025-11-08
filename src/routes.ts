export const ROUTES = {
    PUBLIC: {
        ROOT: '/',
        AUTH: '/auth',
        SIGN_IN: '/auth/sign-in',
        SIGN_UP: '/auth/sign-up',
        CALLBACK: '/callback',
    },
    PRIVATE: {
        DASHBOARD: '/dashboard',
    }
} as const;