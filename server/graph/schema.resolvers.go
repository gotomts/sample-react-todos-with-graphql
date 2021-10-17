package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/gotomts/sample-react-todos-with-graphql/server/graph/generated"
	"github.com/gotomts/sample-react-todos-with-graphql/server/graph/model"
)

func (r *mutationResolver) AddTodo(ctx context.Context, text string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) SetFilter(ctx context.Context, filter *model.Filter) (model.Filter, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ToggleCompleted(ctx context.Context, id string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) AllTodos(ctx context.Context) ([]*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
