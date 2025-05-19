build:
	docker-compose up -d --build
db: 
	docker-compose exec backend bun prisma db push
	docker-compose exec backend bun seed

back:
	docker-compose up backend database -d --build 
front:
	docker-compose up frontend nginx -d --build 
	


up:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down -v