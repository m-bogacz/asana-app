import { fetcher } from "@/api/fetcher";
import { type ProjectEntity } from "@/types/asana/project/types";

export const getProjectByGid = async (project_gid: string): Promise<ProjectEntity> => {
	return fetcher<ProjectEntity>({
		endpoint: `/projects/${project_gid}`,
	});
};
