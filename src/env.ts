import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		YOUTRACK_URL: z.string().url(),
		YOUTRACK_TOKEN: z.string().min(1),

		ASANA_SERVER_URL: z.string().url(),
		ASANA_URL_API: z.string().url(),
		ASANA_PERSONAL_ACCESS_TOKEN: z.string().min(1),
		ASANA_CLIENT_ID: z.string().min(1),
		ASANA_CLIENT_SECRET: z.string().min(1),

		AUTH0_SECRET: z.string().min(1),
		AUTH0_BASE_URL: z.string().url(),
		AUTH0_ISSUER_BASE_URL: z.string().url(),
		AUTH0_CLIENT_ID: z.string().min(1),
		AUTH0_CLIENT_SECRET: z.string().min(1),

		ASANA_BOARD_SECTION_OPEN_GID: z.string().min(1),
		ASANA_BOARD_SECTION_IN_PROGRESS_GID: z.string().min(1),
		ASANA_BOARD_SECTION_WAITING_GID: z.string().min(1),
		ASANA_BOARD_SECTION_MERGE_REQUEST_GID: z.string().min(1),
		ASANA_BOARD_SECTION_DONE_GID: z.string().min(1),
		ASANA_BOARD_SECTION_CLOSED_GID: z.string().min(1),
	},

	client: {},

	runtimeEnv: {
		YOUTRACK_TOKEN: process.env.YOUTRACK_TOKEN,
		YOUTRACK_URL: process.env.YOUTRACK_URL,

		//Asana
		ASANA_SERVER_URL: process.env.ASANA_SERVER_URL,
		ASANA_URL_API: process.env.ASANA_URL_API,
		ASANA_PERSONAL_ACCESS_TOKEN: process.env.ASANA_PERSONAL_ACCESS_TOKEN,
		ASANA_CLIENT_ID: process.env.ASANA_CLIENT_ID,
		ASANA_CLIENT_SECRET: process.env.ASANA_CLIENT_SECRET,

		// 0auth
		AUTH0_SECRET: process.env.AUTH0_SECRET,
		AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
		AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,

		// Board sectionsASANA_
		ASANA_BOARD_SECTION_OPEN_GID: process.env.ASANA_BOARD_SECTION_OPEN_GID,
		ASANA_BOARD_SECTION_IN_PROGRESS_GID: process.env.ASANA_BOARD_SECTION_IN_PROGRESS_GID,
		ASANA_BOARD_SECTION_WAITING_GID: process.env.ASANA_BOARD_SECTION_WAITING_GID,
		ASANA_BOARD_SECTION_MERGE_REQUEST_GID: process.env.ASANA_BOARD_SECTION_MERGE_REQUEST_GID,
		ASANA_BOARD_SECTION_DONE_GID: process.env.ASANA_BOARD_SECTION_DONE_GID,
		ASANA_BOARD_SECTION_CLOSED_GID: process.env.ASANA_BOARD_SECTION_CLOSED_GID,
	},
});
