export type User = {
	id: number;
	email: string;
	passwordHash: string;
	userName: string;
	avatarUrl?: string;
	createdAt: Date;
	lastLogin?: Date;
};

export type List = {
	id: number;
	list_name: string;
	created_by_user_id: number;
	created_at: Date;
	is_shared: boolean;
}

export type ListItem = {
	id: number;
	list_id: number;
	item_name: string;
	is_completed: boolean;
	assigned_to_user_id: number;
	created_at: Date;
}
