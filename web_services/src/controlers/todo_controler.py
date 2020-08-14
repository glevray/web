from flask_classful import FlaskView, route
from flask import jsonify
from flask import abort
from flask import request
#cross origine ajouter je 05/08/2020
from flask_cors import cross_origin
import services.todo_service as todoService
from dto.todo_dto import UserDto,IdentDto


# création d'une classe qui hérite de FlaskView


class TodosControler(FlaskView):
    # définition d'une route de base
    route_base = '/api/todos/'

    # dééfinition de l'extension de la route de base
    @route('/')
    def get_users(self):  # definition d'une méthode pour récupérer les todos depuis le service
        result = todoService.get_users()  # todos récupérer depuis le service
        return jsonify(result)

    @route('/administration')
    def get_comptes(self):  # definition d'une méthode pour récupérer les todos depuis le service
        result = todoService.get_comptes()  # todos récupérer depuis le service
        return jsonify(result)

    @route('/<int:todo_id>')
    def get_user_by_id(self, todo_id):
        result = todoService.get_user_by_id(todo_id)
        return jsonify(result)

    # Afin d'empecher l'erreur de croos-reference: 
    # acces to fetch at ......... from origin 'null' has been blocked by CORS
    @route('/inscription', methods=['POST','OPTIONS'])
    @cross_origin(origin='*',headers=['Content-Type','Authorization'])
    def create_user(self):
        firstname = request.json['firstname']
        lastname = request.json['lastname']
        birthdate = request.json['birthdate']
        userdto = UserDto(firstname,lastname,birthdate)
        email = request.json['email']
        identifiant = request.json['identifiant']
        motdepasse = request.json['motdepasse']
        identdto = IdentDto(email,identifiant,motdepasse)
        return todoService.create_user(userdto,identdto)

    @route('/<int:todo_id>', methods=['PUT'])
    def update_user(self, todo_id):
        result = todoService.update_user(todo_id)
        return jsonify(result)

    # methode de suppression d'un utilisateur et de son identifiant en meme tps
    # retourne null si non trouvé
    @route('/suppression', methods=['DELETE'])
    def delete_user(self):
        todo_id = request.json['identifiant']
        result = todoService.delete_user(todo_id)
        return jsonify(result)


    @route('/connexion', methods=['POST','OPTIONS'])
    @cross_origin(origin='*',headers=['Content-Type','Authorization'])
    def create_connexion(self):   
        email = ""
        identifiant = request.json['identifiant']
        motdepasse = request.json['motdepasse']
        identdto = IdentDto(email,identifiant,motdepasse)
        retour=todoService.create_connexion(identdto)
        
        if retour == None or retour.motdepasse != motdepasse:
            result = False
        else:
            result = True

        return jsonify(result)
        

