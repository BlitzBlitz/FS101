name = 'Ron'
age = 10
isSleeping = False
salary = 5000.45
# print(type(name))
# print(type(age))
# print(type(isSleeping))
# print(type(salary))

# print(float(age))

# print(6%2)
# print(7//2)
# print(2**3)

# if age > 60:
#     print(True)
# elif age == 10:
#     print(10)
# else:
#     print(False)

# Write a Python program that takes a character as input and checks if it is a vowel or a consonant.

# character = input('Enter a character: ')
# if character == 'a' or character == 'e' or character == 'o'or character == 'u' or character == 'i':
#     print('Vowel')
# else:
#     print('Consonant')
    
# Write a Python program that takes three numbers as input and finds the largest among them.
# number1 = input('Enter number 1: ')
# number2 = input('Enter number 2: ')
# number3 = input('Enter number 3: ')

# if number1 >= number2 and number1 > number3:
#     print('Max is: ' + number1)
# elif number2 >= number1 and number2 > number3:
#     print('Max is: ' + number2)
# elif number3 >= number1 and number3 > number2:
#     print('Max is: ' + number3)


# max = number1

# if number2 > max:
#     max = number2
# if number3 > max:
#     max = number3

# print(max)

# Write a Python program that takes a month (1-12) as input and
#  prints the corresponding season ("Spring," "Summer," "Autumn," or "Winter")

# month = input('Enter the month (1-12): ')

# if month == 12 or month == 1 or month == 2:
#     print('Winter')
# elif month == 3 or month == 4 or month == 5:
#     print('Spring')
# elif month == 6 or month == 7 or month == 8:
#     print('Summer')
# else:
#     print('Autumn')


# for counter in range(0,10,1):
#     print(counter)

# sum = 0
# amount = 0
# while True:
#     grade = input('Enter the grade of the student(-1 to exit): ')
#     if(int(grade) == -1):
#         break
#     else:
#         sum += int(grade)
#         amount += 1
# print(sum/amount)

# Write a Python program that takes a number as input 
# and checks if it is a prime number using a while loop.

# number = int(input('Enter a number: '))
# isPrime = True
# for divider in range(2, int(number/2)):
#     if(number % divider == 0):
#         isPrime = False
# print(number, " is prime: ", isPrime)
    

def addTwoNumbers():
    return 2+3

def addTwoNumbers(number1, number2):
    return number1 + number2

# print(addTwoNumbers(20,34))
age = 6
age1 = 6
age2 = 10
print(id(age))
print(id(age1))
print(id(age2))








