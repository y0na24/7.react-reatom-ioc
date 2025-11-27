export const ROUTES = {
  HOME: {
    path: "/",
    label: "Characters",
  },
  FAVORITES: {
    path: "/favorites",
    label: "Favorites",
  },
} as const;

export const getRoutes = () => Object.values(ROUTES);

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
