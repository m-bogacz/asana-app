export interface ProjectEntity {
	data: Project;
}

export interface Project {
	gid: string;
	archived: boolean;
	color: string;
	completed: boolean;
	completed_at: any;
	created_at: string;
	current_status: any;
	current_status_update: any;
	custom_fields: any[];
	custom_field_settings: any[];
	default_access_level: string;
	default_view: string;
	due_on: any;
	due_date: any;
	followers: Follower[];
	members: Member[];
	minimum_access_level_for_customization: string;
	minimum_access_level_for_sharing: string;
	modified_at: string;
	name: string;
	notes: string;
	owner: Owner;
	permalink_url: string;
	public: boolean;
	resource_type: string;
	start_on: any;
	team: Team;
	workspace: Workspace;
}

export interface Follower {
	gid: string;
	name: string;
	resource_type: string;
}

export interface Member {
	gid: string;
	name: string;
	resource_type: string;
}

export interface Owner {
	gid: string;
	name: string;
	resource_type: string;
}

export interface Team {
	gid: string;
	name: string;
	resource_type: string;
}

export interface Workspace {
	gid: string;
	name: string;
	resource_type: string;
}
