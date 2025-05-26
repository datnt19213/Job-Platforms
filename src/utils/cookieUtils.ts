import Cookies from "js-cookie";

export const CookieUtil = {
  set: (name: string, value: string, days?: number) => {
    Cookies.set(name, value, {
      expires: days,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });
  },

  get: (name: string): string | undefined => {
    return Cookies.get(name);
  },

  remove: (name: string) => {
    Cookies.remove(name, {path: "/"});
  },

  exists: (name: string): boolean => {
    return Cookies.get(name) !== undefined;
  },
};
