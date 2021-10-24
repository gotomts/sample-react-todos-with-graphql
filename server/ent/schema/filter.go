package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

// Filter holds the schema definition for the Filter entity.
type Filter struct {
	ent.Schema
}

// Fields of the Filter.
func (Filter) Fields() []ent.Field {
	return []ent.Field{
		field.Enum("filter").Values("ALL", "ACTIVE", "COMPLETE").Default("ALL"),
	}
}

// Edges of the Filter.
func (Filter) Edges() []ent.Edge {
	return nil
}
