import { Controller, Get, Param, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getHello(): Promise<User[]> {
		return this.appService.getUsers()
	}
	@Get('/users/:id')
	async getOne(@Param('id') id: string): Promise<User> {
		return this.appService.getOne(id)
	}

	@Post()
	async create(): Promise<User> {
		return this.appService.createUser()
	}
}
