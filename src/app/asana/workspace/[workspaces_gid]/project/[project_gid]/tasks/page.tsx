import { Suspense } from "react";
import { ASANA_BOARD_SECTION } from "@/config/constant/asana";
import { getTasksForProject } from "@/services/asana/getTasksForProject";
import { updateSectionTask } from "@/services/asana/updateSectionTask";

export default async function Tasks({ params }: { params: { project_gid: string } }) {
	const { data: tasks } = await getTasksForProject(params.project_gid);

	async function onSubmit(formData: FormData, task_gid: string) {
		"use server";

		const asanaBoardSectionGid = formData.get("board_section_gid") as string;

		await updateSectionTask(task_gid, asanaBoardSectionGid);
	}

	return (
		<Suspense fallback={"loading"}>
			<main className="flex flex-col items-center justify-center">
				<ul className="flex flex-col gap-4">
					{tasks.map((task) => {
						return (
							<li key={task.gid}>
								<article className="rounded-sm border p-3">
									<section>{task.name}</section>
									<section>
										<span>task gid:</span>
										<span className="font-bold">{task.gid}</span>
									</section>
									<form
										action={async (formData) => {
											"use server";
											await onSubmit(formData, task.gid);
										}}
									>
										<label htmlFor="board_section_gid">Choose a section:</label>

										<select
											defaultValue={task.memberships[0].section.gid}
											name="board_section_gid"
											id="board_section_gid"
											className="mr-2 cursor-pointer border border-dashed py-1 font-bold"
										>
											{Object.values(ASANA_BOARD_SECTION).map((item) => {
												return (
													<option
														className="border border-dashed font-bold"
														key={item.gid}
														value={item.gid}
													>
														{item.name}
													</option>
												);
											})}
										</select>
										<button
											type="submit"
											className="rounded border border-slate-700 bg-slate-500 px-4 py-1 font-bold text-white hover:bg-slate-700"
										>
											change
										</button>
									</form>
								</article>
							</li>
						);
					})}
				</ul>
			</main>
		</Suspense>
	);
}
