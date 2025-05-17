import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

import 'dotenv/config'

const prisma = new PrismaClient()
const NUM_USERS = 100

async function main() {
	for (let i = 0; i < NUM_USERS; i++) {
		const email = faker.internet.email()
		const name = faker.person.firstName()

		const createdAt = faker.date.past({ years: 1 })

		const updatedAt = new Date(
			createdAt.getTime() + Math.random() * (new Date().getTime() - createdAt.getTime())
		)

		await prisma.user.create({
			data: {
				email,
				name,
				createdAt,
				updatedAt
			}
		})
	}
}

main()
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
	.then(() => {
		console.log(`Created ${NUM_USERS} users`)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
