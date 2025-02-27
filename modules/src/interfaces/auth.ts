import { User } from "./user";

export interface LoginCredentials {
	username: string;
	contrasenia: string;
}

export interface LoginResponse {
	token: string;
	user: User;
}

// export interface ApiError {
// 	message: string;
// 	status: number;
// }

// export interface ApiResponse<T> {
// 	data: T;
// 	message: string;
// }
