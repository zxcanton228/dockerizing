import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}
	async getUsers(): Promise<User[]> {
		const users: User[] = await this.prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

		return users
	}
	async getOne(id: string): Promise<User> {
		const user = await this.prisma.user.findUnique({ where: { id } })
		if (!user) throw new NotFoundException('User not found')
		return user
	}
	async createUser(): Promise<User> {
		const users = await this.prisma.user.create({
			data: {
				email: 'test@test.com',
				name: `test${new Date().toISOString()}`
			}
		})

		return users
	}
}
