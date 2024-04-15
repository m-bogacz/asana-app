import { fetcher } from "@/api/fetcher";

export interface TasksEntity {
	data: Task[];
}

export interface Task {
	gid: string;
	completed: boolean;
	memberships: Membership[];
	name: string;
	permalink_url: string;
	projects: Project[];
}

export interface Membership {
	section: Section;
}

export interface Section {
	gid: string;
	name: string;
}
export interface Project {
	gid: string;
	name: string;
}

const opt_fields = "memberships.section.name,completed,name,permalink_url,projects.name";

export const getTasksForProject = async (project_gid: string): Promise<TasksEntity> => {
	return fetcher<TasksEntity>({
		endpoint: `/projects/${project_gid}/tasks?opt_fields=${opt_fields}`,
	});
};
