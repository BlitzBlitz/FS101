class Student:
    # Attributes
    # Actions
    # Constructor
    def __init__(self, name, grades):
        self.__name = name
        self.grades = grades
        self.isActive = True
        self.stufs = (1,"Hi",3.54)
    

    def getAvg(self):
        sum = 0
        for grade in self.grades:
            sum += grade
        return sum/len(self.grades)
    def printNameAndGrades(self):
        print(self.__name + ": ")
        print(self.grades)
    def printNameAndAvg(self):
        print(self.__name + ": ")
        print(self.getAvg())
        
    def __str__(self):
        return self.__name +" "+ str(self.isActive)


student1 = Student("Anna", 78)
student2 = Student("Anna", 78)
student3 = Student("Anna", 78)
student1.isActive = False
student1.stufs = (1, "New")

print(student1)