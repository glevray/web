import repositories.todo_repo as todoRepo
from models.todo import Todo
import jsonpickle
# défintion d'une méthode pour récupérer les todos dans la base de données avec le repo


def get_todos():
    todos = todoRepo.get_todos()
    return jsonpickle.encode(todos)


def get_todo_by_id(todo_id):
    return todo_id


def create_todo(todoDto):
    todo = Todo(todoDto.firstname, todoDto.lastname, todoDto.birthdate)
    data = todoRepo.create_todo(todo)
    todoDto = jsonpickle.encode(data,max_depth=2)
    return todoDto


def update_todo(todo_id):
    return todo_id


def delete_todo(todo_id):
    return todo_id

