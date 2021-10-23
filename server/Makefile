.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down

.PHONY: run
run:
	go run server.go

ent init:
	go run entgo.io/ent/cmd/ent init ${SCHEMA}