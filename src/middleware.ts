import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { type NextRequest } from "next/server";

export default withMiddlewareAuthRequired({
	returnTo(req: NextRequest) {
		return `${req.nextUrl.basePath}${req.nextUrl.pathname}`;
	},
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"],
};
