number1 = 10
number2 = 0


def divide(number1, number2):
    if(number2 == 0):
        raise NameError("Cannot divide by zero")
    print("Hello after check")
    return number1/number2

print("I have some work to do")
print("Doing division")

try:
    divide(10,0)
#if(type(e) == ZeroDivisionError) -> procced
except ZeroDivisionError as e:  #e = ZeroDivisionError("Cannot divide by zero")
    print("Entred ZeroDivisionError")
    print(type(e))
    print(e)
#elif(type(e) == NameError) -> procced
except NameError as e:
    print("Entred NameError")
    print(type(e))
    print(e)
#elif(type(e) == Exception) -> procced
except Exception as e:
    print("Entred Exception")
    print(type(e))
    print(e)

print("Not done yet")
print("DONE")