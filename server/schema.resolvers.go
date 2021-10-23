package todo

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"todo/ent"
)

func (r *mutationResolver) AddTodo(ctx context.Context, text string) (*ent.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) SetFilter(ctx context.Context, filter *Filter) (Filter, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ToggleCompleted(ctx context.Context, id string) (*ent.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) AllTodos(ctx context.Context) ([]*ent.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *todoResolver) ID(ctx context.Context, obj *ent.Todo) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Todo returns TodoResolver implementation.
func (r *Resolver) Todo() TodoResolver { return &todoResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
