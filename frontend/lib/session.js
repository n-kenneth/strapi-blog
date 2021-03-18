import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_SESSION,
    cookieName: "secure-session-cookie",
    cookieOptions: {
      secure: false,
    },
  });
}
