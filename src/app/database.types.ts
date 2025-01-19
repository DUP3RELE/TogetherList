export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface User {
	id: number;
	email: string;
	passwordHash: string;
	userName: string;
	avatarUrl?: string;
	createdAt: Date;
	lastLogin?: Date;
}

export interface List {
	id: number;
	list_name: string;
	created_by_user_id: number;
	created_at: Date;
	is_shared: boolean;
}

export interface ListItem {
	id: number;
	name: string;
	users: string[];
	newContent: boolean;
	createdAt: Date;
}
