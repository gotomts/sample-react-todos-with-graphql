package todo

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"todo/ent"
)

func (r *mutationResolver) AddTodo(ctx context.Context, text string) (*ent.Todo, error) {
	return r.client.Todo.Create().SetText(text).Save(ctx)
}

func (r *mutationResolver) SetFilter(ctx context.Context, filter *Filter) (Filter, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ToggleCompleted(ctx context.Context, id int) (*ent.Todo, error) {
	todo, err := r.client.Todo.Get(ctx, id)
	if err != nil {
		panic(fmt.Errorf("failed get todo id:%v", id))
	}
	return r.client.Todo.UpdateOneID(id).SetCompleted(!todo.Completed).Save(ctx)
}

func (r *queryResolver) AllTodos(ctx context.Context) ([]*ent.Todo, error) {
	return r.client.Todo.Query().All(ctx)
}

func (r *queryResolver) Node(ctx context.Context, id int) (ent.Noder, error) {
	return r.client.Noder(ctx, id)
}

func (r *queryResolver) Nodes(ctx context.Context, ids []int) ([]ent.Noder, error) {
	return r.client.Noders(ctx, ids)
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
