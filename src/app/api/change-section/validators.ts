import { z } from "zod";

const SectionSchema = z.object({
	task_gid: z.string(),
	board_section_gid: z.string(),
});

export const changeSectionSchema = z.object({
	data: SectionSchema,
});
