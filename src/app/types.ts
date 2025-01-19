export type User = {
	id: number;
	email: string;
	passwordHash: string;
	userName: string;
	avatarUrl?: string;
	createdAt: Date;
	lastLogin?: Date;
};
