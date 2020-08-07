class UserDto():
    def __init__(self, firstname,lastname,birthdate):
        self.firstname = firstname
        self.lastname = lastname
        self.birthdate = birthdate

class IdentDto():
    def __init__(self, email,identifiant,motdepasse):
        self.email = email
        self.identifiant = identifiant
        self.motdepasse = motdepasse
