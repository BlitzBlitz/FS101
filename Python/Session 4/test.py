class UserModel:
    PATH = 'db.txt'
    users = []          #saving into the RAM
    def __init__(self):
        self.readUsers()
    class User:
        def __init__(self, id, name, surname, email):
            self.id = id
            self.name = name
            self.surname = surname
            self.email = email
        def __str__(self):
            #`My name is ${name}` string template
            return f"{self.id}, {self.name}, {self.surname}, {self.email} "
    #CRUD
    #Creating + Updating a user
    def persistUser(self, newUser):
        foundUser = self.getUserById(newUser.id)
        self.printUsers()

        print(foundUser != None)
        if(foundUser != None):
            foundUser.name = newUser.name
            foundUser.surname = newUser.surname
            foundUser.email = newUser.email
        else:
            self.users.append(newUser)
        self.printUsers()
        file = open(self.PATH, 'w')
        for user in self.users:
            file.write(user.__str__() +'\n')
    #Reading from HDD to RAM
    def readUsers(self):
        file = open(self.PATH, 'r')
        line = file.readline()
        while line:
            user = self.convertToUser(line)
            self.users.append(user)
            line = file.readline()
    def getUserById(self, id):
        for user in self.users:
            if(user.id == id):
                return user
        return None
    #Delete user
    def deleteUser(self, userToDelete):
        foundUser = self.getUserById(userToDelete.id)
        if(foundUser != None):
            print("????")
            print(foundUser)
            self.deleteUser(userToDelete.id)
            file = open(self.PATH, 'w')
            self.printUsers()
            for user in self.users:
                file.write(user.__str__() +'\n'+ "")
       
        
    #############################################################
    #Helping methods
    def deleteUser(self, userId):
        for user in self.users:
            if(user.id == userId):
                self.users.remove(user)
    def printUsers(self):
        for user in self.users:
            print(user)
    #Converting to Obj
    #Types of the fields
    def convertToUser(self, line):
        line = line[:len(line)-1]
        fields = line.split(', ')
        # user = User(fields[0], fields[1],fields[2],fields[3])
        user = self.User(*fields)
        user.id = int(user.id)
        return user 

userModel = UserModel()
user = UserModel.User(1, "Name", "SurName", "test@gmail.com")
user1 = UserModel.User(31, "Name", "SurName", "test@gmail.com")
user2 = UserModel.User(52, "Name", "SurName", "test@gmail.com")
userModel.persistUser(user)
userModel.persistUser(user1)
userModel.persistUser(user2)

userModel.deleteUser(user2)