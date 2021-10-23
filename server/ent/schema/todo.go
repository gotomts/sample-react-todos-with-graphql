package schema

import (
	"math/rand"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

// Todo holds the schema definition for the Todo entity.
type Todo struct {
	ent.Schema
}

// Fields of the Todo.
func (Todo) Fields() []ent.Field {
	rand.Seed(time.Now().UnixNano())
	return []ent.Field{
		field.String("text").Optional(),
		field.Bool("completed").Default(false),
	}
}

// Edges of the Todo.
func (Todo) Edges() []ent.Edge {
	return nil
}
