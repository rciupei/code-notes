---
title: Data structures
emoji:
tags:
  - cs
link: https://www.youtube.com/watch?v=RBSGKlAvoiM
---

## Abstract Data Type

An **abstract data type** (ADT) is an abstraction of a data structure which provides only the interface to which a data structure must adhere to.

The interface does not give any specific details about how something should be implemented or in what programming language

e.g.

| Abstraction (ADT) | Implementation(DS)                                                      |
| ----------------- | ----------------------------------------------------------------------- |
| List              | Dynamic Array <br/> Linked List                                         |
| Queue             | Linked List based <br/> Queue Array Based Queue <br/> Stack based Queue |
| Map               | Tree Map <br/> Hash Map / Hash Table                                    |
| Vehicle           | Golf Cart <br/> Bicycle <br/> Smart Car                                 |

## Computational complexity

How much time and space needs an algorithm to finish?

### Big-O Notation

Big-O notation gives an upper bound
of the computational complexity of
an algorithm in the worst case.

This helps us quantify performance
of algorithms as the input size
becomes arbitrarily large.

n - The size of the input
Complexities ordered in from smallest to largest

| Time               | Complexitiy  |
| ------------------ | ------------ |
| Constant Time:     | O(1)         |
| Logarithmic Time:  | O(log(n))    |
| Linear Time:       | O(n)         |
| Linearithmic Time: | O(nlog(n))   |
| Quadratic Time:    | O(n2)        |
| Cubic Time:        | O(n3)        |
| Exponential Time:  | O(bn), b > 1 |
| Factorial Time:    | O(n!)        |
