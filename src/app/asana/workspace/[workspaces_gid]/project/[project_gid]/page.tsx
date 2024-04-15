import { Suspense } from "react";
import Link from "next/link";
import { getProjectByGid } from "@/services/asana/getProjectByGid";

export default async function Project({
	params,
}: {
	params: { workspaces_gid: string; project_gid: string };
}) {
	const { data: project } = await getProjectByGid(params.project_gid);

	return (
		<Suspense fallback={"loading"}>
			<main className="flex flex-col items-center justify-center">
				<header className="flex items-center justify-between  p-4 text-white">Project</header>
				<article>
					<h4 className="mb-2 font-bold">{project.name}</h4>

					<p className="mb-2 font-bold">gid: {project.gid}</p>
					<Link
						className="rounded border border-gray-400 bg-white px-4 py-1 font-semibold text-gray-800 shadow hover:bg-gray-100"
						href={`/asana/workspace/${params.workspaces_gid}/project/${project.gid}/tasks`}
					>
						Show task from this project
					</Link>
				</article>
			</main>
		</Suspense>
	);
}
