import axios from 'axios'
import { API_URL } from './constants'
import { IUser } from './types'

export async function getUser(id: string): Promise<IUser> {
	const { data } = await axios.get<IUser>(`${API_URL}/users/${id}`)
	return data
}
export async function getUsers(): Promise<IUser[]> {
	const { data } = await axios.get<IUser[]>(`${API_URL}/`)
	return data
}
