import { Database } from "./database.types";

export type Tables<T extends keyof Database["public"]["Tables"]> =
	Database["public"]["Tables"][T]["Row"];

export type InsertTables<T extends keyof Database["public"]["Tables"]> =
	Database["public"]["Tables"][T]["Insert"];

export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
	Database["public"]["Tables"][T]["Update"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
	Database["public"]["Enums"][T];

export type User = {
	id: number;
	email: string;
	passwordHash: string;
	userName: string;
	avatarUrl?: string;
	createdAt: Date;
	lastLogin?: Date;
};

export type Lists = {
	id: number;
	list_name: string;
	created_by_user_id: number;
	created_at: Date;
	is_shared: boolean;
};

export type ListItem = {
	id: number;
	list_id: number;
	item_name: string;
	is_completed: boolean;
	assigned_to_user_id: number;
	created_at: Date;
};
