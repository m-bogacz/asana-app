import { handleAuth } from "@auth0/nextjs-auth0";
export const runtime = "edge";
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const GET = handleAuth();
