

build:
	docker build --rm -t express-api-template .
run:
	docker run -t -p 7080:7080 express-api-template