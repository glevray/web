from flask_classful import FlaskView, route
from flask import jsonify
from flask import abort
from flask import request
#cross origine ajouter je 05/08/2020
from flask_cors import cross_origin
import services.todo_service as todoService
from dto.todo_dto import UserDto,IdentDto
import re
import os

# création d'une classe qui hérite de FlaskView

class TodosControler(FlaskView):

    def verif_firstname(self,firstname):
        expression = "^[A-Za-z\é\è\ê\-]+$"

        if (not re.search(expression,firstname)):
            print("erreur firstname")
            retour = {
            "erreur": "Prénom invalide"
            }
            return retour

    def verif_lastname(self,lastname):
    
        expression = "^[A-Za-z\é\è\ê\-]+$"

        if (not re.search(expression,lastname)):
            retour = {
            "erreur": "Nom invalide"
            }
            return retour

    def verif_identifiant(self,identifiant):
    
        expression = "^[A-Za-z\é\è\ê\-]+$"

        if (not re.search(expression,identifiant)):
            retour = {
            "erreur": "Identifiant invalide"
            }
            return retour

    def verif_email(self,email):

        expression = r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
        if (not re.search(expression,email)):
            retour = {
            "erreur": "email invalide"
            }
            return retour

    def verif_motdepasse (self,motdepasse):
        #8 caracteres
        #uppercase letters: A-Z, lowercase letters: a-z,numbers: 0-9,
        #any of the special characters: @#$%^&+=

        expression = r"^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
        if (not re.search(expression,motdepasse)):
            retour = {
            "erreur": "mot de passe invalide"
            }
            return retour

    # définition d'une route de base
    route_base = '/api/todos/'

    retour = {
        "erreur": ""
    }

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


        lastname = request.json['lastname']
        
        retour = TodosControler.verif_lastname(self,lastname)
        if (retour):
            return retour

        firstname = request.json['firstname']

        retour = TodosControler.verif_firstname(self,firstname)
        if (retour):
            return retour

        birthdate = request.json['birthdate']

        userdto = UserDto(firstname,lastname,birthdate)
    
        email = request.json['email']

        retour = TodosControler.verif_email(self,email)
        if (retour):
            return retour


        identifiant = request.json['identifiant']

        retour = TodosControler.verif_identifiant(self,identifiant)
        if (retour):
            return retour

        motdepasse = request.json['motdepasse']

        retour = TodosControler.verif_motdepasse(self,motdepasse)
        if (retour):
            return retour


        identdto = IdentDto(email,identifiant,motdepasse)

        return todoService.create_user(userdto,identdto)

    @route('/<int:todo_id>', methods=['PUT'])
    def update_user(self, todo_id):
        result = todoService.update_user(todo_id)
        return jsonify(result)

    @route('/recherche/')
    def recherche_user(self):

        print("Arguments:{}".format(request.args['firstname']))

        lastname = request.args['lastname']

        if lastname :
            retour = TodosControler.verif_lastname(self,lastname)
            if retour:
                return retour

        firstname = request.args['firstname']
        if firstname:
            retour = TodosControler.verif_firstname(self,firstname)
            if retour:
                return retour

        email = request.args['email']
        if email:
            retour = TodosControler.verif_email(self,email)
            if retour:
                return retour

        rech={
            "firstname" : firstname,
            "lastname"  : lastname,
            "email"     : email
        }
        
        result = todoService.recherche_user(rech)

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
        
        print("Version os",os.name)
        email = ""
        identifiant = request.json['identifiant']
        motdepasse = request.json['motdepasse']
        identdto = IdentDto(email,identifiant,motdepasse)
        retour=todoService.create_connexion(identdto)

        #print("Au retour",retour)
        #print("Mdp:",retour.motdepasse,motdepasse)
        
        if retour == None or retour.motdepasse != motdepasse:
            result = False
        else:
            result = True

        return jsonify(result)
        
    