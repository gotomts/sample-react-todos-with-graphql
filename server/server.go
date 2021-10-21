package main

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/gorilla/websocket"
	"github.com/gotomts/sample-react-todos-with-graphql/server/graph"
	"github.com/gotomts/sample-react-todos-with-graphql/server/graph/generated"
	"github.com/rs/cors"
)

const defaultPort = "8080"

func main() {
	router := chi.NewRouter()
	port := defaultPort

	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:"+port, "http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))
	srv.AddTransport(&transport.Websocket{
			Upgrader: websocket.Upgrader{
					CheckOrigin: func(r *http.Request) bool {
						return r.Host == "example.org"
					},
					ReadBufferSize:  1024,
					WriteBufferSize: 1024,
			},
	})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		panic(err)
	}
}
