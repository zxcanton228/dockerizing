build:
	docker-compose up -d --build
db: 
	docker-compose exec backend bun prisma db push
	docker-compose exec backend bun seed

up:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down -v