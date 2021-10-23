.PHONY: run
run:
	go run server.go

test:
	go test -cover -coverprofile cover.out

ent init:
	go run entgo.io/ent/cmd/ent init ${SCHEMA}