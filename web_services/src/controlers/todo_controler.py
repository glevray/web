from flask_classful import FlaskView, route
from flask import jsonify
from flask import abort
from flask import request
#cross origine ajouter je 05/08/2020
from flask_cors import cross_origin
import services.todo_service as todoService
from dto.todo_dto import TodoDto

# création d'une classe qui hérite de FlaskView


class TodosControler(FlaskView):
    # définition d'une route de base
    route_base = '/api/todos/'

    # dééfinition de l'extension de la route de base
    @route('/')
    def get_todos(self):  # definition d'une méthode pour récupérer les todos depuis le service
        todos = todoService.get_todos()  # todos récupérer depuis le service
        return jsonify(todos)

    @route('/<int:todo_id>')
    def get_todo_by_id(self, todo_id):
        todo = todoService.get_todo_by_id(todo_id)
        return jsonify(todo)

    # Afin d'empecher l'erreur de croos-reference: 
    # acces to fetch at ......... from origin 'null' has been blocked by CORS
    @route('/inscription', methods=['POST','OPTIONS'])
    @cross_origin(origin='*',headers=['Content-Type','Authorization'])
    def create_todo(self):
        firstname = request.json['firstname']
        lastname = request.json['lastname']
        birthdate = request.json['birthdate']
        todo = TodoDto(firstname,lastname,birthdate)
        return todoService.create_todo(todo)

    @route('/<int:todo_id>', methods=['PUT'])
    def update_todo(self, todo_id):
        todo = todoService.update_todo(todo_id)
        return jsonify(todo)

    @route('/<int:todo_id>', methods=['DELETE'])
    def delete_todo(self, todo_id):
        result = todoService.delete_todo(todo_id)
        return jsonify(result)
