/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextRequest, type NextResponse } from "next/server";
import { changeSectionSchema } from "./validators";
import { updateSectionTask } from "@/services/asana/updateSectionTask";

export const POST = async function (req: NextRequest, res: NextResponse) {
	let secret = "";
	if (req.headers["x-hook-secret"]) {
		console.log("This is a new webhook");
		secret = req.headers["x-hook-secret"];
		res.headers.append("X-Hook-Secret", secret);
	}

	try {
		const bodyRaw = await req.json();
		const body = changeSectionSchema.parse(bodyRaw);

		const { task_gid, board_section_gid } = body.data;

		await updateSectionTask(task_gid, board_section_gid);
	} catch (error) {
		console.log(error);
	}

	return new Response(null, { status: 200 });
};
