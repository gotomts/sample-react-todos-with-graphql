// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"
	"todo/ent/predicate"
	"todo/ent/todo"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
)

// TodoUpdate is the builder for updating Todo entities.
type TodoUpdate struct {
	config
	hooks    []Hook
	mutation *TodoMutation
}

// Where appends a list predicates to the TodoUpdate builder.
func (tu *TodoUpdate) Where(ps ...predicate.Todo) *TodoUpdate {
	tu.mutation.Where(ps...)
	return tu
}

// SetText sets the "text" field.
func (tu *TodoUpdate) SetText(s string) *TodoUpdate {
	tu.mutation.SetText(s)
	return tu
}

// SetNillableText sets the "text" field if the given value is not nil.
func (tu *TodoUpdate) SetNillableText(s *string) *TodoUpdate {
	if s != nil {
		tu.SetText(*s)
	}
	return tu
}

// ClearText clears the value of the "text" field.
func (tu *TodoUpdate) ClearText() *TodoUpdate {
	tu.mutation.ClearText()
	return tu
}

// SetCompleted sets the "completed" field.
func (tu *TodoUpdate) SetCompleted(b bool) *TodoUpdate {
	tu.mutation.SetCompleted(b)
	return tu
}

// SetNillableCompleted sets the "completed" field if the given value is not nil.
func (tu *TodoUpdate) SetNillableCompleted(b *bool) *TodoUpdate {
	if b != nil {
		tu.SetCompleted(*b)
	}
	return tu
}

// Mutation returns the TodoMutation object of the builder.
func (tu *TodoUpdate) Mutation() *TodoMutation {
	return tu.mutation
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (tu *TodoUpdate) Save(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(tu.hooks) == 0 {
		affected, err = tu.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*TodoMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			tu.mutation = mutation
			affected, err = tu.sqlSave(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(tu.hooks) - 1; i >= 0; i-- {
			if tu.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = tu.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, tu.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// SaveX is like Save, but panics if an error occurs.
func (tu *TodoUpdate) SaveX(ctx context.Context) int {
	affected, err := tu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (tu *TodoUpdate) Exec(ctx context.Context) error {
	_, err := tu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (tu *TodoUpdate) ExecX(ctx context.Context) {
	if err := tu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (tu *TodoUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   todo.Table,
			Columns: todo.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: todo.FieldID,
			},
		},
	}
	if ps := tu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := tu.mutation.Text(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: todo.FieldText,
		})
	}
	if tu.mutation.TextCleared() {
		_spec.Fields.Clear = append(_spec.Fields.Clear, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Column: todo.FieldText,
		})
	}
	if value, ok := tu.mutation.Completed(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeBool,
			Value:  value,
			Column: todo.FieldCompleted,
		})
	}
	if n, err = sqlgraph.UpdateNodes(ctx, tu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{todo.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return 0, err
	}
	return n, nil
}

// TodoUpdateOne is the builder for updating a single Todo entity.
type TodoUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *TodoMutation
}

// SetText sets the "text" field.
func (tuo *TodoUpdateOne) SetText(s string) *TodoUpdateOne {
	tuo.mutation.SetText(s)
	return tuo
}

// SetNillableText sets the "text" field if the given value is not nil.
func (tuo *TodoUpdateOne) SetNillableText(s *string) *TodoUpdateOne {
	if s != nil {
		tuo.SetText(*s)
	}
	return tuo
}

// ClearText clears the value of the "text" field.
func (tuo *TodoUpdateOne) ClearText() *TodoUpdateOne {
	tuo.mutation.ClearText()
	return tuo
}

// SetCompleted sets the "completed" field.
func (tuo *TodoUpdateOne) SetCompleted(b bool) *TodoUpdateOne {
	tuo.mutation.SetCompleted(b)
	return tuo
}

// SetNillableCompleted sets the "completed" field if the given value is not nil.
func (tuo *TodoUpdateOne) SetNillableCompleted(b *bool) *TodoUpdateOne {
	if b != nil {
		tuo.SetCompleted(*b)
	}
	return tuo
}

// Mutation returns the TodoMutation object of the builder.
func (tuo *TodoUpdateOne) Mutation() *TodoMutation {
	return tuo.mutation
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (tuo *TodoUpdateOne) Select(field string, fields ...string) *TodoUpdateOne {
	tuo.fields = append([]string{field}, fields...)
	return tuo
}

// Save executes the query and returns the updated Todo entity.
func (tuo *TodoUpdateOne) Save(ctx context.Context) (*Todo, error) {
	var (
		err  error
		node *Todo
	)
	if len(tuo.hooks) == 0 {
		node, err = tuo.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*TodoMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			tuo.mutation = mutation
			node, err = tuo.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(tuo.hooks) - 1; i >= 0; i-- {
			if tuo.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = tuo.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, tuo.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX is like Save, but panics if an error occurs.
func (tuo *TodoUpdateOne) SaveX(ctx context.Context) *Todo {
	node, err := tuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (tuo *TodoUpdateOne) Exec(ctx context.Context) error {
	_, err := tuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (tuo *TodoUpdateOne) ExecX(ctx context.Context) {
	if err := tuo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (tuo *TodoUpdateOne) sqlSave(ctx context.Context) (_node *Todo, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   todo.Table,
			Columns: todo.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: todo.FieldID,
			},
		},
	}
	id, ok := tuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "ID", err: fmt.Errorf("missing Todo.ID for update")}
	}
	_spec.Node.ID.Value = id
	if fields := tuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, todo.FieldID)
		for _, f := range fields {
			if !todo.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != todo.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := tuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := tuo.mutation.Text(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: todo.FieldText,
		})
	}
	if tuo.mutation.TextCleared() {
		_spec.Fields.Clear = append(_spec.Fields.Clear, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Column: todo.FieldText,
		})
	}
	if value, ok := tuo.mutation.Completed(); ok {
		_spec.Fields.Set = append(_spec.Fields.Set, &sqlgraph.FieldSpec{
			Type:   field.TypeBool,
			Value:  value,
			Column: todo.FieldCompleted,
		})
	}
	_node = &Todo{config: tuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, tuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{todo.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return nil, err
	}
	return _node, nil
}
