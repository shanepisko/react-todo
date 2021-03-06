var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchText Reducer', () => {
      it('should t searchText', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'dog'
        };

        var res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toEqual(action.searchText);
      });
    });

    describe('showCompelted Reducer', () => {
      it('should t searchText', () => {
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = reducers.toggleShowCompletedReducer(df(false), df(action));

        expect(res).toEqual(true);
      });
    });

    describe('todosReducer', () => {
      it('should add new todo', () => {
          var action = {
            type: 'ADD_TODO',
            text: 'walk the dog'
          };

          var res = reducers.todosReducer(df([]),df(action));

          expect(res.length).toEqual(1);

          expect(res[0].text).toEqual(action.text);
      });
      it('should toggle todo', () => {
        var todos = [
          {
            id: 123,
            text: 'something',
            completed: true,
            createdAt: 123,
            completedAt: 125
          }
        ];
          var action = {
            type: 'TOGGLE_TODO',
            id: 123
          };

          var res = reducers.todosReducer(df(todos),df(action));

          expect(res[0].completed).toBe(false);
          expect(res[0].completedAt).toBe(undefined);
      });

      if('should add existing todos', () => {
        var todos = [
          {
            id: 111,
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt:33000
          }
        ];

        var action = {
          type: 'ADD_TODOS',
          todos
        };

        var res = reduers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);
      });
    });
});
