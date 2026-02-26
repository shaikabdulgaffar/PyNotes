# Lab Activity 2
# Demonstration of Strings in Python

# Taking string input
name = input("Enter a name: ")
age = int(input("Enter your age: "))

print("\nOriginal String:", name)

# String Indexing
print("First Character:", name[0])
print("Last Character:", name[-1])

# String Slicing
print("First 3 Characters:", name[0:3])
print("Last 3 Characters:", name[-3:])

# Built-in String Methods
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())
print("Length of String:", len(name))
print("Is Alphanumeric:", name.isalnum())

# Formatted Output
print("\nFormatted Output:")
print("My name is {} and I am {} years old.".format(name, age))