"use server";
import { fetcher } from "@/api/fetcher";

export interface Projects {
	data: Project[];
}

export interface Project {
	gid: string;
	name: string;
	resource_type: string;
	custom_field_settings: CustomFieldSetting[];
}
export interface CustomFieldSetting {
	gid: string;
	project: Project;
}

export const getProjectsForWorkspaces = async (workspace_gid: string): Promise<Projects> => {
	return fetcher<Projects>({
		endpoint: `/workspaces/${workspace_gid}/projects`,
	});
};
