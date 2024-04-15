import { Suspense } from "react";
import Link from "next/link";
import { getUserAsana } from "@/services/asana/user";

export const runtime = "edge";

export default async function Asana() {
	const user = await getUserAsana();

	if (!user.data) {
		return <div>No user</div>;
	}

	return (
		<Suspense fallback={"loading"}>
			<main className="flex flex-col items-center justify-center">
				<section>
					user: <span className="ml-2 text-lg font-bold text-slate-700">{user.data.name}</span>
				</section>
				<section>
					workspaces:
					{user.data.workspaces.map((item) => (
						<section
							className="ml-2 text-lg font-bold text-slate-700 hover:text-slate-400"
							key={item.name}
						>
							<Link href={`/asana/workspace/${item.gid}`}>{item.name}</Link>
						</section>
					))}
				</section>
			</main>
		</Suspense>
	);
}
