

build:
	docker build --rm -t express-api-template .
run:
	docker run -t -p 7080:7080 express-api-template

gha_list:
	act -l

gha_build:
	act -j build

gha_pull_request:
	act pull_request