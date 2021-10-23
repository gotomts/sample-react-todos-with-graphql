// Code generated by entc, DO NOT EDIT.

package ent

import (
	"github.com/google/uuid"
	"github.com/gotomts/sample-react-todos-with-graphql/server/ent/schema"
	"github.com/gotomts/sample-react-todos-with-graphql/server/ent/todo"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	todoFields := schema.Todo{}.Fields()
	_ = todoFields
	// todoDescCompleted is the schema descriptor for completed field.
	todoDescCompleted := todoFields[2].Descriptor()
	// todo.DefaultCompleted holds the default value on creation for the completed field.
	todo.DefaultCompleted = todoDescCompleted.Default.(bool)
	// todoDescID is the schema descriptor for id field.
	todoDescID := todoFields[0].Descriptor()
	// todo.DefaultID holds the default value on creation for the id field.
	todo.DefaultID = todoDescID.Default.(func() uuid.UUID)
}