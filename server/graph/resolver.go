package graph

import "github.com/gotomts/sample-react-todos-with-graphql/server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	todos []*model.Todo
	filter *model.Filter
}
