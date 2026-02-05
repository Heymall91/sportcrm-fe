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
        LESSONS: "/lessons",
        STUDENTS: "/students",
        CREATE_STUDENTS: "/create-students",
        EDIT_STUDENTS: "/edit-students/:id",
        STATISTICS: "/statistics",
        PAYMENTS: "/payments",
        CLUBS: "/clubs",
        LOCATIONS: "/locations",
        SETTINGS: "/settings"
    }
} as const;

export const idRoute = {
    editStudent: (id: string) => `/edit-students/${id}`,
};