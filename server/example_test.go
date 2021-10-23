package main

import (
	"context"
	"fmt"
	"log"

	"entgo.io/ent/dialect"
	"github.com/gotomts/sample-react-todos-with-graphql/server/ent"
	_ "github.com/lib/pq"
)

func Example_Todo() {
	connStr := "user=root password=password host=localhost dbname=react_todos sslmode=disable"
	client, err := ent.Open(dialect.Postgres, connStr)
	if err != nil {
		log.Fatalf("failed opening connection to postgresql: %v", err)
	}
	defer client.Close()
	ctx := context.Background()
	// オートマイグレーションツールを実行する
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
	task1, err := client.Todo.Create().SetText("Add GraphQL Example").Save(ctx)
	if err != nil {
		log.Fatalf("failed creating a todo: %v", err)
	}
	fmt.Println(task1.Text, task1.Completed)
	// Output: Add GraphQL Example false
}
