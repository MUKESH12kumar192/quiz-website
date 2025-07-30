// script.js

const quizData = {
  python: {
  name: "Python programming ",
  units: {
    unit1: {
      name: "unit-01 :  Fundamentals of Python Programming Syntax ",
      questions: [
  {
    "question": "What is Python primarily used for?",
    "options": ["Web Development", "Data Science", "Scripting", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which of the following is not a Python keyword?",
    "options": ["def", "return", "eval", "class"],
    "answer": "eval"
  },
  {
    "question": "Which symbol is used to start a comment in Python?",
    "options": ["//", "#", "/*", "--"],
    "answer": "#"
  },
  {
    "question": "Which of these is a valid variable name in Python?",
    "options": ["2var", "my var", "my_var", "@var"],
    "answer": "my_var"
  },
  {
    "question": "What is the output of: type(3.14)?",
    "options": ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'complex'>"],
    "answer": "<class 'float'>"
  },
  {
    "question": "What is the result of: 5 + 2 * 3?",
    "options": ["21", "11", "15", "13"],
    "answer": "11"
  },
  {
    "question": "Which function is used to accept input from the user?",
    "options": ["get()", "input()", "scan()", "read()"],
    "answer": "input()"
  },
  {
    "question": "Which of the following is an assignment operator?",
    "options": ["==", "!=", "=", "==="],
    "answer": "="
  },
  {
    "question": "Which one is a logical operator in Python?",
    "options": ["AND", "OR", "&&", "and"],
    "answer": "and"
  },
  {
    "question": "Which operator is used for exponentiation in Python?",
    "options": ["^", "**", "//", "%"],
    "answer": "**"
  },
  {
    "question": "What will be the output of: 10 // 3?",
    "options": ["3.33", "3", "4", "3.0"],
    "answer": "3"
  },
  {
    "question": "Which function is used to find the data type of a variable?",
    "options": ["typeof()", "data()", "type()", "datatype()"],
    "answer": "type()"
  },
  {
    "question": "What is the output of: bool(0)?",
    "options": ["True", "False", "0", "Error"],
    "answer": "False"
  },
  {
    "question": "What is the default data type of input()?",
    "options": ["int", "str", "float", "bool"],
    "answer": "str"
  },
  {
    "question": "Which of the following is not a valid data type in Python?",
    "options": ["int", "float", "char", "bool"],
    "answer": "char"
  },
  {
    "question": "Which one is used to convert a string to float?",
    "options": ["str()", "int()", "float()", "bool()"],
    "answer": "float()"
  },
  {
    "question": "What does '==' mean in Python?",
    "options": ["Assignment", "Comparison", "Addition", "None of the above"],
    "answer": "Comparison"
  },
  {
    "question": "What is the output of: 3 * 'abc'?",
    "options": ["abcabcabc", "abc3", "Error", "abc abc abc"],
    "answer": "abcabcabc"
  },
  {
    "question": "Which operator is used to check membership?",
    "options": ["in", "has", "==", "with"],
    "answer": "in"
  },
  {
    "question": "Which function is used to convert a number to string?",
    "options": ["str()", "int()", "float()", "bool()"],
    "answer": "str()"
  },
  {
    "question": "What is the output of: print(5 > 3)?",
    "options": ["True", "False", "Error", "None"],
    "answer": "True"
  },
  {
    "question": "Which of the following are keywords in Python?",
    "options": ["if", "else", "for", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which of these is a ternary operator in Python?",
    "options": ["if else", "?:", "if-elif", "if-else-expression"],
    "answer": "if-else-expression"
  },
  {
    "question": "Which is not a valid token in Python?",
    "options": ["Keyword", "Identifier", "Operator", "Pointer"],
    "answer": "Pointer"
  },
  {
    "question": "What is the result of: 7 % 3?",
    "options": ["2", "1", "0", "4"],
    "answer": "1"
  },
  {
    "question": "Which function is used to read a number as integer from user?",
    "options": ["int(input())", "input(int)", "getInt()", "readInt()"],
    "answer": "int(input())"
  },
  {
    "question": "Which operator has the highest precedence?",
    "options": ["*", "+", "==", "**"],
    "answer": "**"
  },
  {
    "question": "What will be the value of: not True?",
    "options": ["True", "False", "Error", "None"],
    "answer": "False"
  },
  {
    "question": "Which is a relational operator in Python?",
    "options": ["==", "=", "&", "!"],
    "answer": "=="
  },
  {
    "question": "Which character is used to escape special characters in strings?",
    "options": ["\\", "/", "!", "#"],
    "answer": "\\"
  }
]

    },

    unit2: {
      name: "unit-02 : conditional and eteration statements",
      questions: [
  {
    "question": "Which keyword is used for decision-making in Python?",
    "options": ["loop", "if", "for", "def"],
    "answer": "if"
  },
  {
    "question": "What is the correct syntax for an if-else statement in Python?",
    "options": ["if x > y then", "if x > y:", "if (x > y)", "if x > y then:"],
    "answer": "if x > y:"
  },
  {
    "question": "Which loop is used when the number of iterations is not known beforehand?",
    "options": ["for", "do-while", "while", "repeat"],
    "answer": "while"
  },
  {
    "question": "What does the 'range(5)' function return?",
    "options": ["0 to 5", "1 to 5", "0 to 4", "1 to 4"],
    "answer": "0 to 4"
  },
  {
    "question": "Which keyword is used to exit a loop prematurely?",
    "options": ["exit", "stop", "break", "terminate"],
    "answer": "break"
  },
  {
    "question": "What is the output of: print(range(3))?",
    "options": ["[0, 1, 2]", "range(0, 3)", "[1, 2, 3]", "0 1 2"],
    "answer": "range(0, 3)"
  },
  {
    "question": "Which statement skips the current loop iteration?",
    "options": ["break", "exit", "skip", "continue"],
    "answer": "continue"
  },
  {
    "question": "What is the result of: 'while False:'?",
    "options": ["Infinite loop", "Runs once", "Syntax error", "Does not run"],
    "answer": "Does not run"
  },
  {
    "question": "Which loop will run a block of code a specific number of times?",
    "options": ["while", "for", "if", "else"],
    "answer": "for"
  },
  {
    "question": "What will 'range(2, 10, 2)' generate?",
    "options": ["[2, 4, 6, 8, 10]", "[2, 3, 4, 5, 6, 7, 8, 9]", "[2, 4, 6, 8]", "None of these"],
    "answer": "[2, 4, 6, 8]"
  },

  
  {
    "question": "What is the output of:\n\nx = 10\nif x > 5:\n  print('A')\nelse:\n  print('B')",
    "options": ["A", "B", "Error", "None"],
    "answer": "A"
  },
  {
    "question": "What is the output of the code:\n\nfor i in range(1, 5):\n    if i == 3:\n        break\n    print(i)",
    "options": ["1 2 3", "1 2", "1 2 3 4", "1 2 4"],
    "answer": "1 2"
  },
  {
    "question": "What is the output of the code:\n\nfor i in range(1, 5):\n    if i == 3:\n        continue\n    print(i)",
    "options": ["1 2", "1 2 3", "1 2 4", "1 2 3 4"],
    "answer": "1 2 4"
  },
  {
    "question": "Which construct allows checking multiple conditions?",
    "options": ["if", "if-else", "if-elif-else", "switch"],
    "answer": "if-elif-else"
  },
  {
    "question": "What will be the output of:\n\nx = 0\nwhile x < 3:\n    x += 1\n    print(x)",
    "options": ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
    "answer": "1 2 3"
  },
  {
    "question": "Which of the following is used to define an infinite loop?",
    "options": ["while 1:", "for i in range(1):", "if True:", "for True:"],
    "answer": "while 1:"
  },
  {
    "question": "What does the else block in a loop mean?",
    "options": ["Executes after loop ends", "Executes if loop has error", "Executes only in 'if'", "None"],
    "answer": "Executes after loop ends"
  },
  {
    "question": "Choose correct syntax of a nested loop.",
    "options": [
      "for i in range(3):\n  for j in range(2):\n    print(i,j)",
      "for i in range(3)\n  for j in range(2):\n    print(i,j)",
      "for i = 3:\n  for j = 2:\n    print(i,j)",
      "if i < 3:\n  if j < 2:\n    print(i,j)"
    ],
    "answer": "for i in range(3):\n  for j in range(2):\n    print(i,j)"
  },
  {
    "question": "What is the output of:\n\nfor i in range(1, 10, 3):\n  print(i, end=' ')",
    "options": ["1 4 7", "1 2 3", "1 3 5 7 9", "1 4 7 10"],
    "answer": "1 4 7"
  },
  {
    "question": "Which of the following is not a valid loop control statement?",
    "options": ["break", "continue", "pass", "exit"],
    "answer": "exit"
  }
]


    },


    unit3: {
      name: "unit-03 : String, List, Tuples, set and Dictionary ",
      questions: [
  {
    "question": "Which of the following is a string in Python?",
    "options": ["123", "'hello'", "True", "None"],
    "answer": "'hello'"
  },
  {
    "question": "How to access the first character of a string `s`?",
    "options": ["s(0)", "s[0]", "s{0}", "s<0>"],
    "answer": "s[0]"
  },
  {
    "question": "Which data structure is **mutable** in Python?",
    "options": ["Tuple", "String", "List", "All of these"],
    "answer": "List"
  },
  {
    "question": "Which of these defines a tuple?",
    "options": ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "None"],
    "answer": "(1, 2, 3)"
  },
  {
    "question": "Which of the following is used to create a **set**?",
    "options": ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "{'a':1, 'b':2}"],
    "answer": "{1, 2, 3}"
  },
  {
    "question": "Which of the following is used to create a **dictionary**?",
    "options": ["{1, 2}", "(1, 2)", "{'a': 1, 'b': 2}", "[1, 2]"],
    "answer": "{'a': 1, 'b': 2}"
  },
  {
    "question": "How do you find the length of a string `s`?",
    "options": ["length(s)", "s.len()", "len(s)", "count(s)"],
    "answer": "len(s)"
  },
  {
    "question": "Which function is used to add an element to a list?",
    "options": ["add()", "insert()", "append()", "put()"],
    "answer": "append()"
  },
  {
    "question": "What is the output of `'hello' * 2`?",
    "options": ["hellohello", "hello2", "hello hello", "error"],
    "answer": "hellohello"
  },
  {
    "question": "Which function removes all items from a list?",
    "options": ["clear()", "remove()", "delete()", "pop()"],
    "answer": "clear()"
  },
  
  {
    "question": "What is the result of: `list('abc')`?",
    "options": ["['a', 'b', 'c']", "abc", "'a', 'b', 'c'", "['abc']"],
    "answer": "['a', 'b', 'c']"
  },
  {
    "question": "Which method is used to get keys from a dictionary?",
    "options": ["get()", "items()", "keys()", "values()"],
    "answer": "keys()"
  },
  {
    "question": "What will be the output of:\n\nx = (1, 2, 3)\nx[0] = 5?",
    "options": ["(5, 2, 3)", "SyntaxError", "TypeError", "No Error"],
    "answer": "TypeError"
  },
  {
    "question": "How to update the value of a key in a dictionary?",
    "options": ["dict.update()", "dict.set()", "dict.change()", "dict.insert()"],
    "answer": "dict.update()"
  },
  {
    "question": "Which of the following can be a dictionary key?",
    "options": ["List", "Set", "Tuple", "Dictionary"],
    "answer": "Tuple"
  },
  {
    "question": "What is the output of: `'PYTHON'.lower()`?",
    "options": ["PYTHON", "python", "Python", "None"],
    "answer": "python"
  },
  {
    "question": "Which of the following removes a specific item from a set?",
    "options": ["remove()", "pop()", "discard()", "Both remove() and discard()"],
    "answer": "Both remove() and discard()"
  },
  {
    "question": "What is the output of: `len({'a':1, 'b':2})`?",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "question": "Which method is used to concatenate two lists?",
    "options": ["add()", "extend()", "append()", "insert()"],
    "answer": "extend()"
  },
  {
    "question": "Which of the following methods is used to find index of an element in a list?",
    "options": ["search()", "find()", "index()", "locate()"],
    "answer": "index()"
  },
  
  {
    "question": "Which of the following operations is valid for sets only?",
    "options": ["append()", "union()", "insert()", "count()"],
    "answer": "union()"
  },
  {
    "question": "Which string method returns the number of times a character appears?",
    "options": ["count()", "index()", "find()", "replace()"],
    "answer": "count()"
  },
  {
    "question": "Which function creates an empty dictionary?",
    "options": ["{}", "[]", "()", "None"],
    "answer": "{}"
  },
  {
    "question": "Which operator is used for membership checking in list or set?",
    "options": ["==", "in", "has", "contains"],
    "answer": "in"
  },
  {
    "question": "What is the result of: `set([1,2,2,3])`?",
    "options": ["{1,2,2,3}", "{1, 2, 3}", "[1,2,2,3]", "(1,2,2,3)"],
    "answer": "{1, 2, 3}"
  },
  {
    "question": "Which method changes a string to uppercase?",
    "options": ["upper()", "uppercase()", "toUpper()", "str.uppercase()"],
    "answer": "upper()"
  }
]

    },



    unit4: {
      name: "unit-04 :  Python Functions, Modules and packages",
      questions: [
  {
    "question": "What is a function in Python?",
    "options": [
      "A block of code which performs a specific task",
      "A variable",
      "A loop",
      "A module"
    ],
    "answer": "A block of code which performs a specific task"
  },
  {
    "question": "How do you define a function in Python?",
    "options": [
      "function myFunc():",
      "def myFunc():",
      "func myFunc():",
      "define myFunc():"
    ],
    "answer": "def myFunc():"
  },
  {
    "question": "What keyword is used to return a value from a function?",
    "options": ["output", "return", "send", "give"],
    "answer": "return"
  },
  {
    "question": "What is the default return value of a function that doesn't return anything?",
    "options": ["0", "None", "False", "Undefined"],
    "answer": "None"
  },
  {
    "question": "Which keyword is used to define a module in Python?",
    "options": ["define", "function", "module", "There is no keyword"],
    "answer": "There is no keyword"
  },
  {
    "question": "What is a module in Python?",
    "options": [
      "A file containing Python definitions and statements",
      "A loop",
      "A package of errors",
      "A type of function"
    ],
    "answer": "A file containing Python definitions and statements"
  },
  {
    "question": "Which statement is used to import a module?",
    "options": ["load", "include", "import", "use"],
    "answer": "import"
  },
  {
    "question": "What is the output of: `print(abs(-5))`?",
    "options": ["-5", "5", "0", "Error"],
    "answer": "5"
  },
  {
    "question": "Which function returns the length of an object?",
    "options": ["count()", "length()", "len()", "size()"],
    "answer": "len()"
  },
  {
    "question": "Which of the following is a built-in function?",
    "options": ["input()", "sum()", "type()", "All of these"],
    "answer": "All of these"
  },

  {
    "question": "Which of the following is a user-defined function?",
    "options": [
      "print()",
      "len()",
      "def calculate():",
      "type()"
    ],
    "answer": "def calculate():"
  },
  {
    "question": "What is the scope of a variable defined inside a function?",
    "options": ["Global", "Local", "Universal", "Static"],
    "answer": "Local"
  },
  {
    "question": "Which symbol is used for default parameter in a function?",
    "options": ["=", ":", "::", "*"],
    "answer": "="
  },
  {
    "question": "What will `def f(x=5): return x*x; print(f())` output?",
    "options": ["0", "25", "5", "Error"],
    "answer": "25"
  },
  {
    "question": "Which of the following allows dynamic number of arguments?",
    "options": ["*args", "**kwargs", "Both", "None"],
    "answer": "Both"
  },
  {
    "question": "What does `**kwargs` represent?",
    "options": [
      "Keyword arguments in a dictionary",
      "List of arguments",
      "Optional arguments",
      "None"
    ],
    "answer": "Keyword arguments in a dictionary"
  },
  {
    "question": "Which function is used to get documentation of a function?",
    "options": ["info()", "doc()", "help()", "desc()"],
    "answer": "help()"
  },
  {
    "question": "What is the purpose of `lambda` in Python?",
    "options": [
      "To define an anonymous function",
      "To create loops",
      "To define variables",
      "None of the above"
    ],
    "answer": "To define an anonymous function"
  },
  {
    "question": "Which of the following creates a lambda function?",
    "options": [
      "lambda x: x*2",
      "function(x) = x*2",
      "def(x): return x*2",
      "None"
    ],
    "answer": "lambda x: x*2"
  },
  {
    "question": "How do you import only one function from a module?",
    "options": [
      "import math.sqrt",
      "from math import sqrt",
      "use math.sqrt",
      "load math.sqrt"
    ],
    "answer": "from math import sqrt"
  },

   {
    "question": "What is a package in Python?",
    "options": [
      "A directory with __init__.py",
      "A single Python script",
      "An inbuilt module",
      "A folder of images"
    ],
    "answer": "A directory with __init__.py"
  },
  {
    "question": "What does pip stand for?",
    "options": [
      "Pip Installs Packages",
      "Python Installer Program",
      "Package Import Program",
      "None"
    ],
    "answer": "Pip Installs Packages"
  },
  {
    "question": "What does the `dir()` function do?",
    "options": [
      "Lists attributes of object/module",
      "Creates a directory",
      "Deletes variables",
      "None of these"
    ],
    "answer": "Lists attributes of object/module"
  },
  {
    "question": "Which of these is correct to install external package?",
    "options": [
      "pip install package-name",
      "import package-name",
      "package install name",
      "run name.install"
    ],
    "answer": "pip install package-name"
  },
  {
    "question": "What does `__name__ == '__main__'` mean?",
    "options": [
      "Checks if code is run directly",
      "It’s used to name variables",
      "It imports a module",
      "None"
    ],
    "answer": "Checks if code is run directly"
  },
  {
    "question": "What is the result of `list(map(lambda x: x*x, [1,2,3]))`?",
    "options": [
      "[1, 4, 9]",
      "[2, 4, 6]",
      "[1, 2, 3]",
      "Error"
    ],
    "answer": "[1, 4, 9]"
  }
]

    },


   unit5: {
      name: "unit-05 : Numpy",
      questions: [
  {
    "question": "What is NumPy in Python?",
    "options": [
      "A numerical Python library",
      "A type of variable",
      "A string function",
      "A GUI module"
    ],
    "answer": "A numerical Python library"
  },
  {
    "question": "Which command is used to import NumPy?",
    "options": [
      "import numpy",
      "import NumPy",
      "include numpy",
      "use numpy"
    ],
    "answer": "import numpy"
  },
  {
    "question": "What is the commonly used alias for NumPy?",
    "options": ["np", "nm", "npy", "num"],
    "answer": "np"
  },
  {
    "question": "What is the main object in NumPy?",
    "options": [
      "Series",
      "Array",
      "Matrix",
      "DataFrame"
    ],
    "answer": "Array"
  },
  {
    "question": "Which NumPy function is used to create an array?",
    "options": ["array()", "list()", "make()", "create()"],
    "answer": "array()"
  },
  {
    "question": "What will be the output of `np.array([1,2,3]).shape`?",
    "options": ["(3,)", "(1,3)", "(3,1)", "3"],
    "answer": "(3,)"
  },
  {
    "question": "Which function returns the number of dimensions in NumPy array?",
    "options": ["ndim", "dim()", "shape()", "len()"],
    "answer": "ndim"
  },
  {
    "question": "What is the output of `np.zeros(3)`?",
    "options": [
      "[0. 0. 0.]",
      "[0, 0, 0]",
      "[0 0 0]",
      "Error"
    ],
    "answer": "[0. 0. 0.]"
  },
  {
    "question": "Which function is used to create an identity matrix?",
    "options": ["identity()", "eye()", "ones()", "unit()"],
    "answer": "eye()"
  },
  {
    "question": "Which function gives evenly spaced values in a given range?",
    "options": ["range()", "linspace()", "split()", "map()"],
    "answer": "linspace()"
  },

  {
    "question": "What does `reshape()` function do?",
    "options": [
      "Changes shape of array",
      "Deletes an array",
      "Creates copy",
      "None"
    ],
    "answer": "Changes shape of array"
  },
  {
    "question": "What is broadcasting in NumPy?",
    "options": [
      "Automatic expansion of arrays during operations",
      "Sending data over network",
      "Matrix multiplication",
      "Array splitting"
    ],
    "answer": "Automatic expansion of arrays during operations"
  },
  {
    "question": "Which function is used to perform matrix multiplication?",
    "options": ["dot()", "multiply()", "matmul()", "Both dot() and matmul()"],
    "answer": "Both dot() and matmul()"
  },
  {
    "question": "What does `np.arange(1, 10, 2)` return?",
    "options": [
      "[1 3 5 7 9]",
      "[1 2 3 4 5 6 7 8 9]",
      "[2 4 6 8]",
      "[1 10]"
    ],
    "answer": "[1 3 5 7 9]"
  },
  {
    "question": "How can you create a 2D array with 3 rows and 2 columns?",
    "options": [
      "np.array([[1,2],[3,4],[5,6]])",
      "np.array([[1,2,3],[4,5,6]])",
      "np.array((1,2,3))",
      "np.array(3,2)"
    ],
    "answer": "np.array([[1,2],[3,4],[5,6]])"
  },
  {
    "question": "Which function is used to save NumPy array to binary file?",
    "options": ["save()", "dump()", "binary()", "pickle()"],
    "answer": "save()"
  },
  {
    "question": "What does `np.mean()` compute?",
    "options": ["Average", "Maximum", "Minimum", "Sum"],
    "answer": "Average"
  },
  {
    "question": "Which function finds maximum value in array?",
    "options": ["np.max()", "np.maximum()", "np.argmax()", "max()"],
    "answer": "np.max()"
  },
  {
    "question": "Which function returns the index of the minimum element?",
    "options": ["np.argmin()", "np.indexmin()", "np.minindex()", "np.findmin()"],
    "answer": "np.argmin()"
  },
  {
    "question": "What is the output of `np.array([[1,2],[3,4]]).T`?",
    "options": [
      "[[1 3]\n [2 4]]",
      "[[1 2]\n [3 4]]",
      "[[3 4]\n [1 2]]",
      "Error"
    ],
    "answer": "[[1 3]\n [2 4]]"
  },


  {
    "question": "Which NumPy function reads data from a text file?",
    "options": ["loadtxt()", "readfile()", "read()", "npinput()"],
    "answer": "loadtxt()"
  },
  {
    "question": "Which NumPy function is used to sort an array?",
    "options": ["sort()", "order()", "arrange()", "organize()"],
    "answer": "sort()"
  },
  {
    "question": "What does `np.unique()` do?",
    "options": [
      "Returns unique elements in array",
      "Sorts the array",
      "Removes duplicates and sorts",
      "None"
    ],
    "answer": "Returns unique elements in array"
  },
  {
    "question": "Which function is used for linear algebra operations?",
    "options": ["np.linalg", "np.algebra", "np.linear", "np.linearmath"],
    "answer": "np.linalg"
  },
  {
    "question": "Which function is used to inverse a matrix?",
    "options": ["np.linalg.inv()", "np.inverse()", "np.inv()", "np.matrix.inverse()"],
    "answer": "np.linalg.inv()"
  },
  {
    "question": "Which function is used to calculate determinant of matrix?",
    "options": ["np.linalg.det()", "np.det()", "np.determinant()", "np.matrix.det()"],
    "answer": "np.linalg.det()"
  }
]



    },



    unit6: {
      name: "unit-06 : Exception and File Handling in Python",
      questions: [
  {
    "question": "What is an exception in Python?",
    "options": [
      "An error that occurs during execution",
      "A syntax error",
      "A compiler error",
      "A logical error"
    ],
    "answer": "An error that occurs during execution"
  },
  {
    "question": "Which keyword is used to handle exceptions?",
    "options": ["try", "if", "exception", "error"],
    "answer": "try"
  },
  {
    "question": "Which block is used to catch the exception?",
    "options": ["except", "try", "catch", "handle"],
    "answer": "except"
  },
  {
    "question": "Which block always executes, whether exception occurs or not?",
    "options": ["finally", "else", "except", "last"],
    "answer": "finally"
  },
  {
    "question": "Which of the following will raise a ZeroDivisionError?",
    "options": ["10/0", "10//3", "10%3", "10*0"],
    "answer": "10/0"
  },
  {
    "question": "Which keyword is used to raise a user-defined exception?",
    "options": ["raise", "throw", "except", "try"],
    "answer": "raise"
  },
  {
    "question": "Which built-in exception occurs when variable is not defined?",
    "options": ["NameError", "TypeError", "ValueError", "KeyError"],
    "answer": "NameError"
  },
  {
    "question": "What is the output of: try: print(1/0) except: print(\"Error\")",
    "options": ["Error", "ZeroDivisionError", "1/0", "Exception"],
    "answer": "Error"
  },
  {
    "question": "What type of error is a SyntaxError?",
    "options": [
      "Compile-time error",
      "Run-time error",
      "Logical error",
      "Warning"
    ],
    "answer": "Compile-time error"
  },
  {
    "question": "What happens if exception is not handled in Python?",
    "options": [
      "Program crashes",
      "Nothing happens",
      "Program skips error",
      "Error is ignored"
    ],
    "answer": "Program crashes"
  },

  {
    "question": "Which block is executed if there is no exception?",
    "options": ["else", "finally", "except", "catch"],
    "answer": "else"
  },
  {
    "question": "How do you create a custom exception?",
    "options": [
      "By inheriting from Exception class",
      "Using raise only",
      "With 'def' keyword",
      "Using try-except"
    ],
    "answer": "By inheriting from Exception class"
  },
  {
    "question": "Which of the following is a correct exception hierarchy?",
    "options": [
      "BaseException → Exception → ValueError",
      "Exception → BaseException → ValueError",
      "Error → Exception → BaseException",
      "ValueError → Exception → BaseException"
    ],
    "answer": "BaseException → Exception → ValueError"
  },
  {
    "question": "Which error occurs when accessing a missing dictionary key?",
    "options": ["KeyError", "IndexError", "NameError", "AttributeError"],
    "answer": "KeyError"
  },
  {
    "question": "Which error is raised when an operation is applied to wrong type?",
    "options": ["TypeError", "NameError", "ValueError", "SyntaxError"],
    "answer": "TypeError"
  },
  {
    "question": "What will be the result of `int('abc')`?",
    "options": ["ValueError", "TypeError", "SyntaxError", "NameError"],
    "answer": "ValueError"
  },
  {
    "question": "What does the following code do?\ntry:\n\tf = open('file.txt')\nexcept FileNotFoundError:\n\tprint('Not found')",
    "options": [
      "Handles missing file",
      "Creates file.txt",
      "Ignores error",
      "Crashes the program"
    ],
    "answer": "Handles missing file"
  },
  {
    "question": "Which function is used to open a file in Python?",
    "options": ["open()", "file()", "read()", "with()"],
    "answer": "open()"
  },
  {
    "question": "What does 'r' mode mean in file handling?",
    "options": [
      "Read only",
      "Write only",
      "Read and write",
      "Append only"
    ],
    "answer": "Read only"
  },
  {
    "question": "Which mode is used to write data to a file (overwrite)?",
    "options": ["w", "a", "r+", "x"],
    "answer": "w"
  },

  {
    "question": "What is the output of `f.read()`?",
    "options": [
      "Reads entire content of file",
      "Reads one line",
      "Reads one word",
      "Reads file name"
    ],
    "answer": "Reads entire content of file"
  },
  {
    "question": "Which method reads one line from a file?",
    "options": ["readline()", "readlines()", "read()", "line()"],
    "answer": "readline()"
  },
  {
    "question": "What does `with open('file.txt') as f:` do?",
    "options": [
      "Opens and auto-closes the file",
      "Only opens the file",
      "Creates a file",
      "Deletes file"
    ],
    "answer": "Opens and auto-closes the file"
  },
  {
    "question": "Which function closes the file?",
    "options": ["close()", "end()", "stop()", "shutdown()"],
    "answer": "close()"
  },
  {
    "question": "Which file mode appends data without deleting existing content?",
    "options": ["a", "w", "r", "x"],
    "answer": "a"
  },
  {
    "question": "What is the purpose of `readlines()`?",
    "options": [
      "Returns a list of all lines",
      "Reads one line",
      "Reads one word",
      "Closes file"
    ],
    "answer": "Returns a list of all lines"
  },
  {
    "question": "Which error occurs when trying to read a closed file?",
    "options": ["ValueError", "FileNotFoundError", "NameError", "IOError"],
    "answer": "ValueError"
  },
  {
    "question": "Which mode creates a new file but throws error if file exists?",
    "options": ["x", "w", "a", "r"],
    "answer": "x"
  },
  {
    "question": "Which block ensures resource cleanup in try-except?",
    "options": ["finally", "else", "except", "catch"],
    "answer": "finally"
  },
  {
    "question": "Which built-in exception occurs for invalid index in list?",
    "options": ["IndexError", "KeyError", "NameError", "ValueError"],
    "answer": "IndexError"
  }

  
]

    }

  }
},

      data_structure_algorithm : {
  name: "Data Structure and Algorithm",
  units: {
    unit1: {
      name: "unit-01 : Fundamentals of Algorithms and its Analysis ",
      questions: [
  {
    "question": "What is the main purpose of an algorithm?",
    "options": ["Store data", "Solve a problem", "Design a website", "Control memory"],
    "answer": "Solve a problem"
  },
  {
    "question": "Which of the following is a system-defined data type?",
    "options": ["int", "structure", "enum", "class"],
    "answer": "int"
  },
  {
    "question": "Which one is a user-defined data type?",
    "options": ["float", "char", "struct", "int"],
    "answer": "struct"
  },
  {
    "question": "Which of the following is a linear data structure?",
    "options": ["Array", "Tree", "Graph", "Heap"],
    "answer": "Array"
  },
  {
    "question": "Which of the following is a non-linear data structure?",
    "options": ["Linked List", "Queue", "Graph", "Array"],
    "answer": "Graph"
  },
  {
    "question": "What does ADT stand for?",
    "options": ["Algorithmic Data Tree", "Abstract Data Type", "Array Data Type", "Advanced Data Type"],
    "answer": "Abstract Data Type"
  },
  {
    "question": "Which notation is used to describe the **worst-case** performance of an algorithm?",
    "options": ["Omega", "Theta", "Big-O", "Sigma"],
    "answer": "Big-O"
  },
  {
    "question": "Big-O notation describes the ______ complexity.",
    "options": ["Average", "Best", "Worst", "Exact"],
    "answer": "Worst"
  },
  {
    "question": "Which notation represents the **best-case** performance?",
    "options": ["Theta", "Omega", "Big-O", "Gamma"],
    "answer": "Omega"
  },
  {
    "question": "Which notation represents the **average-case** performance?",
    "options": ["Big-O", "Theta", "Omega", "Alpha"],
    "answer": "Theta"
  },
  {
    "question": "What is the time complexity of accessing an element in an array?",
    "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    "answer": "O(1)"
  },
  {
    "question": "Which of the following defines the number of steps an algorithm takes to complete?",
    "options": ["Space Complexity", "Loop Count", "Time Complexity", "Recursion"],
    "answer": "Time Complexity"
  },
  {
    "question": "What does space complexity refer to?",
    "options": ["Time taken by program", "Size of input", "Memory used by algorithm", "Speed of processor"],
    "answer": "Memory used by algorithm"
  },
  {
    "question": "Which of the following is NOT a characteristic of a good algorithm?",
    "options": ["Efficiency", "Finiteness", "Ambiguity", "Definiteness"],
    "answer": "Ambiguity"
  },
  {
    "question": "What is the output of Master Theorem used for?",
    "options": ["Time complexity of iterative loops", "Time complexity of recursive functions", "Space complexity", "Sorting"],
    "answer": "Time complexity of recursive functions"
  },
  {
    "question": "In Master Theorem, T(n) = aT(n/b) + f(n), what does 'a' represent?",
    "options": ["Sub-problems", "Recursive call", "Input size", "Memory size"],
    "answer": "Sub-problems"
  },
  {
    "question": "Which of the following best defines recursion?",
    "options": ["Looping forever", "A function calling itself", "A function never ending", "Multiple functions calling each other"],
    "answer": "A function calling itself"
  },
  {
    "question": "What is the time complexity of a recursive function with T(n) = 2T(n/2) + n?",
    "options": ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    "answer": "O(n log n)"
  },
  {
    "question": "Which of the following data types is typically used to store a single character?",
    "options": ["int", "char", "float", "double"],
    "answer": "char"
  },
  {
    "question": "Which case gives the minimum number of steps in algorithm analysis?",
    "options": ["Average Case", "Worst Case", "Best Case", "All Cases"],
    "answer": "Best Case"
  },
  {
    "question": "Which of these data structures is most suitable for implementing recursion?",
    "options": ["Queue", "Heap", "Stack", "Array"],
    "answer": "Stack"
  },
  {
    "question": "What is the time complexity of binary search in best case?",
    "options": ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
    "answer": "O(1)"
  },
  {
    "question": "An algorithm with complexity O(n!) is considered as:",
    "options": ["Efficient", "Acceptable", "Moderate", "Highly inefficient"],
    "answer": "Highly inefficient"
  },
  {
    "question": "Which algorithm complexity is better?",
    "options": ["O(n^2)", "O(n log n)", "O(n!)", "O(2^n)"],
    "answer": "O(n log n)"
  },
  {
    "question": "Which notation gives the tight bound for an algorithm?",
    "options": ["Big-O", "Omega", "Theta", "Delta"],
    "answer": "Theta"
  },
  {
    "question": "What is the space complexity of an algorithm that only uses a constant number of variables?",
    "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    "answer": "O(1)"
  }
]

    },


    unit2: {
      name: "unit-02 : Linear Data Structures",
      questions: [
  {
    "question": "Which of the following is a linear data structure?",
    "options": ["Tree", "Graph", "Array", "Heap"],
    "answer": "Array"
  },
  {
    "question": "An array index starts from which number in most programming languages?",
    "options": ["-1", "0", "1", "Depends on language"],
    "answer": "0"
  },
  {
    "question": "Which data structure is used to implement recursion?",
    "options": ["Queue", "Stack", "Array", "Tree"],
    "answer": "Stack"
  },
  {
    "question": "What is the time complexity of accessing an element in an array?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Which operation is not possible on singly linked list from the end efficiently?",
    "options": ["Insertion", "Deletion", "Traversal", "All of these"],
    "answer": "Deletion"
  },
  {
    "question": "In linked list, each node contains:",
    "options": ["Only data", "Data and address", "Only address", "None of these"],
    "answer": "Data and address"
  },
  {
    "question": "Which data structure works on FIFO (First In First Out)?",
    "options": ["Stack", "Queue", "Tree", "Array"],
    "answer": "Queue"
  },
  {
    "question": "Which of the following is used to implement a Queue?",
    "options": ["Array", "Linked List", "Both", "None"],
    "answer": "Both"
  },
  {
    "question": "What is the time complexity of inserting an element at the end of a singly linked list?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(n)"
  },
  {
    "question": "What is the time complexity of inserting an element at the front of a linked list?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(1)"
  },
  {
    "question": "Which operation is most efficient in linked list compared to array?",
    "options": ["Random Access", "Traversal", "Insertion/Deletion", "Search"],
    "answer": "Insertion/Deletion"
  },
  {
    "question": "In which situation is a circular linked list more efficient than a singly linked list?",
    "options": ["When memory is limited", "When traversing from end to start", "When searching", "None"],
    "answer": "When traversing from end to start"
  },
  {
    "question": "Which data structure is used in function call and return?",
    "options": ["Queue", "Array", "Stack", "Heap"],
    "answer": "Stack"
  },
  {
    "question": "Which of the following is not a valid operation in a stack?",
    "options": ["Push", "Pop", "Top", "InsertMiddle"],
    "answer": "InsertMiddle"
  },
  {
    "question": "In which of the following scenarios would a stack overflow occur?",
    "options": ["When stack is full and push is attempted", "When stack is empty and pop is attempted", "When stack is resized", "Never"],
    "answer": "When stack is full and push is attempted"
  },
  {
    "question": "Which symbol is used to denote the top of the stack in an array implementation?",
    "options": ["front", "rear", "top", "head"],
    "answer": "top"
  },
  {
    "question": "What does 'enqueue' mean in queue operation?",
    "options": ["Delete element from queue", "Add element to queue", "Update element", "None of these"],
    "answer": "Add element to queue"
  },
  {
    "question": "What does 'dequeue' mean in queue operation?",
    "options": ["Insert element", "Delete element", "Reverse queue", "None"],
    "answer": "Delete element"
  },
  {
    "question": "What is the time complexity of dequeue operation in an array-based queue?",
    "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "answer": "O(n)"
  },
  {
    "question": "Which of the following data structures can be used to evaluate postfix expression?",
    "options": ["Queue", "Stack", "Linked list", "Array"],
    "answer": "Stack"
  },
  {
    "question": "Balancing symbols like ( ) { } [ ] is done using which data structure?",
    "options": ["Queue", "Stack", "Tree", "Array"],
    "answer": "Stack"
  },
  {
    "question": "Which data structure is used for level-order traversal in a tree?",
    "options": ["Stack", "Queue", "Linked List", "Array"],
    "answer": "Queue"
  },
  {
    "question": "Which linked list type allows traversal in both directions?",
    "options": ["Singly linked list", "Circular linked list", "Doubly linked list", "None"],
    "answer": "Doubly linked list"
  },
  {
    "question": "What is the maximum number of children in a binary tree node?",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "question": "What is the best data structure for implementing undo operations?",
    "options": ["Queue", "Tree", "Stack", "Array"],
    "answer": "Stack"
  },
  {
    "question": "Which of the following is a drawback of array implementation of a queue?",
    "options": ["Fixed size", "Slow insertions", "Complex traversal", "None"],
    "answer": "Fixed size"
  }
]

    },


    unit3: {
      name: "unit-03 : non-linear data structures",
      questions: [
  {
    "question": "Which of the following is a non-linear data structure?",
    "options": ["Array", "Linked List", "Stack", "Tree"],
    "answer": "Tree"
  },
  {
    "question": "A binary tree is a tree in which each node has at most:",
    "options": ["1 child", "2 children", "3 children", "No children"],
    "answer": "2 children"
  },
  {
    "question": "In a binary search tree (BST), the left child has a value:",
    "options": ["Less than the parent", "Greater than the parent", "Equal to parent", "Any value"],
    "answer": "Less than the parent"
  },
  {
    "question": "What is the maximum number of nodes in a binary tree of height h?",
    "options": ["2^h - 1", "2h - 1", "2^(h+1) - 1", "h"],
    "answer": "2^(h+1) - 1"
  },
  {
    "question": "Which tree traversal gives the sorted order in BST?",
    "options": ["Preorder", "Postorder", "Inorder", "Level-order"],
    "answer": "Inorder"
  },
  {
    "question": "Which traversal visits root, left, then right?",
    "options": ["Inorder", "Preorder", "Postorder", "Level-order"],
    "answer": "Preorder"
  },
  {
    "question": "Which traversal visits left, right, then root?",
    "options": ["Inorder", "Preorder", "Postorder", "Level-order"],
    "answer": "Postorder"
  },
  {
    "question": "Which data structure is used for level-order traversal of a binary tree?",
    "options": ["Stack", "Queue", "Array", "Graph"],
    "answer": "Queue"
  },
  {
    "question": "A complete binary tree has all levels filled except:",
    "options": ["Last", "First", "Middle", "None"],
    "answer": "Last"
  },
  {
    "question": "A min-heap is a binary tree such that:",
    "options": [
      "Root is the largest element",
      "Root is the smallest element",
      "Every level is full",
      "Left subtree is smaller"
    ],
    "answer": "Root is the smallest element"
  },
  {
    "question": "In a max-heap, the parent node is:",
    "options": ["Always smaller", "Always greater", "Sometimes smaller", "Equal"],
    "answer": "Always greater"
  },
  {
    "question": "The time complexity of inserting into a binary heap is:",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    "answer": "O(log n)"
  },
  {
    "question": "Which algorithm is used for finding the shortest path in a graph?",
    "options": ["Prim's", "Kruskal's", "Dijkstra's", "DFS"],
    "answer": "Dijkstra's"
  },
  {
    "question": "A graph is a set of:",
    "options": ["Nodes", "Edges", "Nodes and Edges", "Vertices only"],
    "answer": "Nodes and Edges"
  },
  {
    "question": "A graph with no cycle is called:",
    "options": ["Directed", "Undirected", "Tree", "Acyclic Graph"],
    "answer": "Acyclic Graph"
  },
  {
    "question": "Which graph traversal uses recursion or stack?",
    "options": ["DFS", "BFS", "Inorder", "Postorder"],
    "answer": "DFS"
  },
  {
    "question": "Which graph traversal uses a queue?",
    "options": ["DFS", "Inorder", "BFS", "Postorder"],
    "answer": "BFS"
  },
  {
    "question": "Which data structure is best for representing sparse graphs?",
    "options": ["Adjacency matrix", "Adjacency list", "Array", "Stack"],
    "answer": "Adjacency list"
  },
  {
    "question": "How many edges are there in a complete graph with n vertices?",
    "options": ["n", "n^2", "n(n-1)/2", "n(n+1)/2"],
    "answer": "n(n-1)/2"
  },
  {
    "question": "What is the maximum number of edges in a directed graph with n vertices?",
    "options": ["n(n-1)", "n^2", "2n", "n+1"],
    "answer": "n(n-1)"
  },
  {
    "question": "What type of graph traversal is used in cycle detection?",
    "options": ["BFS", "DFS", "Inorder", "Postorder"],
    "answer": "DFS"
  },
  {
    "question": "In a graph, a path that starts and ends at the same vertex without repeating edges or vertices is called:",
    "options": ["Trail", "Circuit", "Cycle", "Loop"],
    "answer": "Cycle"
  },
  {
    "question": "Which algorithm is used for finding the Minimum Spanning Tree?",
    "options": ["Kruskal's", "Dijkstra's", "Bellman-Ford", "Floyd-Warshall"],
    "answer": "Kruskal's"
  },
  {
    "question": "Which of the following is **not** true about trees?",
    "options": [
      "Trees are acyclic",
      "Every tree is a graph",
      "Trees contain cycles",
      "Trees are connected"
    ],
    "answer": "Trees contain cycles"
  },
  {
    "question": "Which tree has the minimum height for n nodes?",
    "options": ["Skewed tree", "Balanced tree", "Binary search tree", "Heap"],
    "answer": "Balanced tree"
  },
  {
    "question": "The number of null pointers in a binary tree with n nodes is:",
    "options": ["n", "n+1", "2n", "n-1"],
    "answer": "n+1"
  }
]

    },


    unit4: {
      name: "unit-04 : Sorting and Searching Techniques",
      questions:[
  {
    "question": "Which of the following is the simplest sorting algorithm?",
    "options": ["Quick Sort", "Bubble Sort", "Merge Sort", "Heap Sort"],
    "answer": "Bubble Sort"
  },
  {
    "question": "Which sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order?",
    "options": ["Selection Sort", "Insertion Sort", "Bubble Sort", "Quick Sort"],
    "answer": "Bubble Sort"
  },
  {
    "question": "Which sorting algorithm divides the array into sorted and unsorted parts?",
    "options": ["Selection Sort", "Heap Sort", "Quick Sort", "Merge Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "Which sorting technique works on the 'divide and conquer' principle?",
    "options": ["Bubble Sort", "Selection Sort", "Quick Sort", "Heap Sort"],
    "answer": "Quick Sort"
  },
  {
    "question": "Which sorting algorithm uses a heap data structure?",
    "options": ["Merge Sort", "Heap Sort", "Bubble Sort", "Quick Sort"],
    "answer": "Heap Sort"
  },
  {
    "question": "What is the time complexity of Bubble Sort in the worst case?",
    "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
    "answer": "O(n^2)"
  },
  {
    "question": "Which sorting algorithm has the best worst-case time complexity?",
    "options": ["Quick Sort", "Heap Sort", "Merge Sort", "Bubble Sort"],
    "answer": "Merge Sort"
  },
  {
    "question": "Which of the following sorting algorithms is NOT a comparison-based sorting algorithm?",
    "options": ["Radix Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
    "answer": "Radix Sort"
  },
  {
    "question": "In Selection Sort, the number of swaps in the worst case is:",
    "options": ["n", "n-1", "n^2", "log n"],
    "answer": "n-1"
  },
  {
    "question": "Which sorting algorithm is **unstable**?",
    "options": ["Insertion Sort", "Bubble Sort", "Merge Sort", "Heap Sort"],
    "answer": "Heap Sort"
  },
  {
    "question": "Which sorting algorithm is best suited for nearly sorted arrays?",
    "options": ["Quick Sort", "Insertion Sort", "Heap Sort", "Merge Sort"],
    "answer": "Insertion Sort"
  },
  {
    "question": "Which of the following sorting algorithms has the worst case time complexity O(n log n)?",
    "options": ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
    "answer": "Merge Sort"
  },
  {
    "question": "What is the average-case time complexity of Quick Sort?",
    "options": ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
    "answer": "O(n log n)"
  },
  {
    "question": "Which algorithm sorts data by repeatedly finding the minimum element and moving it to the front?",
    "options": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Quick Sort"],
    "answer": "Selection Sort"
  },
  {
    "question": "What is the space complexity of Merge Sort?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    "answer": "O(n)"
  },
  {
    "question": "Which searching algorithm is best for sorted arrays?",
    "options": ["Linear Search", "Binary Search", "DFS", "BFS"],
    "answer": "Binary Search"
  },
  {
    "question": "The time complexity of Binary Search in the worst case is:",
    "options": ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    "answer": "O(log n)"
  },
  {
    "question": "In binary search, the array must be:",
    "options": ["Unsorted", "Sorted", "Heap", "Reversed"],
    "answer": "Sorted"
  },
  {
    "question": "What is the time complexity of Linear Search in the worst case?",
    "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    "answer": "O(n)"
  },
  {
    "question": "Which searching algorithm checks every element one by one?",
    "options": ["Binary Search", "Linear Search", "Jump Search", "Interpolation Search"],
    "answer": "Linear Search"
  },
  {
    "question": "Which searching technique works well with uniformly distributed sorted data?",
    "options": ["Linear Search", "Binary Search", "Interpolation Search", "DFS"],
    "answer": "Interpolation Search"
  },
  {
    "question": "Hashing is a technique used for:",
    "options": ["Sorting", "Searching", "Traversal", "Division"],
    "answer": "Searching"
  },
  {
    "question": "What is the main advantage of hashing?",
    "options": ["Fast access", "Sorted output", "Minimized memory", "Recursive storage"],
    "answer": "Fast access"
  },
  {
    "question": "In hashing, what is the term used for two keys mapping to the same index?",
    "options": ["Collision", "Overload", "Crash", "Clash"],
    "answer": "Collision"
  },
  {
    "question": "Which of the following is a **collision resolution technique** in hashing?",
    "options": ["Binary Search", "Open Addressing", "Quick Sort", "Bubble Sort"],
    "answer": "Open Addressing"
  },
  {
    "question": "Which sorting algorithm performs better for large datasets?",
    "options": ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    "answer": "Merge Sort"
  }
]

    },


    unit5: {
      name: "unit-05 : Algorithm Design Techniques",
      questions: [
  {
    "question": "What is the main characteristic of a greedy algorithm?",
    "options": ["Backtracking", "Optimal substructure", "Global choice", "Making the best choice at each step"],
    "answer": "Making the best choice at each step"
  },
  {
    "question": "Which algorithm design technique is used in Merge Sort?",
    "options": ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    "answer": "Divide and Conquer"
  },
  {
    "question": "Which of the following problems can be solved using greedy algorithms?",
    "options": ["Huffman Encoding", "Tower of Hanoi", "Merge Sort", "Binary Search"],
    "answer": "Huffman Encoding"
  },
  {
    "question": "Which property must hold true for a problem to be solved by a greedy algorithm?",
    "options": ["Greedy choice property and optimal substructure", "Only backtracking", "Only dynamic programming", "Divide and conquer"],
    "answer": "Greedy choice property and optimal substructure"
  },
  {
    "question": "What does 'optimal substructure' mean?",
    "options": [
      "Solution to the problem is always unique",
      "The problem cannot be divided",
      "A problem can be broken into subproblems that can be solved optimally",
      "Problem uses recursion only"
    ],
    "answer": "A problem can be broken into subproblems that can be solved optimally"
  },
  {
    "question": "Which algorithm is used for optimal binary tree encoding?",
    "options": ["Kruskal's", "Prim's", "Dijkstra's", "Huffman coding"],
    "answer": "Huffman coding"
  },
  {
    "question": "What is the time complexity of Huffman Coding algorithm (using priority queue)?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    "answer": "O(n log n)"
  },
  {
    "question": "Which design technique does the Binary Search algorithm follow?",
    "options": ["Greedy", "Divide and Conquer", "Backtracking", "Dynamic Programming"],
    "answer": "Divide and Conquer"
  },
  {
    "question": "Which one is not a greedy algorithm?",
    "options": ["Prim’s algorithm", "Kruskal’s algorithm", "Dijkstra’s algorithm", "Floyd-Warshall algorithm"],
    "answer": "Floyd-Warshall algorithm"
  },
  {
    "question": "Which of the following is not a valid characteristic of a greedy algorithm?",
    "options": ["It always gives optimal solution", "It builds up a solution piece by piece", "It may need to backtrack", "It chooses local optimum"],
    "answer": "It may need to backtrack"
  },
  {
    "question": "Which algorithm finds Minimum Spanning Tree using greedy technique?",
    "options": ["Dijkstra’s", "Floyd-Warshall", "Prim’s", "Bellman-Ford"],
    "answer": "Prim’s"
  },
  {
    "question": "What is the greedy choice property?",
    "options": [
      "Choosing global optimum guarantees the best solution",
      "Making local optimum choice leads to global optimum",
      "Always use recursion",
      "Always sort the data"
    ],
    "answer": "Making local optimum choice leads to global optimum"
  },
  {
    "question": "What is the primary goal of Divide and Conquer algorithms?",
    "options": ["To divide memory", "To reduce time complexity", "To break down problem and combine results", "To increase recursion"],
    "answer": "To break down problem and combine results"
  },
  {
    "question": "Which of these algorithms uses Divide and Conquer technique?",
    "options": ["Bubble Sort", "Binary Search", "Dijkstra’s", "Linear Search"],
    "answer": "Binary Search"
  },
  {
    "question": "Which sorting algorithm follows divide and conquer?",
    "options": ["Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
    "answer": "Quick Sort"
  },
  {
    "question": "What is the recurrence relation for Merge Sort?",
    "options": ["T(n) = 2T(n/2) + n", "T(n) = T(n-1) + n", "T(n) = T(n-1) + 1", "T(n) = T(n/2) + log n"],
    "answer": "T(n) = 2T(n/2) + n"
  },
  {
    "question": "Which method is used to solve recurrence relations in Divide and Conquer?",
    "options": ["Backtracking", "Master Theorem", "Branch and Bound", "Greedy Choice"],
    "answer": "Master Theorem"
  },
  {
    "question": "What is the time complexity of Merge Sort using Divide and Conquer?",
    "options": ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
    "answer": "O(n log n)"
  },
  {
    "question": "Greedy algorithms may fail to give correct answer for which type of problem?",
    "options": ["Problems with optimal substructure", "Problems needing global optimization", "Problems with local optimum", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "Which of the following is an application of greedy algorithm?",
    "options": ["Fractional Knapsack Problem", "0/1 Knapsack Problem", "Tower of Hanoi", "Quick Sort"],
    "answer": "Fractional Knapsack Problem"
  },
  {
    "question": "In 0/1 Knapsack problem, which technique guarantees correct answer?",
    "options": ["Greedy", "Divide and Conquer", "Dynamic Programming", "Brute Force"],
    "answer": "Dynamic Programming"
  },
  {
    "question": "Which algorithm design technique is used in Dynamic Programming?",
    "options": ["Greedy", "Divide and Conquer", "Overlapping Subproblems", "Backtracking"],
    "answer": "Overlapping Subproblems"
  },
  {
    "question": "Which one of these is NOT an application of Divide and Conquer?",
    "options": ["Merge Sort", "Binary Search", "Quick Sort", "Huffman Coding"],
    "answer": "Huffman Coding"
  },
  {
    "question": "In which scenario does Greedy algorithm give an optimal solution?",
    "options": ["Always", "When greedy choice and optimal substructure hold", "Never", "Only in linear problems"],
    "answer": "When greedy choice and optimal substructure hold"
  },
  {
    "question": "Which algorithm design technique is most efficient for solving Huffman Coding?",
    "options": ["Dynamic Programming", "Greedy", "Divide and Conquer", "Backtracking"],
    "answer": "Greedy"
  }
]

    },

  }
},

  Operating_system : {
  name: "Operating System",
  units: {
    unit1: {
      name: "unit-01 :  Operating System Concepts-  ",
      questions: [
  {
    "question": "What is an operating system?",
    "options": ["Hardware", "System Software", "Application Software", "Compiler"],
    "answer": "System Software"
  },
  {
    "question": "Which of the following is not a function of the operating system?",
    "options": ["Compiler Design", "Memory Management", "File Management", "Process Management"],
    "answer": "Compiler Design"
  },
  {
    "question": "Which component of OS manages processes?",
    "options": ["File Manager", "Scheduler", "Shell", "Linker"],
    "answer": "Scheduler"
  },
  {
    "question": "What is the main function of the command interpreter?",
    "options": ["To execute files", "To translate commands", "To manage processes", "To allocate memory"],
    "answer": "To translate commands"
  },
  {
    "question": "Which type of OS executes multiple jobs by switching between them?",
    "options": ["Batch OS", "Real-Time OS", "Multiprogramming OS", "Mobile OS"],
    "answer": "Multiprogramming OS"
  },
  {
    "question": "Which OS is used for mission-critical systems like flight control?",
    "options": ["Real-time OS", "Batch OS", "Mobile OS", "Multiprogramming OS"],
    "answer": "Real-time OS"
  },
  {
    "question": "Which of the following is a type of system software?",
    "options": ["MS Word", "Adobe Photoshop", "Operating System", "Notepad++"],
    "answer": "Operating System"
  },
  {
    "question": "Which of these is NOT a component of an Operating System?",
    "options": ["Kernel", "Shell", "Compiler", "File System"],
    "answer": "Compiler"
  },
  {
    "question": "Which system call is used to create a new process in Unix?",
    "options": ["fork()", "exec()", "open()", "exit()"],
    "answer": "fork()"
  },
  {
    "question": "Which OS allows multiple users to use the system simultaneously?",
    "options": ["Single User OS", "Multi-user OS", "Batch OS", "None"],
    "answer": "Multi-user OS"
  },
  {
    "question": "What is the purpose of a system call?",
    "options": ["To call application software", "To run boot loader", "To request services from the OS", "To start GUI"],
    "answer": "To request services from the OS"
  },
  {
    "question": "Which of the following is a mobile operating system?",
    "options": ["Ubuntu", "Fedora", "Android", "Windows XP"],
    "answer": "Android"
  },
  {
    "question": "Which part of OS interacts directly with the hardware?",
    "options": ["Shell", "Compiler", "Kernel", "Editor"],
    "answer": "Kernel"
  },
  {
    "question": "What does GUI stand for?",
    "options": ["General User Interface", "Graphical User Interface", "Graphical Unified Interface", "Graphics User Internet"],
    "answer": "Graphical User Interface"
  },
  {
    "question": "Which scheduling method is used in Batch Operating Systems?",
    "options": ["FCFS", "SJF", "Round Robin", "Priority"],
    "answer": "FCFS"
  },
  {
    "question": "Which of these is an example of a Time-Sharing System?",
    "options": ["DOS", "Linux", "Windows 98", "All of these"],
    "answer": "Linux"
  },
  {
    "question": "Which of these is not a view of Operating System?",
    "options": ["User View", "System View", "Physical View", "None"],
    "answer": "Physical View"
  },
  {
    "question": "Which type of OS executes tasks in response to external events?",
    "options": ["Batch OS", "Real-time OS", "Distributed OS", "Time-sharing OS"],
    "answer": "Real-time OS"
  },
  {
    "question": "Which of the following OS is open-source?",
    "options": ["Windows", "Android", "Linux", "MacOS"],
    "answer": "Linux"
  },
  {
    "question": "The part of OS that decides which process runs next is called?",
    "options": ["Scheduler", "Dispatcher", "Loader", "Compiler"],
    "answer": "Scheduler"
  },
  {
    "question": "System software includes:",
    "options": ["Operating System", "Compiler", "Loader", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "What type of OS is required for embedded systems?",
    "options": ["Batch OS", "Real-time OS", "Multiprogramming OS", "Mobile OS"],
    "answer": "Real-time OS"
  },
  {
    "question": "What is the name of the interface between the user and the kernel?",
    "options": ["Shell", "GUI", "CLI", "Driver"],
    "answer": "Shell"
  },
  {
    "question": "Which OS runs on smartphones?",
    "options": ["iOS", "Windows", "Ubuntu", "DOS"],
    "answer": "iOS"
  },
  {
    "question": "Which of these services is not provided by the Operating System?",
    "options": ["File access", "Security", "Hardware design", "Program execution"],
    "answer": "Hardware design"
  },
  {
    "question": "What does the OS use to manage hardware devices?",
    "options": ["Drivers", "Compilers", "Interpreters", "Packages"],
    "answer": "Drivers"
  }
]


    },


    unit2: {
      name: "unit-02 : Process Management ",
      questions: [
  {
    "question": "What is a process in an Operating System?",
    "options": ["Program in execution", "Compiler", "Command", "Instruction set"],
    "answer": "Program in execution"
  },
  {
    "question": "What is the first state of a process?",
    "options": ["Running", "Waiting", "Ready", "New"],
    "answer": "New"
  },
  {
    "question": "Which state comes after the 'New' state in a process lifecycle?",
    "options": ["Running", "Ready", "Waiting", "Terminated"],
    "answer": "Ready"
  },
  {
    "question": "Which component is responsible for selecting which process to execute next?",
    "options": ["Loader", "Scheduler", "Compiler", "Interpreter"],
    "answer": "Scheduler"
  },
  {
    "question": "How many types of schedulers are there in an OS?",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "question": "Which is NOT a type of process scheduler?",
    "options": ["Long-term", "Short-term", "Medium-term", "End-term"],
    "answer": "End-term"
  },
  {
    "question": "Which scheduling algorithm gives priority to the process that requests the CPU first?",
    "options": ["SJF", "FCFS", "RR", "Priority"],
    "answer": "FCFS"
  },
  {
    "question": "Which scheduling algorithm may lead to starvation?",
    "options": ["FCFS", "Round Robin", "Priority", "SJF"],
    "answer": "Priority"
  },
  {
    "question": "In which state is a process waiting for a resource to become available?",
    "options": ["Ready", "Running", "Waiting", "Terminated"],
    "answer": "Waiting"
  },
  {
    "question": "What is context switching?",
    "options": ["Changing process states", "Saving current process and loading another", "Terminating a process", "None"],
    "answer": "Saving current process and loading another"
  },
  {
    "question": "What does PCB stand for in Operating Systems?",
    "options": ["Process Control Block", "Program Control Block", "Processor Current Block", "Program Counter Block"],
    "answer": "Process Control Block"
  },
  {
    "question": "What does PCB NOT contain?",
    "options": ["Process state", "Program counter", "Scheduling info", "Source code"],
    "answer": "Source code"
  },
  {
    "question": "Which of these is not a valid process state?",
    "options": ["Ready", "Running", "Executing", "Terminated"],
    "answer": "Executing"
  },
  {
    "question": "Which process scheduling algorithm is preemptive?",
    "options": ["FCFS", "SJF", "Round Robin", "None"],
    "answer": "Round Robin"
  },
  {
    "question": "What is the time slice in Round Robin scheduling?",
    "options": ["Memory size", "Quantum", "Register size", "Process ID"],
    "answer": "Quantum"
  },
  {
    "question": "Which condition leads to a deadlock?",
    "options": ["Mutual Exclusion", "Preemption", "Fairness", "Priority"],
    "answer": "Mutual Exclusion"
  },
  {
    "question": "What is a zombie process?",
    "options": ["Still executing", "Waiting for parent", "Terminated but not cleaned", "Non-existent"],
    "answer": "Terminated but not cleaned"
  },
  {
    "question": "Which is not a requirement for deadlock to occur?",
    "options": ["Mutual exclusion", "Circular wait", "Interrupts", "No preemption"],
    "answer": "Interrupts"
  },
  {
    "question": "Which scheduling algorithm is best for time-sharing systems?",
    "options": ["FCFS", "SJF", "Round Robin", "Priority"],
    "answer": "Round Robin"
  },
  {
    "question": "Which scheduler removes processes from memory?",
    "options": ["Long-term scheduler", "Medium-term scheduler", "Short-term scheduler", "All of these"],
    "answer": "Medium-term scheduler"
  },
  {
    "question": "Which process creates other processes?",
    "options": ["Child", "Parent", "Zombie", "Kernel"],
    "answer": "Parent"
  },
  {
    "question": "What is a process ID (PID)?",
    "options": ["Instruction counter", "Unique process number", "Program name", "Variable"],
    "answer": "Unique process number"
  },
  {
    "question": "What happens during process termination?",
    "options": ["Resources are released", "Context is saved", "Process moves to Ready", "New process created"],
    "answer": "Resources are released"
  },
  {
    "question": "What is starvation in process scheduling?",
    "options": ["Process gets executed quickly", "Process never gets CPU", "Process runs in a loop", "None"],
    "answer": "Process never gets CPU"
  },
  {
    "question": "What is the role of dispatcher?",
    "options": ["Manages memory", "Switches CPU to the selected process", "Allocates disk space", "Handles deadlock"],
    "answer": "Switches CPU to the selected process"
  },
  {
    "question": "Which scheduling method gives shortest job first?",
    "options": ["SJF", "FCFS", "Priority", "RR"],
    "answer": "SJF"
  },
  {
    "question": "Deadlock prevention requires:",
    "options": ["Circular wait allowed", "Resources must be preempted", "No mutual exclusion", "All of the above"],
    "answer": "Resources must be preempted"
  }
]


    },


    unit3: {
      name: "unit-03 : CPU Scheduling and Algorithm",
      questions: [
  {
    "question": "What is the main goal of CPU scheduling?",
    "options": ["Minimize CPU usage", "Maximize response time", "Optimize CPU utilization", "Reduce power consumption"],
    "answer": "Optimize CPU utilization"
  },
  {
    "question": "In CPU scheduling, a CPU burst is followed by:",
    "options": ["Memory burst", "I/O burst", "Power burst", "Thread burst"],
    "answer": "I/O burst"
  },
  {
    "question": "Which of the following is a preemptive scheduling algorithm?",
    "options": ["FCFS", "SJF", "Round Robin", "None"],
    "answer": "Round Robin"
  },
  {
    "question": "Which algorithm schedules the process that arrives first?",
    "options": ["SJF", "Round Robin", "FCFS", "Priority"],
    "answer": "FCFS"
  },
  {
    "question": "Which scheduling algorithm may lead to starvation?",
    "options": ["FCFS", "Round Robin", "SJF", "Multilevel"],
    "answer": "SJF"
  },
  {
    "question": "What is time quantum in Round Robin?",
    "options": ["Total time for all jobs", "Time each process gets in one cycle", "Time for I/O burst", "Time for memory swap"],
    "answer": "Time each process gets in one cycle"
  },
  {
    "question": "Which of the following scheduling algorithms gives minimum average waiting time?",
    "options": ["FCFS", "SJF", "Priority", "RR"],
    "answer": "SJF"
  },
  {
    "question": "Which of the following is not a CPU scheduling criterion?",
    "options": ["Throughput", "Turnaround time", "Latency", "Waiting time"],
    "answer": "Latency"
  },
  {
    "question": "SRTF stands for:",
    "options": ["Shortest Remaining Time First", "Shortest Ready Time First", "Shortest Round Time First", "Shortest Resource Time First"],
    "answer": "Shortest Remaining Time First"
  },
  {
    "question": "Which scheduling algorithm uses aging to prevent starvation?",
    "options": ["FCFS", "RR", "Priority", "SJF"],
    "answer": "Priority"
  },
  {
    "question": "Multilevel queue scheduling is suitable for:",
    "options": ["Single user system", "Simple programs", "Multi-user OS", "None"],
    "answer": "Multi-user OS"
  },
  {
    "question": "What is the disadvantage of FCFS scheduling?",
    "options": ["Starvation", "Preemption", "Convoy effect", "Aging"],
    "answer": "Convoy effect"
  },
  {
    "question": "Which of the following is NOT a preemptive scheduling method?",
    "options": ["SRTF", "RR", "FCFS", "Priority with preemption"],
    "answer": "FCFS"
  },
  {
    "question": "In which algorithm is context switching most frequent?",
    "options": ["SJF", "FCFS", "Round Robin", "Priority"],
    "answer": "Round Robin"
  },
  {
    "question": "Which scheduling policy is most suited for time-sharing systems?",
    "options": ["FCFS", "RR", "SJF", "Multilevel"],
    "answer": "RR"
  },
  {
    "question": "Deadlock involves:",
    "options": ["Single process", "CPU only", "Multiple resources & processes", "Files only"],
    "answer": "Multiple resources & processes"
  },
  {
    "question": "Which of the following is not a necessary condition for deadlock?",
    "options": ["Mutual exclusion", "Hold and wait", "Cycle formation", "Preemption"],
    "answer": "Preemption"
  },
  {
    "question": "Which condition is responsible for circular wait in deadlock?",
    "options": ["Processes waiting for CPU", "Process requesting multiple resources", "Cycle of resource requests", "Requesting memory"],
    "answer": "Cycle of resource requests"
  },
  {
    "question": "What is deadlock prevention?",
    "options": ["Detecting deadlock", "Killing the process", "Avoiding deadlock conditions", "Allowing starvation"],
    "answer": "Avoiding deadlock conditions"
  },
  {
    "question": "Banker's algorithm is used for:",
    "options": ["Deadlock detection", "Deadlock avoidance", "Process scheduling", "Memory management"],
    "answer": "Deadlock avoidance"
  },
  {
    "question": "What is safe state in deadlock handling?",
    "options": ["No process can proceed", "At least one process will complete", "No CPU idle", "Deadlock occurs"],
    "answer": "At least one process will complete"
  },
  {
    "question": "Deadlock can occur if system is in:",
    "options": ["Safe state", "Unsafe state", "Idle state", "Sleeping state"],
    "answer": "Unsafe state"
  },
  {
    "question": "Which of these is a system model for deadlock?",
    "options": ["Resource Allocation Graph", "Process Queue", "Task Scheduler", "Job Queue"],
    "answer": "Resource Allocation Graph"
  },
  {
    "question": "Which is NOT a deadlock recovery method?",
    "options": ["Preemption", "Rollback", "Killing process", "Scheduling"],
    "answer": "Scheduling"
  },
  {
    "question": "Which scheduling method is starvation-free?",
    "options": ["SJF", "RR", "FCFS", "Priority without aging"],
    "answer": "RR"
  },
  {
    "question": "A system is in deadlock if:",
    "options": ["Only I/O is working", "Processes are waiting for resources held by others", "CPU is idle", "Memory full"],
    "answer": "Processes are waiting for resources held by others"
  },
  {
    "question": "Which is true for preemptive scheduling?",
    "options": ["Processes run till completion", "Process can be interrupted", "Only FCFS supports it", "Context switching is impossible"],
    "answer": "Process can be interrupted"
  },
  {
    "question": "What is starvation?",
    "options": ["A process finishes early", "A process never gets CPU time", "A process holds all resources", "None"],
    "answer": "A process never gets CPU time"
  },
  {
    "question": "What causes deadlock in a system?",
    "options": ["High CPU usage", "Multiple users", "Processes waiting for each other’s resources", "Low memory"],
    "answer": "Processes waiting for each other’s resources"
  },
  {
    "question": "Aging is used to:",
    "options": ["Reduce turnaround time", "Avoid deadlock", "Prevent starvation", "Increase throughput"],
    "answer": "Prevent starvation"
  }
]


    },


    unit4: {
      name: "unit-04 : Memory Management ",
      questions:[
  {
    "question": "What is the main function of memory management in an OS?",
    "options": ["File allocation", "Job scheduling", "Managing primary memory", "Network handling"],
    "answer": "Managing primary memory"
  },
  {
    "question": "What is the term for dividing memory into fixed-size blocks?",
    "options": ["Paging", "Fragmentation", "Segmentation", "Swapping"],
    "answer": "Paging"
  },
  {
    "question": "What is internal fragmentation?",
    "options": ["Wasted memory inside allocated space", "Wasted memory outside space", "Memory lost due to swapping", "Fragmented disk space"],
    "answer": "Wasted memory inside allocated space"
  },
  {
    "question": "What is external fragmentation?",
    "options": ["Wasted memory outside allocated space", "Data loss", "Unallocated disk", "Segment table error"],
    "answer": "Wasted memory outside allocated space"
  },
  {
    "question": "Which of the following is a memory allocation technique?",
    "options": ["Fixed partitioning", "Dynamic partitioning", "Paging", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "What does MMU stand for?",
    "options": ["Memory Management Unit", "Main Memory Utility", "Memory Machine Utility", "Master Memory Unit"],
    "answer": "Memory Management Unit"
  },
  {
    "question": "What is swapping?",
    "options": ["Exchanging two CPUs", "Moving data to disk", "Moving processes between memory and disk", "Data encryption"],
    "answer": "Moving processes between memory and disk"
  },
  {
    "question": "What is a page table?",
    "options": ["Stores instructions", "Maps virtual to physical address", "Stores process ID", "Memory block size"],
    "answer": "Maps virtual to physical address"
  },
  {
    "question": "In paging, what is the size of each page?",
    "options": ["Fixed", "Variable", "Unlimited", "Dynamic"],
    "answer": "Fixed"
  },
  {
    "question": "What is segmentation?",
    "options": ["Fixed size memory", "Dividing memory into variable size segments", "Combining processes", "Allocating I/O memory"],
    "answer": "Dividing memory into variable size segments"
  },
  {
    "question": "Which allocation method suffers from internal fragmentation?",
    "options": ["Paging", "Segmentation", "Dynamic Partitioning", "None"],
    "answer": "Paging"
  },
  {
    "question": "Which method can eliminate external fragmentation?",
    "options": ["Compaction", "Swapping", "Segmentation", "FIFO"],
    "answer": "Compaction"
  },
  {
    "question": "What is virtual memory?",
    "options": ["Memory in ROM", "Portion of hard disk used as RAM", "USB memory", "Cache"],
    "answer": "Portion of hard disk used as RAM"
  },
  {
    "question": "Which of the following uses demand paging?",
    "options": ["Virtual memory", "Cache", "RAM", "ROM"],
    "answer": "Virtual memory"
  },
  {
    "question": "Page fault occurs when:",
    "options": ["Page is not in memory", "Hard disk crashes", "RAM is full", "CPU overflows"],
    "answer": "Page is not in memory"
  },
  {
    "question": "Thrashing is:",
    "options": ["Too many page faults", "Memory overflow", "Disk damage", "CPU scheduling"],
    "answer": "Too many page faults"
  },
  {
    "question": "Which algorithm replaces the oldest page?",
    "options": ["LRU", "FIFO", "Optimal", "LFU"],
    "answer": "FIFO"
  },
  {
    "question": "Which page replacement algorithm uses reference string?",
    "options": ["LRU", "FIFO", "Optimal", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "The optimal page replacement algorithm is:",
    "options": ["Easiest to implement", "Ideal but not practical", "Least efficient", "Based on FIFO"],
    "answer": "Ideal but not practical"
  },
  {
    "question": "Which technique uses base and limit registers?",
    "options": ["Segmentation", "Paging", "Swapping", "Thrashing"],
    "answer": "Segmentation"
  },
  {
    "question": "Demand paging brings pages:",
    "options": ["Before they are needed", "After they are used", "Only when needed", "Never"],
    "answer": "Only when needed"
  },
  {
    "question": "What is the benefit of virtual memory?",
    "options": ["More processes run at once", "Faster CPU", "No fragmentation", "Fixed memory"],
    "answer": "More processes run at once"
  },
  {
    "question": "Which register holds the start address of the current segment?",
    "options": ["Base register", "Limit register", "Page table", "Stack pointer"],
    "answer": "Base register"
  },
  {
    "question": "What is the full form of TLB?",
    "options": ["Translation Lookaside Buffer", "Temporary Load Buffer", "True Location Block", "Transfer Load Base"],
    "answer": "Translation Lookaside Buffer"
  },
  {
    "question": "TLB is used for:",
    "options": ["Fast address translation", "Data compression", "Program storage", "Interrupt handling"],
    "answer": "Fast address translation"
  },
  {
    "question": "Segmentation suffers from:",
    "options": ["Internal fragmentation", "External fragmentation", "No fragmentation", "Both"],
    "answer": "External fragmentation"
  }
]


    },


    unit5: {
      name: "unit-05 : File Management ",
      questions: [
  {
    "question": "What is the main purpose of file management in an OS?",
    "options": ["Manage CPU scheduling", "Manage memory", "Manage user files", "Control I/O devices"],
    "answer": "Manage user files"
  },
  {
    "question": "Which of the following is a valid file access method?",
    "options": ["Sequential", "Direct", "Indexed", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which of the following is NOT a common file attribute?",
    "options": ["Name", "Type", "Size", "Refresh rate"],
    "answer": "Refresh rate"
  },
  {
    "question": "Which OS layer provides file management services?",
    "options": ["Application Layer", "Kernel Layer", "Shell Layer", "Driver Layer"],
    "answer": "Kernel Layer"
  },
  {
    "question": "Which of these is a file operation?",
    "options": ["Create", "Delete", "Read", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "A file is logically divided into:",
    "options": ["Blocks", "Processes", "Functions", "Jobs"],
    "answer": "Blocks"
  },
  {
    "question": "Which file allocation method causes external fragmentation?",
    "options": ["Contiguous", "Linked", "Indexed", "All of these"],
    "answer": "Contiguous"
  },
  {
    "question": "What is the extension of a text file?",
    "options": [".exe", ".txt", ".sys", ".bat"],
    "answer": ".txt"
  },
  {
    "question": "Which access method is best for magnetic tape?",
    "options": ["Direct", "Random", "Sequential", "Linked"],
    "answer": "Sequential"
  },
  {
    "question": "What is an inode?",
    "options": ["File index", "Data block", "File descriptor in UNIX", "File table"],
    "answer": "File descriptor in UNIX"
  },
  {
    "question": "What is directory in OS?",
    "options": ["A file", "List of files", "I/O device", "Memory block"],
    "answer": "List of files"
  },
  {
    "question": "Which is an advantage of indexed allocation?",
    "options": ["Faster access", "No external fragmentation", "Dynamic file size", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "What type of file system does Windows use?",
    "options": ["FAT32", "NTFS", "EXT3", "Both FAT32 and NTFS"],
    "answer": "Both FAT32 and NTFS"
  },
  {
    "question": "Which of these is a hierarchical file structure?",
    "options": ["Single-level directory", "Two-level directory", "Tree-structured directory", "None"],
    "answer": "Tree-structured directory"
  },
  {
    "question": "Which file allocation method stores file as a linked list?",
    "options": ["Contiguous", "Linked", "Indexed", "Segmented"],
    "answer": "Linked"
  },
  {
    "question": "Which file access method allows direct jump to a record?",
    "options": ["Sequential", "Indexed", "Linked", "Block"],
    "answer": "Indexed"
  },
  {
    "question": "File Control Block (FCB) contains:",
    "options": ["File permissions", "File location", "File size", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which command is used to remove a file in Linux?",
    "options": ["rm", "del", "remove", "erase"],
    "answer": "rm"
  },
  {
    "question": "What is the extension for a Python file?",
    "options": [".java", ".exe", ".py", ".php"],
    "answer": ".py"
  },
  {
    "question": "Which file system is supported by Linux?",
    "options": ["NTFS", "EXT4", "FAT32", "EXFAT"],
    "answer": "EXT4"
  },
  {
    "question": "What is the root directory?",
    "options": ["The top-most directory", "Empty folder", "Temporary folder", "Executable file"],
    "answer": "The top-most directory"
  },
  {
    "question": "Which one is a disk-based file system?",
    "options": ["EXT3", "NTFS", "FAT32", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which file access method is slowest for large files?",
    "options": ["Sequential", "Direct", "Indexed", "Hashed"],
    "answer": "Sequential"
  },
  {
    "question": "Which file operation helps in reading file content?",
    "options": ["Open", "Read", "Write", "Close"],
    "answer": "Read"
  },
  {
    "question": "Which directory structure allows same file name in different folders?",
    "options": ["Single-level", "Two-level", "Tree-structured", "None"],
    "answer": "Tree-structured"
  },
  {
    "question": "Which file allocation is best for random access?",
    "options": ["Contiguous", "Linked", "Indexed", "Sequential"],
    "answer": "Indexed"
  }
]


    },

  }
},


 Discreate_structure: {
  name: " Discrete Structure(Applied Mathematics- B) ",
  units: {
    unit1: {
      name: "unit-01 :  Logic and Proof Techniques   ",
      questions: [
  {
    "question": "Which of the following is a propositional connective?",
    "options": ["∀", "∃", "→", "x"],
    "answer": "→"
  },
  {
    "question": "What is the truth value of the statement: 'True AND False'?",
    "options": ["True", "False", "Cannot determine", "None of these"],
    "answer": "False"
  },
  {
    "question": "What is the truth value of the tautology?",
    "options": ["Always True", "Always False", "Depends on variables", "Undefined"],
    "answer": "Always True"
  },
  {
    "question": "A contradiction is a statement that is:",
    "options": ["Always true", "Always false", "Sometimes true", "None of these"],
    "answer": "Always false"
  },
  {
    "question": "Which of the following is a logical equivalence?",
    "options": ["p ∨ q ≡ ¬(¬p ∧ ¬q)", "p ∧ q ≡ ¬(¬p ∧ ¬q)", "p ≡ q ∨ p", "None of these"],
    "answer": "p ∨ q ≡ ¬(¬p ∧ ¬q)"
  },
  {
    "question": "What is the negation of the proposition: 'All birds can fly'?",
    "options": [
      "All birds cannot fly",
      "Some birds can fly",
      "Some birds cannot fly",
      "None of these"
    ],
    "answer": "Some birds cannot fly"
  },
  {
    "question": "Which symbol represents universal quantifier?",
    "options": ["∃", "→", "∀", "¬"],
    "answer": "∀"
  },
  {
    "question": "What does the existential quantifier (∃) mean?",
    "options": ["For all", "Exists", "Implies", "Not"],
    "answer": "Exists"
  },
  {
    "question": "Which of the following is a correct inference rule?",
    "options": ["Modus Tollens", "Venn Diagram", "Contradiction", "De Morgan"],
    "answer": "Modus Tollens"
  },
  {
    "question": "What is the contrapositive of: If p then q?",
    "options": ["If q then p", "If not p then not q", "If not q then not p", "None of these"],
    "answer": "If not q then not p"
  },
  {
    "question": "Proof by contradiction assumes:",
    "options": [
      "Statement is true",
      "Statement is false",
      "Opposite is true",
      "None of the above"
    ],
    "answer": "Opposite is true"
  },
  {
    "question": "Which of the following proof methods starts from premises and derives the conclusion?",
    "options": ["Contrapositive", "Contradiction", "Direct Proof", "Induction"],
    "answer": "Direct Proof"
  },
  {
    "question": "Which of the following is used in mathematical induction?",
    "options": ["Base case and truth table", "Base case and inductive step", "Direct proof", "Contradiction"],
    "answer": "Base case and inductive step"
  },
  {
    "question": "In predicate logic, ∃x P(x) means:",
    "options": ["P(x) is false for all x", "P(x) is true for all x", "There exists an x such that P(x) is true", "None of these"],
    "answer": "There exists an x such that P(x) is true"
  },
  {
    "question": "Which of the following statements is a tautology?",
    "options": [
      "p ∨ ¬p",
      "p ∧ ¬p",
      "p → ¬p",
      "p → q"
    ],
    "answer": "p ∨ ¬p"
  },
  {
    "question": "The logical equivalence of ¬(p ∧ q) is:",
    "options": [
      "¬p ∧ ¬q",
      "¬p ∨ ¬q",
      "p ∨ q",
      "None of the above"
    ],
    "answer": "¬p ∨ ¬q"
  },
  {
    "question": "Which of these inference rules means: from 'p → q' and 'p', deduce 'q'?",
    "options": [
      "Modus Ponens",
      "Modus Tollens",
      "Contrapositive",
      "Hypothetical syllogism"
    ],
    "answer": "Modus Ponens"
  },
  {
    "question": "Which one is not a proof technique?",
    "options": ["Direct proof", "Modus Tollens", "Contrapositive", "Proof by drawing"],
    "answer": "Proof by drawing"
  },
  {
    "question": "If p → q is true, and q is false, what can we say about p?",
    "options": ["p is true", "p is false", "p is unknown", "q is true"],
    "answer": "p is false"
  },
  {
    "question": "Which logic is used in programming and computer science to model logic?",
    "options": ["Fuzzy logic", "Propositional logic", "Moral logic", "Ethical logic"],
    "answer": "Propositional logic"
  },
  {
    "question": "Nested quantifiers means:",
    "options": [
      "Single quantifier used",
      "Multiple quantifiers applied to same variable",
      "Quantifiers within other quantifiers",
      "Quantifiers outside logic"
    ],
    "answer": "Quantifiers within other quantifiers"
  },
  {
    "question": "Which one is logically equivalent to: p → q?",
    "options": ["¬p ∧ q", "¬p ∨ q", "p ∧ q", "p ∨ q"],
    "answer": "¬p ∨ q"
  },
  {
    "question": "In proof by induction, what must be true for the inductive step?",
    "options": [
      "Statement holds for k",
      "Statement holds for k and implies for k+1",
      "Statement holds for all values",
      "None of these"
    ],
    "answer": "Statement holds for k and implies for k+1"
  },
  {
    "question": "In logic, which of the following is not a binary connective?",
    "options": ["AND", "OR", "NOT", "IMPLIES"],
    "answer": "NOT"
  },
  {
    "question": "If a statement is neither tautology nor contradiction, it is called:",
    "options": ["Contingency", "Contradiction", "Fallacy", "Tautology"],
    "answer": "Contingency"
  }
]


    },


    unit2: {
      name: "unit-02 :  Set Theory and Relation  ",
      questions: [
  {
    "question": "What is a process in an Operating System?",
    "options": ["Program in execution", "Compiler", "Command", "Instruction set"],
    "answer": "Program in execution"
  },
  {
    "question": "What is the first state of a process?",
    "options": ["Running", "Waiting", "Ready", "New"],
    "answer": "New"
  },
  {
    "question": "Which state comes after the 'New' state in a process lifecycle?",
    "options": ["Running", "Ready", "Waiting", "Terminated"],
    "answer": "Ready"
  },
  {
    "question": "Which component is responsible for selecting which process to execute next?",
    "options": ["Loader", "Scheduler", "Compiler", "Interpreter"],
    "answer": "Scheduler"
  },
  {
    "question": "How many types of schedulers are there in an OS?",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "question": "Which is NOT a type of process scheduler?",
    "options": ["Long-term", "Short-term", "Medium-term", "End-term"],
    "answer": "End-term"
  },
  {
    "question": "Which scheduling algorithm gives priority to the process that requests the CPU first?",
    "options": ["SJF", "FCFS", "RR", "Priority"],
    "answer": "FCFS"
  },
  {
    "question": "Which scheduling algorithm may lead to starvation?",
    "options": ["FCFS", "Round Robin", "Priority", "SJF"],
    "answer": "Priority"
  },
  {
    "question": "In which state is a process waiting for a resource to become available?",
    "options": ["Ready", "Running", "Waiting", "Terminated"],
    "answer": "Waiting"
  },
  {
    "question": "What is context switching?",
    "options": ["Changing process states", "Saving current process and loading another", "Terminating a process", "None"],
    "answer": "Saving current process and loading another"
  },
  {
    "question": "What does PCB stand for in Operating Systems?",
    "options": ["Process Control Block", "Program Control Block", "Processor Current Block", "Program Counter Block"],
    "answer": "Process Control Block"
  },
  {
    "question": "What does PCB NOT contain?",
    "options": ["Process state", "Program counter", "Scheduling info", "Source code"],
    "answer": "Source code"
  },
  {
    "question": "Which of these is not a valid process state?",
    "options": ["Ready", "Running", "Executing", "Terminated"],
    "answer": "Executing"
  },
  {
    "question": "Which process scheduling algorithm is preemptive?",
    "options": ["FCFS", "SJF", "Round Robin", "None"],
    "answer": "Round Robin"
  },
  {
    "question": "What is the time slice in Round Robin scheduling?",
    "options": ["Memory size", "Quantum", "Register size", "Process ID"],
    "answer": "Quantum"
  },
  {
    "question": "Which condition leads to a deadlock?",
    "options": ["Mutual Exclusion", "Preemption", "Fairness", "Priority"],
    "answer": "Mutual Exclusion"
  },
  {
    "question": "What is a zombie process?",
    "options": ["Still executing", "Waiting for parent", "Terminated but not cleaned", "Non-existent"],
    "answer": "Terminated but not cleaned"
  },
  {
    "question": "Which is not a requirement for deadlock to occur?",
    "options": ["Mutual exclusion", "Circular wait", "Interrupts", "No preemption"],
    "answer": "Interrupts"
  },
  {
    "question": "Which scheduling algorithm is best for time-sharing systems?",
    "options": ["FCFS", "SJF", "Round Robin", "Priority"],
    "answer": "Round Robin"
  },
  {
    "question": "Which scheduler removes processes from memory?",
    "options": ["Long-term scheduler", "Medium-term scheduler", "Short-term scheduler", "All of these"],
    "answer": "Medium-term scheduler"
  },
  {
    "question": "Which process creates other processes?",
    "options": ["Child", "Parent", "Zombie", "Kernel"],
    "answer": "Parent"
  },
  {
    "question": "What is a process ID (PID)?",
    "options": ["Instruction counter", "Unique process number", "Program name", "Variable"],
    "answer": "Unique process number"
  },
  {
    "question": "What happens during process termination?",
    "options": ["Resources are released", "Context is saved", "Process moves to Ready", "New process created"],
    "answer": "Resources are released"
  },
  {
    "question": "What is starvation in process scheduling?",
    "options": ["Process gets executed quickly", "Process never gets CPU", "Process runs in a loop", "None"],
    "answer": "Process never gets CPU"
  },
  {
    "question": "What is the role of dispatcher?",
    "options": ["Manages memory", "Switches CPU to the selected process", "Allocates disk space", "Handles deadlock"],
    "answer": "Switches CPU to the selected process"
  },
  {
    "question": "Which scheduling method gives shortest job first?",
    "options": ["SJF", "FCFS", "Priority", "RR"],
    "answer": "SJF"
  },
  {
    "question": "Deadlock prevention requires:",
    "options": ["Circular wait allowed", "Resources must be preempted", "No mutual exclusion", "All of the above"],
    "answer": "Resources must be preempted"
  },

  {
    "question": "What is a set?",
    "options": ["A collection of objects", "A single object", "A number", "A type of function"],
    "answer": "A collection of objects"
  },
  {
    "question": "Which of the following is a subset of every set?",
    "options": ["Null set", "Universal set", "Empty set", "Both Null and Empty"],
    "answer": "Empty set"
  },
  {
    "question": "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
    "options": ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"],
    "answer": "{3}"
  },
  {
    "question": "What is the cardinality of the set A = {2, 4, 6, 8, 10}?",
    "options": ["4", "5", "10", "2"],
    "answer": "5"
  },
  {
    "question": "Which of the following sets is infinite?",
    "options": ["{1, 2, 3}", "{a, b, c}", "{x ∈ N | x > 0}", "{x ∈ Z | x < 10}"],
    "answer": "{x ∈ N | x > 0}"
  },
  {
    "question": "Which law is represented by A ∪ B = B ∪ A?",
    "options": ["Associative Law", "Commutative Law", "Distributive Law", "Identity Law"],
    "answer": "Commutative Law"
  },
  {
    "question": "Which operation gives elements that are in either of the sets but not in both?",
    "options": ["Union", "Intersection", "Symmetric Difference", "Complement"],
    "answer": "Symmetric Difference"
  },
  {
    "question": "Which of the following is not a valid set?",
    "options": ["{1, 2, 3}", "{a, b, c}", "{x | x is a real number}", "All of the above are valid"],
    "answer": "All of the above are valid"
  },
  {
    "question": "If A = {1, 2} and B = {2, 3}, what is A ∪ B?",
    "options": ["{1, 2}", "{1, 2, 3}", "{2, 3}", "{1, 3}"],
    "answer": "{1, 2, 3}"
  },
  {
    "question": "What is the power set of A = {1, 2}?",
    "options": ["{∅, {1}, {2}}", "{∅, {1}, {2}, {1,2}}", "{1, 2, 3}", "{1, 2}"],
    "answer": "{∅, {1}, {2}, {1,2}}"
  },
  {
    "question": "What is the complement of set A in universal set U, if A = {1, 2}, U = {1, 2, 3, 4}?",
    "options": ["{3, 4}", "{1, 2}", "{1, 2, 3, 4}", "∅"],
    "answer": "{3, 4}"
  },
  {
    "question": "A ∩ ∅ equals:",
    "options": ["∅", "A", "U", "{0}"],
    "answer": "∅"
  },
  {
    "question": "If A = {x | x is a vowel in English alphabet}, then A is:",
    "options": ["Finite", "Infinite", "Null set", "Subset of number set"],
    "answer": "Finite"
  },
  {
    "question": "Which diagram is used to represent sets?",
    "options": ["Venn Diagram", "Pie Chart", "Bar Graph", "Line Graph"],
    "answer": "Venn Diagram"
  },
  {
    "question": "De Morgan’s Law for sets says: (A ∪ B)' = ?",
    "options": ["A' ∪ B'", "A' ∩ B'", "(A ∩ B)'", "(A' ∩ B)'"],
    "answer": "A' ∩ B'"
  },
  {
    "question": "If A = {1,2} and B = {3,4}, what is A × B?",
    "options": [
      "{(1,3), (1,4), (2,3), (2,4)}",
      "{(1,2), (3,4)}",
      "{(1,1), (2,2)}",
      "{1,2,3,4}"
    ],
    "answer": "{(1,3), (1,4), (2,3), (2,4)}"
  },
  {
    "question": "A relation R from A to B is a subset of:",
    "options": ["A × B", "B × A", "A ∩ B", "A ∪ B"],
    "answer": "A × B"
  },
  {
    "question": "What is the number of subsets of a set with n elements?",
    "options": ["n", "n^2", "2^n", "n!"],
    "answer": "2^n"
  },
  {
    "question": "A relation R on set A is called reflexive if:",
    "options": ["(a, a) ∈ R ∀ a ∈ A", "(a, b) ∈ R ⇒ (b, a) ∈ R", "R = ∅", "R ⊆ A × A"],
    "answer": "(a, a) ∈ R ∀ a ∈ A"
  },
  {
    "question": "A relation is called symmetric if:",
    "options": [
      "(a, b) ∈ R ⇒ (b, a) ∈ R",
      "(a, a) ∈ R",
      "(a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R",
      "R = ∅"
    ],
    "answer": "(a, b) ∈ R ⇒ (b, a) ∈ R"
  },
  {
    "question": "Transitive relation means:",
    "options": [
      "(a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R",
      "(a, a) ∈ R",
      "(a, b) ∈ R ⇒ (b, a) ∈ R",
      "R is empty"
    ],
    "answer": "(a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R"
  },
  {
    "question": "An equivalence relation is:",
    "options": [
      "Reflexive, Symmetric and Transitive",
      "Only Symmetric",
      "Only Transitive",
      "Only Reflexive"
    ],
    "answer": "Reflexive, Symmetric and Transitive"
  },
  {
    "question": "What is the total number of relations from set A to set B if |A| = 2 and |B| = 3?",
    "options": ["2", "6", "64", "8"],
    "answer": "64"
  },
  {
    "question": "If A and B are disjoint sets, what is A ∩ B?",
    "options": ["∅", "A", "B", "A ∪ B"],
    "answer": "∅"
  },
  {
    "question": "Which of the following is not a property of equivalence relation?",
    "options": ["Reflexive", "Symmetric", "Transitive", "Injective"],
    "answer": "Injective"
  },
  {
    "question": "Which of the following is true for universal set U?",
    "options": ["A ⊆ U for any set A", "U ⊆ A", "U = ∅", "U = A"],
    "answer": "A ⊆ U for any set A"
  }
]

    },


    unit3: {
      name: "unit-03 : Combinatorics  ",
      questions: [
  {
    "question": "What is the fundamental principle of counting?",
    "options": [
      "If one event can occur in m ways and another in n ways, then both can occur in m + n ways",
      "If one event can occur in m ways and another in n ways, then both can occur in m × n ways",
      "It always uses addition",
      "It always uses subtraction"
    ],
    "answer": "If one event can occur in m ways and another in n ways, then both can occur in m × n ways"
  },
  {
    "question": "What is the number of permutations of 3 objects from a group of 5?",
    "options": ["5", "10", "60", "120"],
    "answer": "60"
  },
  {
    "question": "How many combinations of 2 elements can be made from 4 elements?",
    "options": ["6", "8", "12", "24"],
    "answer": "6"
  },
  {
    "question": "In permutations, order of selection:",
    "options": ["Does not matter", "Always matters", "Matters only for large numbers", "None of these"],
    "answer": "Always matters"
  },
  {
    "question": "In combinations, order of selection:",
    "options": ["Always matters", "Sometimes matters", "Does not matter", "None of the above"],
    "answer": "Does not matter"
  },
  {
    "question": "What is the number of ways to arrange the word 'MATH'?",
    "options": ["12", "24", "48", "120"],
    "answer": "24"
  },
  {
    "question": "If a coin is tossed 3 times, how many outcomes are possible?",
    "options": ["6", "8", "10", "12"],
    "answer": "8"
  },
  {
    "question": "The number of subsets of a set with 4 elements is:",
    "options": ["8", "12", "16", "24"],
    "answer": "16"
  },
  {
    "question": "What is the value of 5C2?",
    "options": ["5", "10", "20", "15"],
    "answer": "10"
  },
  {
    "question": "Which of the following is true about permutations?",
    "options": [
      "nPr = n! / (n - r)!",
      "nPr = n! / r!",
      "nPr = r! / (n - r)!",
      "nPr = (n + r)! / r!"
    ],
    "answer": "nPr = n! / (n - r)!"
  },
  {
    "question": "Which of the following is true about combinations?",
    "options": [
      "nCr = n! / (n - r)!",
      "nCr = n! / (r! (n - r)!)",
      "nCr = r! / (n - r)!",
      "nCr = (n + r)! / r!"
    ],
    "answer": "nCr = n! / (r! (n - r)!)"
  },
  {
    "question": "What is the value of 0 factorial (0!)?",
    "options": ["0", "1", "Undefined", "Infinity"],
    "answer": "1"
  },
  {
    "question": "If there are 4 shirts and 3 pants, how many different outfits can be made?",
    "options": ["7", "12", "9", "6"],
    "answer": "12"
  },
  {
    "question": "The number of ways to choose a committee of 2 from 4 members is:",
    "options": ["4", "6", "8", "12"],
    "answer": "6"
  },
  {
    "question": "How many 3-digit numbers can be formed using digits 1, 2, 3 without repetition?",
    "options": ["6", "9", "3", "27"],
    "answer": "6"
  },
  {
    "question": "What is the coefficient of x^2 in (1 + x)^5?",
    "options": ["5", "10", "15", "20"],
    "answer": "10"
  },
  {
    "question": "Pigeonhole Principle states:",
    "options": [
      "If n items are put into m containers, and n > m, then at least one container has more than one item.",
      "If m items are put into n containers, and m < n, then one container must be empty.",
      "If all items are equal, then all boxes are full.",
      "It applies only to permutations."
    ],
    "answer": "If n items are put into m containers, and n > m, then at least one container has more than one item."
  },
  {
    "question": "What is the value of (1 + x)^3 using binomial expansion?",
    "options": [
      "1 + 3x + 3x^2 + x^3",
      "1 + x + x^2 + x^3",
      "1 + 2x + 3x^2 + 4x^3",
      "1 + 3x^2 + 3x^3 + x"
    ],
    "answer": "1 + 3x + 3x^2 + x^3"
  },
  {
    "question": "How many 2-letter codes can be made from A, B, C, D without repetition?",
    "options": ["12", "16", "8", "24"],
    "answer": "12"
  },
  {
    "question": "If a password is made of 2 digits followed by 2 letters, how many such passwords are possible?",
    "options": ["67600", "10000", "5200", "260000"],
    "answer": "67600"
  },
  {
    "question": "How many ways are there to select 3 students from 6?",
    "options": ["15", "20", "18", "12"],
    "answer": "20"
  },
  {
    "question": "How many ways to arrange the letters of the word 'LEVEL'?",
    "options": ["60", "120", "240", "30"],
    "answer": "60"
  },
  {
    "question": "What is the sum of all coefficients in (2x + 3)^4?",
    "options": ["625", "256", "729", "81"],
    "answer": "625"
  },
  {
    "question": "What is the generating function for the sequence 1, 1, 1, 1...?",
    "options": [
      "1/(1 - x)",
      "1 + x + x^2 + x^3 + ...",
      "x/(1 - x)",
      "Both A and B"
    ],
    "answer": "Both A and B"
  },
  {
    "question": "Which of the following is NOT true?",
    "options": [
      "nPn = n!",
      "nC0 = 1",
      "nCn = 1",
      "nC1 = 0"
    ],
    "answer": "nC1 = 0"
  }
]

    },


    unit4: {
      name: "unit-04 :  Graph Theory ",
      questions:[
  {
    "question": "What is a graph in graph theory?",
    "options": ["A set of vertices", "A set of edges", "A set of vertices and edges", "A set of numbers"],
    "answer": "A set of vertices and edges"
  },
  {
    "question": "What is the degree of a vertex in an undirected graph?",
    "options": ["Number of edges connected to it", "Number of neighbors", "Sum of all other vertex degrees", "Total number of vertices"],
    "answer": "Number of edges connected to it"
  },
  {
    "question": "Which of the following is a type of graph?",
    "options": ["Simple Graph", "Multigraph", "Pseudograph", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "Which graph has no loops or multiple edges?",
    "options": ["Simple graph", "Multigraph", "Pseudograph", "Directed graph"],
    "answer": "Simple graph"
  },
  {
    "question": "What is a complete graph with 'n' vertices?",
    "options": ["A graph with no edges", "A graph where every pair of vertices is connected", "A graph with n edges", "None"],
    "answer": "A graph where every pair of vertices is connected"
  },
  {
    "question": "How many edges are in a complete graph with 5 vertices?",
    "options": ["5", "10", "15", "20"],
    "answer": "10"
  },
  {
    "question": "In a directed graph, what is the in-degree of a vertex?",
    "options": ["Number of outgoing edges", "Number of loops", "Number of incoming edges", "Number of neighbors"],
    "answer": "Number of incoming edges"
  },
  {
    "question": "A graph is connected if:",
    "options": ["All vertices have the same degree", "It contains a cycle", "There is a path between every pair of vertices", "It has a loop"],
    "answer": "There is a path between every pair of vertices"
  },
  {
    "question": "What is a subgraph?",
    "options": ["A smaller graph with more vertices", "A graph with only loops", "A graph formed by a subset of vertices and edges", "None of these"],
    "answer": "A graph formed by a subset of vertices and edges"
  },
  {
    "question": "Two graphs are isomorphic if:",
    "options": ["They have same number of vertices only", "They look the same", "There exists a one-to-one mapping between vertices preserving adjacency", "They have loops"],
    "answer": "There exists a one-to-one mapping between vertices preserving adjacency"
  },
  {
    "question": "What is a walk in graph theory?",
    "options": ["A path with all distinct vertices", "A sequence of edges and vertices", "Only cycles", "A single vertex"],
    "answer": "A sequence of edges and vertices"
  },
  {
    "question": "A path is a walk in which:",
    "options": ["All edges are loops", "All vertices are the same", "All vertices are distinct", "All edges are distinct"],
    "answer": "All vertices are distinct"
  },
  {
    "question": "What is a cycle in a graph?",
    "options": ["A path that ends where it started", "A walk of one vertex", "A loop", "None"],
    "answer": "A path that ends where it started"
  },
  {
    "question": "Which of the following is true for Eulerian graph?",
    "options": ["All vertices have even degree", "All vertices have odd degree", "Graph is a tree", "Graph is disconnected"],
    "answer": "All vertices have even degree"
  },
  {
    "question": "Which graph contains an Eulerian circuit?",
    "options": ["Graph with odd degree vertices", "Graph with isolated vertex", "Graph where all degrees are even", "Disconnected graph"],
    "answer": "Graph where all degrees are even"
  },
  {
    "question": "A graph is disconnected if:",
    "options": ["All vertices have even degree", "There are no loops", "Not all vertices can be reached from others", "All vertices are connected"],
    "answer": "Not all vertices can be reached from others"
  },
  {
    "question": "Which of these is NOT a valid type of graph?",
    "options": ["Multigraph", "Pseudograph", "Subgraph", "Hexagraph"],
    "answer": "Hexagraph"
  },
  {
    "question": "What is the degree of a vertex in a simple undirected graph with 3 edges connected to it?",
    "options": ["1", "2", "3", "0"],
    "answer": "3"
  },
  {
    "question": "Which of the following always holds true for a simple graph?",
    "options": ["No multiple edges", "No loops", "At most one edge between two vertices", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "The sum of degrees of all vertices in an undirected graph is:",
    "options": ["Equal to number of vertices", "Twice the number of edges", "Half the number of edges", "Equal to number of edges"],
    "answer": "Twice the number of edges"
  },
  {
    "question": "A graph is said to be strongly connected if:",
    "options": ["It has at least one cycle", "There is a directed path between any two vertices", "All vertices have same degree", "None of these"],
    "answer": "There is a directed path between any two vertices"
  },
  {
    "question": "A graph with no cycles is called a:",
    "options": ["Multigraph", "Tree", "Pseudograph", "Loop graph"],
    "answer": "Tree"
  },
  {
    "question": "The number of components in a disconnected graph refers to:",
    "options": ["Total edges", "Total vertices", "Number of isolated parts", "None"],
    "answer": "Number of isolated parts"
  },
  {
    "question": "Which of the following graphs has only one component?",
    "options": ["Disconnected Graph", "Connected Graph", "Graph with loops", "Multigraph"],
    "answer": "Connected Graph"
  },
  {
    "question": "What does a loop contribute to the degree of a vertex in undirected graph?",
    "options": ["0", "1", "2", "Depends on graph"],
    "answer": "2"
  }
]



    },


    unit5: {
      name: "unit-05 : Introduction to Fuzzy Set Theory  ",
      questions: [
  {
    "question": "What is a fuzzy set?",
    "options": ["A set with exact boundaries", "A set with uncertain membership", "A set containing only integers", "A set without elements"],
    "answer": "A set with uncertain membership"
  },
  {
    "question": "Who introduced the concept of fuzzy set theory?",
    "options": ["George Boole", "Isaac Newton", "Lotfi Zadeh", "Albert Einstein"],
    "answer": "Lotfi Zadeh"
  },
  {
    "question": "Which of the following best describes a membership function?",
    "options": ["A function with only 1 or 0", "A function that maps elements to degrees of truth", "A logical operator", "A set of crisp values"],
    "answer": "A function that maps elements to degrees of truth"
  },
  {
    "question": "What is the range of values in a fuzzy membership function?",
    "options": ["Only 0 or 1", "Any integer", "[0, 1]", "[-1, 1]"],
    "answer": "[0, 1]"
  },
  {
    "question": "If μA(x) = 0.7, what does it represent?",
    "options": ["x is not in A", "x definitely belongs to A", "x belongs to A with degree 0.7", "x belongs to all sets"],
    "answer": "x belongs to A with degree 0.7"
  },
  {
    "question": "Which is **not** a fuzzy set operation?",
    "options": ["Union", "Intersection", "Complement", "Division"],
    "answer": "Division"
  },
  {
    "question": "In fuzzy set theory, the union operation is defined using:",
    "options": ["Minimum", "Maximum", "Addition", "Multiplication"],
    "answer": "Maximum"
  },
  {
    "question": "Fuzzy intersection is calculated using:",
    "options": ["max(μA(x), μB(x))", "min(μA(x), μB(x))", "μA(x) + μB(x)", "1 - μA(x)"],
    "answer": "min(μA(x), μB(x))"
  },
  {
    "question": "Complement of a fuzzy set A is given by:",
    "options": ["μA(x)", "1 - μA(x)", "μA(x) + 1", "0"],
    "answer": "1 - μA(x)"
  },
  {
    "question": "A fuzzy proposition expresses:",
    "options": ["An absolute fact", "A binary result", "A statement with a degree of truth", "Only 0 or 1"],
    "answer": "A statement with a degree of truth"
  },
  {
    "question": "Which of the following is a crisp set?",
    "options": ["{x | μ(x) = 0.3}", "{x | μ(x) = 0 or 1}", "{x | μ(x) ∈ [0,1]}", "{x | μ(x) = 0.5}"],
    "answer": "{x | μ(x) = 0 or 1}"
  },
  {
    "question": "Which of the following is **true** for fuzzy sets?",
    "options": ["They only contain whole numbers", "Each element is either fully in or out", "Membership is gradual", "They cannot be used in logic"],
    "answer": "Membership is gradual"
  },
  {
    "question": "Which operation uses '1 - μA(x)' in fuzzy logic?",
    "options": ["Union", "Intersection", "Complement", "Truth Value"],
    "answer": "Complement"
  },
  {
    "question": "Which of these is a typical use case of fuzzy sets?",
    "options": ["Precise calculations", "Binary search", "Modeling uncertainty", "Sorting algorithms"],
    "answer": "Modeling uncertainty"
  },
  {
    "question": "The degree of membership in fuzzy set theory lies between:",
    "options": ["0 and 1 inclusive", "Only 0", "Only 1", "0 and 2"],
    "answer": "0 and 1 inclusive"
  },
  {
    "question": "What is the fuzzy logic equivalent of 'AND'?",
    "options": ["max", "min", "average", "sum"],
    "answer": "min"
  },
  {
    "question": "What is the fuzzy logic equivalent of 'OR'?",
    "options": ["min", "max", "difference", "mean"],
    "answer": "max"
  },
  {
    "question": "Which function maps an input to a fuzzy degree?",
    "options": ["Truth table", "Set function", "Membership function", "Disjoint function"],
    "answer": "Membership function"
  },
  {
    "question": "Fuzzy sets are useful when:",
    "options": ["Problems are well-defined", "We have complete data", "Boundaries are not clear", "Everything is binary"],
    "answer": "Boundaries are not clear"
  },
  {
    "question": "Which logic generalizes classical logic to handle partial truth?",
    "options": ["Boolean logic", "Fuzzy logic", "Predicate logic", "Symbolic logic"],
    "answer": "Fuzzy logic"
  },
  {
    "question": "In fuzzy logic, if A = {x | μA(x) = 0.9}, then x is:",
    "options": ["Not a member", "Crisp member", "Strongly related", "Almost a full member"],
    "answer": "Almost a full member"
  },
  {
    "question": "Which one is not a type of fuzzy membership function?",
    "options": ["Triangular", "Gaussian", "Trapezoidal", "Polynomial"],
    "answer": "Polynomial"
  },
  {
    "question": "Which of these functions is commonly used for fuzzification?",
    "options": ["Sigmoid", "Linear", "Cubic", "None"],
    "answer": "Sigmoid"
  },
  {
    "question": "Fuzzy logic is widely used in:",
    "options": ["Robotics", "Control systems", "AI", "All of these"],
    "answer": "All of these"
  },
  {
    "question": "A fuzzy rule base uses:",
    "options": ["Only crisp values", "Truth tables", "If-Then rules", "Set theory equations"],
    "answer": "If-Then rules"
  }
]



    },

  }
},





   Digital_Electronics_and_Microprocessor  : {
  name: " Digital Electronics and Microprocessor ",
  units: {
    unit1: {
      name: "unit-01 :  Number Systems, Boolean Algebra and Logic Gates   ",
      questions: [
  {
    "question": "Which number system has base 2?",
    "options": ["Decimal", "Binary", "Octal", "Hexadecimal"],
    "answer": "Binary"
  },
  {
    "question": "Which binary number is equivalent to decimal 10?",
    "options": ["1000", "1010", "1100", "1111"],
    "answer": "1010"
  },
  {
    "question": "Which of the following is NOT a valid binary number?",
    "options": ["1010", "1101", "1002", "1111"],
    "answer": "1002"
  },
  {
    "question": "How many bits are in a nibble?",
    "options": ["2", "4", "8", "16"],
    "answer": "4"
  },
  {
    "question": "1's complement of binary number 1010 is:",
    "options": ["0101", "1001", "1111", "0101"],
    "answer": "0101"
  },
  {
    "question": "2's complement of binary 1101 is:",
    "options": ["0010", "0101", "0011", "0011"],
    "answer": "0011"
  },
  {
    "question": "Which code is a non-weighted code?",
    "options": ["BCD", "Excess-3", "Gray", "Decimal"],
    "answer": "Gray"
  },
  {
    "question": "Gray code for binary 1000 is:",
    "options": ["1100", "1010", "1101", "1100"],
    "answer": "1100"
  },
  {
    "question": "What is the base of hexadecimal number system?",
    "options": ["2", "8", "10", "16"],
    "answer": "16"
  },
  {
    "question": "What is the decimal value of binary 1111?",
    "options": ["14", "15", "16", "13"],
    "answer": "15"
  },
  {
    "question": "What is the output of an AND gate with inputs 1 and 0?",
    "options": ["1", "0", "2", "Undefined"],
    "answer": "0"
  },
  {
    "question": "The output of an OR gate is 1 if:",
    "options": ["All inputs are 0", "Any input is 1", "All inputs are 1", "None of these"],
    "answer": "Any input is 1"
  },
  {
    "question": "Which gate produces the complement of input?",
    "options": ["AND", "OR", "NOT", "XOR"],
    "answer": "NOT"
  },
  {
    "question": "Which of these is a universal gate?",
    "options": ["XOR", "NAND", "AND", "NOT"],
    "answer": "NAND"
  },
  {
    "question": "Which gate has output 1 only when inputs are different?",
    "options": ["AND", "OR", "XNOR", "XOR"],
    "answer": "XOR"
  },
  {
    "question": "DeMorgan's first theorem is:",
    "options": ["(A + B)' = A' + B'", "(A + B)' = A'.B'", "(AB)' = A + B", "(AB)' = A' + B'"],
    "answer": "(A + B)' = A'.B'"
  },
  {
    "question": "How many entries are there in a 3-variable truth table?",
    "options": ["4", "6", "8", "16"],
    "answer": "8"
  },
  {
    "question": "Which gate is equivalent to a NOT gate followed by an AND gate?",
    "options": ["NOR", "NAND", "XOR", "AND"],
    "answer": "NAND"
  },
  {
    "question": "Which logic gate is used for binary addition?",
    "options": ["AND", "OR", "XOR", "NOT"],
    "answer": "XOR"
  },
  {
    "question": "BCD code uses how many bits?",
    "options": ["2", "4", "6", "8"],
    "answer": "4"
  },
  {
    "question": "Which of the following simplifies Boolean expressions?",
    "options": ["Truth Table", "K-Map", "Timing Diagram", "Waveform"],
    "answer": "K-Map"
  },
  {
    "question": "What is the minimum number of variables used in K-map for 4 inputs?",
    "options": ["2", "3", "4", "5"],
    "answer": "4"
  },
  {
    "question": "A logic gate has 2 inputs and its output is 0 only when both inputs are 1. What is the gate?",
    "options": ["OR", "NAND", "NOR", "XOR"],
    "answer": "NAND"
  },
  {
    "question": "What is the hexadecimal of binary 1110 1101?",
    "options": ["ED", "DE", "EF", "DF"],
    "answer": "ED"
  },
  {
    "question": "Excess-3 code for decimal 2 is:",
    "options": ["0101", "0110", "0011", "1000"],
    "answer": "0101"
  },
  {
    "question": "What is the binary representation of decimal number 255?",
    "options": ["11111111", "00001111", "10101010", "11001100"],
    "answer": "11111111"
  }
]



    },


    unit2: {
      name: "unit-02 : Combinational and Sequential Logic Circuits ",
      questions: [
  {
    "question": "Which logic circuit adds two binary digits without carry input?",
    "options": ["Half Adder", "Full Adder", "Half Subtractor", "Full Subtractor"],
    "answer": "Half Adder"
  },
  {
    "question": "Which logic circuit adds two binary digits with carry input?",
    "options": ["Half Adder", "Full Adder", "Decoder", "MUX"],
    "answer": "Full Adder"
  },
  {
    "question": "A Full Subtractor has how many inputs and outputs?",
    "options": ["2 inputs, 1 output", "3 inputs, 2 outputs", "3 inputs, 3 outputs", "2 inputs, 2 outputs"],
    "answer": "3 inputs, 2 outputs"
  },
  {
    "question": "What is the output of a 2:1 multiplexer?",
    "options": ["2", "4", "1", "0"],
    "answer": "1"
  },
  {
    "question": "How many selection lines are needed for 4:1 multiplexer?",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "question": "In a 4:1 multiplexer, how many input lines are there?",
    "options": ["1", "2", "4", "8"],
    "answer": "4"
  },
  {
    "question": "A demultiplexer performs the opposite function of a:",
    "options": ["Decoder", "Encoder", "Multiplexer", "Adder"],
    "answer": "Multiplexer"
  },
  {
    "question": "How many outputs does a 1:4 demultiplexer have?",
    "options": ["1", "2", "4", "8"],
    "answer": "4"
  },
  {
    "question": "Which circuit converts binary code into a single active output?",
    "options": ["Decoder", "Encoder", "Multiplexer", "Adder"],
    "answer": "Decoder"
  },
  {
    "question": "Which circuit converts active inputs into binary code?",
    "options": ["Decoder", "Encoder", "Counter", "MUX"],
    "answer": "Encoder"
  },
  {
    "question": "The output of an SR flip-flop when S=1 and R=1 is:",
    "options": ["1", "0", "Toggle", "Invalid"],
    "answer": "Invalid"
  },
  {
    "question": "Which flip-flop has only one input and toggles the output?",
    "options": ["SR", "JK", "T", "D"],
    "answer": "T"
  },
  {
    "question": "Which flip-flop eliminates the invalid state of SR flip-flop?",
    "options": ["T", "D", "JK", "None"],
    "answer": "JK"
  },
  {
    "question": "What is the key characteristic of D flip-flop?",
    "options": ["Two inputs", "Toggle output", "Single data input", "Asynchronous reset"],
    "answer": "Single data input"
  },
  {
    "question": "Master-Slave JK flip-flop solves which problem?",
    "options": ["Asynchronous input", "Race condition", "Latch", "Invalid input"],
    "answer": "Race condition"
  },
  {
    "question": "Which register shifts data left or right one bit at a time?",
    "options": ["Counter", "Shift Register", "Latch", "Adder"],
    "answer": "Shift Register"
  },
  {
    "question": "SISO stands for:",
    "options": ["Single In Single Out", "Serial In Serial Out", "Simple In Simple Out", "None of these"],
    "answer": "Serial In Serial Out"
  },
  {
    "question": "SIPO register is used to:",
    "options": ["Convert serial to parallel", "Store data", "Reset memory", "Count bits"],
    "answer": "Convert serial to parallel"
  },
  {
    "question": "PISO register converts:",
    "options": ["Parallel to Serial", "Serial to Parallel", "Data to Code", "Code to Data"],
    "answer": "Parallel to Serial"
  },
  {
    "question": "How many flip-flops are required for a 4-bit shift register?",
    "options": ["2", "3", "4", "5"],
    "answer": "4"
  },
  {
    "question": "Modulus of a counter is defined as:",
    "options": ["Number of states", "Number of flip-flops", "Output lines", "Bits stored"],
    "answer": "Number of states"
  },
  {
    "question": "Ripple counters are also known as:",
    "options": ["Synchronous counters", "Asynchronous counters", "Ring counters", "Binary counters"],
    "answer": "Asynchronous counters"
  },
  {
    "question": "Synchronous counter differs from asynchronous in:",
    "options": ["Speed", "Power", "Memory", "Resetting"],
    "answer": "Speed"
  },
  {
    "question": "A Ring counter is a type of:",
    "options": ["Up Counter", "Synchronous Counter", "Binary Counter", "Down Counter"],
    "answer": "Synchronous Counter"
  },
  {
    "question": "Which type of counter counts both up and down?",
    "options": ["Up Counter", "Down Counter", "Up/Down Counter", "Ring Counter"],
    "answer": "Up/Down Counter"
  },
  {
    "question": "Which device is used in applications like data routing, function generation etc.?",
    "options": ["Adder", "Decoder", "Multiplexer", "Counter"],
    "answer": "Multiplexer"
  }
]



    },


    unit3: {
      name: "unit-03 : Data Converters and Memory Devices ",
      questions: [
  {
    "question": "Which component is used to convert analog signal to digital?",
    "options": ["DAC", "ADC", "Op-Amp", "Multiplexer"],
    "answer": "ADC"
  },
  {
    "question": "Which component is used to convert digital signal to analog?",
    "options": ["ADC", "Counter", "DAC", "Register"],
    "answer": "DAC"
  },
  {
    "question": "In inverting amplifier using Op-Amp, what is the phase difference between input and output?",
    "options": ["0°", "90°", "180°", "360°"],
    "answer": "180°"
  },
  {
    "question": "Which of the following is a type of memory that loses its content when power is turned off?",
    "options": ["ROM", "EEPROM", "RAM", "Flash"],
    "answer": "RAM"
  },
  {
    "question": "Which memory is read-only and cannot be modified easily?",
    "options": ["RAM", "ROM", "Cache", "SRAM"],
    "answer": "ROM"
  },
  {
    "question": "Which of the following is a **non-volatile** memory?",
    "options": ["SRAM", "DRAM", "ROM", "Cache"],
    "answer": "ROM"
  },
  {
    "question": "Which type of Op-Amp configuration provides same phase output as input?",
    "options": ["Inverting", "Non-inverting", "Differential", "None of these"],
    "answer": "Non-inverting"
  },
  {
    "question": "Which of the following memory is **fastest** in access?",
    "options": ["Hard disk", "RAM", "ROM", "Cache"],
    "answer": "Cache"
  },
  {
    "question": "Which of the following memory is used for temporary storage during processing?",
    "options": ["ROM", "RAM", "CD-ROM", "Flash"],
    "answer": "RAM"
  },
  {
    "question": "Which of the following Op-Amp is used for signal inversion?",
    "options": ["Inverting Amplifier", "Non-Inverting Amplifier", "Comparator", "Integrator"],
    "answer": "Inverting Amplifier"
  },
  {
    "question": "Which digital converter gives the output in steps or discrete values?",
    "options": ["ADC", "DAC", "Modulator", "Multiplexer"],
    "answer": "DAC"
  },
  {
    "question": "Which of the following is a **volatile** memory?",
    "options": ["ROM", "EEPROM", "Flash", "DRAM"],
    "answer": "DRAM"
  },
  {
    "question": "Which memory type is often used in BIOS?",
    "options": ["SRAM", "EEPROM", "DRAM", "SDRAM"],
    "answer": "EEPROM"
  },
  {
    "question": "Which Op-Amp mode is ideal for summing multiple inputs?",
    "options": ["Non-inverting", "Inverting", "Adder", "Differential"],
    "answer": "Adder"
  },
  {
    "question": "Which device stores data permanently even when power is off?",
    "options": ["RAM", "ROM", "SRAM", "Cache"],
    "answer": "ROM"
  },
  {
    "question": "Which type of ADC is fastest?",
    "options": ["Flash", "Dual Slope", "Successive Approximation", "Sigma-Delta"],
    "answer": "Flash"
  },
  {
    "question": "In Op-Amp, the gain of an inverting amplifier is given by?",
    "options": ["Rf/Rin", "-Rf/Rin", "1 + (Rf/Rin)", "Rin/Rf"],
    "answer": "-Rf/Rin"
  },
  {
    "question": "Which of the following is NOT a type of RAM?",
    "options": ["SRAM", "DRAM", "EEPROM", "SDRAM"],
    "answer": "EEPROM"
  },
  {
    "question": "Which type of memory is used in pen drives?",
    "options": ["ROM", "Flash", "DRAM", "SRAM"],
    "answer": "Flash"
  },
  {
    "question": "Which digital converter takes digital input and gives continuous analog output?",
    "options": ["ADC", "DAC", "Op-Amp", "MUX"],
    "answer": "DAC"
  },
  {
    "question": "Which of these stores instructions permanently?",
    "options": ["RAM", "ROM", "Hard Disk", "Cache"],
    "answer": "ROM"
  },
  {
    "question": "The primary function of Op-Amp is?",
    "options": ["Amplify Voltage", "Store Data", "Convert Analog to Digital", "Switch Signals"],
    "answer": "Amplify Voltage"
  },
  {
    "question": "Which memory is used for high-speed temporary storage close to the processor?",
    "options": ["ROM", "Flash", "Cache", "DRAM"],
    "answer": "Cache"
  },
  {
    "question": "In an Op-Amp, the differential input means?",
    "options": ["Only one input", "Output is same as input", "Difference of two inputs is amplified", "Both inputs are shorted"],
    "answer": "Difference of two inputs is amplified"
  },
  {
    "question": "Which component provides high gain and high input impedance?",
    "options": ["Multiplexer", "Counter", "Op-Amp", "DAC"],
    "answer": "Op-Amp"
  }
]



    },


    unit4: {
      name: "unit-04 : Basics, Instruction Set and Programming of 8085 Microprocessor  ",
      questions:[
  {
    "question": "Which microprocessor is called an 8-bit microprocessor?",
    "options": ["8085", "8086", "8051", "80286"],
    "answer": "8085"
  },
  {
    "question": "Which pin in 8085 is used to reset the microprocessor?",
    "options": ["RESET IN", "RESET OUT", "TRAP", "INTR"],
    "answer": "RESET IN"
  },
  {
    "question": "What is the size of the address bus in 8085?",
    "options": ["8-bit", "16-bit", "32-bit", "64-bit"],
    "answer": "16-bit"
  },
  {
    "question": "Which register in 8085 holds the address of the next instruction?",
    "options": ["Program Counter", "Stack Pointer", "Accumulator", "Instruction Register"],
    "answer": "Program Counter"
  },
  {
    "question": "Which instruction is used to copy data from one register to another in 8085?",
    "options": ["MOV", "MVI", "LDA", "STA"],
    "answer": "MOV"
  },
  {
    "question": "Which interrupt has the highest priority in 8085?",
    "options": ["TRAP", "RST7.5", "RST6.5", "INTR"],
    "answer": "TRAP"
  },
  {
    "question": "How many flags are there in 8085?",
    "options": ["3", "5", "7", "9"],
    "answer": "5"
  },
  {
    "question": "What is the function of the accumulator?",
    "options": ["Stores data temporarily", "Stores results of arithmetic and logic operations", "Holds memory addresses", "Increments instructions"],
    "answer": "Stores results of arithmetic and logic operations"
  },
  {
    "question": "Which is not a control instruction?",
    "options": ["NOP", "HLT", "DI", "ADD"],
    "answer": "ADD"
  },
  {
    "question": "What does the instruction MVI A, 32H do?",
    "options": ["Move 32H to register A", "Multiply A with 32H", "Move contents of memory to A", "None of the above"],
    "answer": "Move 32H to register A"
  },
  {
    "question": "Which addressing mode uses the instruction LDA 2050H?",
    "options": ["Direct", "Register", "Immediate", "Indirect"],
    "answer": "Direct"
  },
  {
    "question": "Which instruction is used for unconditional jump?",
    "options": ["JMP", "JC", "JNZ", "JZ"],
    "answer": "JMP"
  },
  {
    "question": "Instruction LXI H, 2050H loads:",
    "options": ["HL pair with 2050H", "H register only", "L register only", "Accumulator with 2050H"],
    "answer": "HL pair with 2050H"
  },
  {
    "question": "Instruction INR B does what?",
    "options": ["Increments register B by 1", "Inverts B", "Decrements B", "None of the above"],
    "answer": "Increments register B by 1"
  },
  {
    "question": "Which instruction transfers program control to a subroutine?",
    "options": ["CALL", "RET", "JMP", "MOV"],
    "answer": "CALL"
  },
  {
    "question": "What is the function of the instruction RAL?",
    "options": ["Rotate accumulator left through carry", "Right shift", "Load memory", "Reset carry"],
    "answer": "Rotate accumulator left through carry"
  },
  {
    "question": "Which instruction is used to enable interrupts in 8085?",
    "options": ["EI", "DI", "RST", "SIM"],
    "answer": "EI"
  },
  {
    "question": "The size of the instruction set in 8085 is:",
    "options": ["246 instructions", "74 instructions", "256 instructions", "100 instructions"],
    "answer": "246 instructions"
  },
  {
    "question": "What is the role of SIM instruction in 8085?",
    "options": ["Set Interrupt Mask", "Set Input Mode", "Shift Instruction", "Save Interrupt Memory"],
    "answer": "Set Interrupt Mask"
  },
  {
    "question": "What is the machine cycle for instruction MOV A, B?",
    "options": ["1", "2", "3", "4"],
    "answer": "1"
  },
  {
    "question": "Which instruction clears the accumulator?",
    "options": ["XRA A", "MOV A,0", "SUB A", "LDA 00H"],
    "answer": "XRA A"
  },
  {
    "question": "The immediate addressing mode example is:",
    "options": ["MVI A, 05H", "MOV A,B", "LDA 2050H", "LDAX B"],
    "answer": "MVI A, 05H"
  },
  {
    "question": "Which instruction is used to halt the processor?",
    "options": ["HLT", "NOP", "JMP", "STP"],
    "answer": "HLT"
  },
  {
    "question": "How many general-purpose registers are there in 8085?",
    "options": ["6", "8", "4", "2"],
    "answer": "6"
  },
  {
    "question": "What is the function of the instruction PUSH B?",
    "options": ["Stores B-C register pair on stack", "Pushes B only", "Pushes accumulator", "None"],
    "answer": "Stores B-C register pair on stack"
  }
]


    },


    unit5: {
      name: "unit-05 : Interfacing with 8085 Microprocessor  ",
      questions: [
  {
    "question": "Which IC is known as Programmable Peripheral Interface?",
    "options": ["8253", "8255", "8279", "8251"],
    "answer": "8255"
  },
  {
    "question": "How many I/O ports can 8255 provide?",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "question": "The control word for 8255 is used to:",
    "options": ["Start conversion", "Set port modes", "Reset microprocessor", "Clear memory"],
    "answer": "Set port modes"
  },
  {
    "question": "How many modes of operation does 8255 have?",
    "options": ["2", "3", "4", "5"],
    "answer": "3"
  },
  {
    "question": "Which mode of 8255 allows bit-level control?",
    "options": ["Mode 0", "Mode 1", "Mode 2", "BSR mode"],
    "answer": "BSR mode"
  },
  {
    "question": "Which of the following is a timer/counter chip?",
    "options": ["8255", "8253", "8279", "8251"],
    "answer": "8253"
  },
  {
    "question": "The number of counters in 8253 is:",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "question": "The 8253/8254 timer is used to:",
    "options": ["Control memory", "Generate accurate delays", "Control interrupts", "Control clock"],
    "answer": "Generate accurate delays"
  },
  {
    "question": "In 8253, each counter is of how many bits?",
    "options": ["4-bit", "8-bit", "12-bit", "16-bit"],
    "answer": "16-bit"
  },
  {
    "question": "Which of the following is NOT a function of 8255?",
    "options": ["Parallel I/O", "Serial communication", "Bit set/reset", "Mode selection"],
    "answer": "Serial communication"
  },
  {
    "question": "Which chip helps in keyboard/display interface?",
    "options": ["8255", "8279", "8253", "8237"],
    "answer": "8279"
  },
  {
    "question": "Which chip is used for serial communication?",
    "options": ["8251", "8255", "8253", "8254"],
    "answer": "8251"
  },
  {
    "question": "Which chip is used for DMA operations?",
    "options": ["8257", "8253", "8255", "8251"],
    "answer": "8257"
  },
  {
    "question": "Which of the following memory chips is volatile?",
    "options": ["ROM", "EPROM", "RAM", "EEPROM"],
    "answer": "RAM"
  },
  {
    "question": "Which memory is used to store program permanently?",
    "options": ["RAM", "EPROM", "EEPROM", "ROM"],
    "answer": "ROM"
  },
  {
    "question": "EEPROM stands for:",
    "options": ["Erasable Electrically Programmable ROM", "Electrically Erasable Programmable ROM", "Extended EPROM", "Extra Erasable ROM"],
    "answer": "Electrically Erasable Programmable ROM"
  },
  {
    "question": "Which chip is used to convert serial data to parallel data?",
    "options": ["8251", "8255", "8279", "8237"],
    "answer": "8251"
  },
  {
    "question": "Which port of 8255 can be split into two 4-bit ports?",
    "options": ["Port A", "Port B", "Port C", "All ports"],
    "answer": "Port C"
  },
  {
    "question": "What is the default mode of operation in 8255?",
    "options": ["Mode 0", "Mode 1", "Mode 2", "BSR mode"],
    "answer": "Mode 0"
  },
  {
    "question": "Which mode of 8255 supports handshaking signals?",
    "options": ["Mode 0", "Mode 1", "Mode 2", "BSR"],
    "answer": "Mode 1"
  },
  {
    "question": "Which 8255 port is used in Mode 2 (Bidirectional data transfer)?",
    "options": ["Port A", "Port B", "Port C", "None"],
    "answer": "Port A"
  },
  {
    "question": "In BSR mode, 8255 controls which port bits?",
    "options": ["Port A", "Port B", "Port C lower", "All of Port C"],
    "answer": "All of Port C"
  },
  {
    "question": "How many total pins does 8255 IC have?",
    "options": ["20", "30", "40", "50"],
    "answer": "40"
  },
  {
    "question": "8253 operates in how many modes?",
    "options": ["4", "6", "8", "10"],
    "answer": "6"
  },
  {
    "question": "Which is a programmable timer device?",
    "options": ["8251", "8253", "8279", "8237"],
    "answer": "8253"
  }
]



    },

  }
},
  
};

const subjectSelect = document.getElementById('subjectSelect');
const unitSelect = document.getElementById('unitSelect');
const unitInfo = document.getElementById('unit-info');
const quizBox = document.getElementById('quiz-box');
const questionText = document.getElementById('question-text');
const optionsBox = document.getElementById('options-box');
const timerDisplay = document.getElementById('timer');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result-text');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function populateSubjects() {
  subjectSelect.innerHTML = '<option value="">-- Choose Subject --</option>';
  for (const key in quizData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = quizData[key].name;
    subjectSelect.appendChild(option);
  }
}

function loadUnits() {
  const selectedSubject = subjectSelect.value;
  unitSelect.innerHTML = '<option value="">-- Choose Unit --</option>';
  unitSelect.disabled = true;
  unitInfo.textContent = '';

  if (!selectedSubject || !quizData[selectedSubject]) return;

  const units = quizData[selectedSubject].units;
  for (const unitKey in units) {
    const unit = units[unitKey];
    const option = document.createElement('option');
    option.value = unitKey;
    option.textContent = `${unit.name} (${unit.questions.length} Questions)`;
    unitSelect.appendChild(option);
  }
  unitSelect.disabled = false;
}

function showQuestionCount() {
  const subject = subjectSelect.value;
  const unit = unitSelect.value;
  if (subject && unit) {
    const count = quizData[subject].units[unit].questions.length;
    unitInfo.textContent = `🧠 Total Questions: ${count}`;
  } else {
    unitInfo.textContent = '';
  }
}

function startQuiz() {
  const subject = subjectSelect.value;
  const unit = unitSelect.value;
  if (!subject || !unit) {
    alert("Please select both subject and unit.");
    return;
  }

  currentQuestions = quizData[subject].units[unit].questions;
  currentIndex = 0;
  score = 0;
  document.getElementById('question-screen').classList.remove('hidden');
  document.getElementById('start-screen').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = `⏱️ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);

  const q = currentQuestions[currentIndex];
  questionText.textContent = `Q.${currentIndex + 1}: ${q.question}`;
  optionsBox.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('div');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selectedBtn, correctAnswer) {
  clearInterval(timer);
  const options = document.querySelectorAll('.option');
  options.forEach(btn => {
    if (btn.textContent === correctAnswer) btn.classList.add('correct');
    else if (btn === selectedBtn) btn.classList.add('wrong');
    btn.onclick = null;
  });

  if (selectedBtn.textContent === correctAnswer) score++;

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) showQuestion();
  else showResult();
}

function showResult() {
  document.getElementById('question-screen').classList.add('hidden');
  document.getElementById('result-box').classList.remove('hidden');

  const percent = Math.round((score / currentQuestions.length) * 100);
  document.getElementById('result-text').textContent = `You scored ${score}/${currentQuestions.length} (${percent}%)`;
}


window.onload = populateSubjects;
