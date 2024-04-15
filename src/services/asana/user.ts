import { fetcher } from "@/api/fetcher";

const params = `users/me`;
const query = `opt_fields=email,workspaces,name,workspaces.name`;

export type GetUserAsanaResponse = {
	data: {
		gid: string;
		email: string;
		name: string;
		photo: null;
		workspaces: {
			gid: string;
			name: string;
		}[];
	};
};

export const getUserAsana = async (): Promise<GetUserAsanaResponse> => {
	return fetcher<GetUserAsanaResponse>({
		endpoint: `/${params}?${query}`,
	});
};
