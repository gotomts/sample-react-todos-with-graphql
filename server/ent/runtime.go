// Code generated by entc, DO NOT EDIT.

package ent

import (
	"todo/ent/schema"
	"todo/ent/todo"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	todoFields := schema.Todo{}.Fields()
	_ = todoFields
	// todoDescCompleted is the schema descriptor for completed field.
	todoDescCompleted := todoFields[1].Descriptor()
	// todo.DefaultCompleted holds the default value on creation for the completed field.
	todo.DefaultCompleted = todoDescCompleted.Default.(bool)
}
