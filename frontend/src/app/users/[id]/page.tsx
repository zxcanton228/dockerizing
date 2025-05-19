import type { Metadata } from 'next'
import { getUser, getUsers } from 'src/functions'
type TParams = {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
	const { id } = await params
	const { name, email } = await getUser(id)
	return {
		title: name,
		description: email,
		creator: name,
	}
}
export async function generateStaticParams() {
	const users = await getUsers()

	return users.map(user => ({
		id: user.id,
	}))
}

export default async function Page({ params }: TParams) {
	const { id } = await params
	const { name, email } = await getUser(id)
	return (
		<div>
			<div className='flex flex-col p-5 gap-4'>
				<h1>{name}</h1>
				<h2>{email}</h2>
			</div>
		</div>
	)
}
