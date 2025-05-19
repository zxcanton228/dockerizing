import Link from 'next/link'
import { getUsers } from 'src/functions'

export default async function Home() {
	const users = await getUsers()
	return (
		<div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<ul className='flex flex-wrap gap-5'>
				{users.map(({ id, name }, i) => (
					<li>
						<Link href={`/users/${id}`} key={id}>
							{i + 1}: {name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
