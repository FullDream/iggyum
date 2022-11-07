import { UserWithToken } from './user.interface'

export interface Login {
	email: string
	password: string
}

export interface Register extends Login {
	username: string
}

export interface UserAuthResponse {
	user: UserWithToken
}
