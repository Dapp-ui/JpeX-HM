
const base = "https://jpex-backend.onrender.com"
export function api(method: string, resource: string, data?: Record<string, unknown>) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
