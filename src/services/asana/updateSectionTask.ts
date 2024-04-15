import { type ProjectEntity } from "@/types/asana/project/types";
import { fetcher } from "@/api/fetcher";

export const updateSectionTask = async (
	task_gid: string,
	board_section_gid: string,
): Promise<ProjectEntity> => {
	return fetcher({
		method: "POST",
		endpoint: `/sections/${board_section_gid}/addTask`,
		body: { data: { task: task_gid } },
	});
};
