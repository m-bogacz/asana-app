import { env } from "@/env";

export const ASANA_BOARD_SECTION = {
	OPEN: {
		gid: env.ASANA_BOARD_SECTION_OPEN_GID,
		name: "Open",
		resource_type: "section",
	},
	IN_PROGRESS: {
		gid: env.ASANA_BOARD_SECTION_IN_PROGRESS_GID,
		name: "In Progress",
		resource_type: "section",
	},
	WAITING: {
		gid: env.ASANA_BOARD_SECTION_WAITING_GID,
		name: "Waiting",
		resource_type: "section",
	},
	MERGE_REQUEST: {
		gid: env.ASANA_BOARD_SECTION_MERGE_REQUEST_GID,
		name: "Merge Request",
		resource_type: "section",
	},
	DONE: {
		gid: env.ASANA_BOARD_SECTION_DONE_GID,
		name: "Done",
		resource_type: "section",
	},
	CLOSED: {
		gid: env.ASANA_BOARD_SECTION_CLOSED_GID,
		name: "Closed",
		resource_type: "section",
	},
};
