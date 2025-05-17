import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService),
		port = config.get<number>('PORT'),
		mode = config.get<string>('NODE_ENV'),
		clientUrl = config.get<string>('CLIENT_URL')

	if (!port || !mode || !clientUrl) throw new Error('Missing required environment variables')

	app.setGlobalPrefix('/api')
	app.enableCors({
		credentials: true,
		exposedHeaders: 'set-cookie',
		origin: [clientUrl]
	})
	app.use(helmet())

	await app.listen(port || 4200, () =>
		console.log(`🚀 Server is running on port ${port} in ${mode} mode`)
	)
}
bootstrap().catch(console.error)
