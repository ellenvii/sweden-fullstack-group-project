export type AuthenticatedUser = {
	id: number
	email: string
	fullName: string
	role: "student" | "landlord" | "admin"
}

export type LoginRequest = {
	email: string
	password: string
}

class AuthApi {
	async login(credentials: LoginRequest) {
		// Later: return axios.post<AuthenticatedUser>("/api/auth/login", credentials).then((res) => res.data)
		return {
			id: 1,
			email: credentials.email,
			fullName: "Demo Student",
			role: "student",
		} satisfies AuthenticatedUser
	}
}

export default new AuthApi()
