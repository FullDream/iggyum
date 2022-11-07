export interface BaseUser {
	username: string
	bio?: string
	image: string
}

export interface Profile extends BaseUser {
	following: boolean
}

export interface UserWithToken extends BaseUser {
	token: string
}
