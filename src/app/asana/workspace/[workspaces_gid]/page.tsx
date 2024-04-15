import { Suspense } from "react";
import Link from "next/link";
import { getProjectsForWorkspaces } from "@/services/asana/getProjectsForWorkspaces";

export default async function Workspace({ params }: { params: { workspaces_gid: string } }) {
	const projects = await getProjectsForWorkspaces(params.workspaces_gid);

	return (
		<Suspense fallback={"loading"}>
			<main className="flex flex-col items-center justify-center">
				<article>
					Moje projekty:
					<ul>
						{projects.data.map((project, index) => (
							<li key={project.gid} className="font-bold">
								<span>{index + 1}:</span>

								<Link
									className="hover:text-slate-400"
									href={`/asana/workspace/${params.workspaces_gid}/project/${project.gid}`}
								>
									{project.name}
								</Link>
							</li>
						))}
					</ul>
				</article>
			</main>
		</Suspense>
	);
}
