import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}
	async getHello(): Promise<User[]> {
		const users: User[] = await this.prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

		return users
	}
	async create(): Promise<User> {
		const users = await this.prisma.user.create({
			data: {
				email: 'test@test.com',
				name: `test${new Date().toISOString()}`
			}
		})

		return users
	}
}
