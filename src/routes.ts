export const ROUTES = {
    PUBLIC: {
        ROOT: '/',
        AUTH: '/auth',
        SIGN_IN: '/auth/sign-in',
        SIGN_UP: '/auth/sign-up',
        CALLBACK: '/auth/callback',
    },
    PRIVATE: {
        DASHBOARD: '/dashboard',
        PREVIOUS_EVENTS: "/previous-events",
        SESSIONS: "/sessions",
        STUDENTS: "/students",
        STATISTICS: "/statistics",
        PAYMENTS: "/payments",
        CLUBS: "/clubs",
        LOCATIONS: "/locations"
    }
} as const;