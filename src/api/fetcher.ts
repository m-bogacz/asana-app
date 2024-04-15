import { env } from "@/env";

type ExecuteRestApi<TBody = undefined> = {
	endpoint: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: TBody;
	headers?: HeadersInit;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
	server_url?: string;
};

export async function fetcher<TResult, TBody = undefined>({
	endpoint,
	body,
	method = "GET",
	cache = "no-store",
	next,
	headers,
	server_url = env.ASANA_URL_API,
}: ExecuteRestApi<TBody>): Promise<TResult> {
	try {
		const res = await fetch(`${server_url}${endpoint}`, {
			method,
			body: method !== "GET" && body ? JSON.stringify(body) : null,
			cache,
			next,
			headers: {
				...headers,
				Authorization: `Bearer ${env.ASANA_PERSONAL_ACCESS_TOKEN}`,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new TypeError(`REST API Error: ${res.statusText}`);
		}

		return (await res.json()) as TResult;
	} catch (err) {
		console.log(err);
		throw new TypeError("Failed to fetch issues");
	}
}
