---
layout: single
title:  "The Little Schemer Reading Note Part I"
header:
  teaser: /assets/images/thumbnails/The_little_schemer.jpg
excerpt: "Recursion, recursion, and more..."
date:   2020-11-20
category: book
tags: [recursion, lisp, scheme, book]
comments: true
sidebar:
  nav: "docs"
---

The Little Schemer is a great book writen by Daniel P. Friedman and Matthias Felleisen. The book introduced concepts in computer science and functional programming in Scheme/Lisp. It is about **recursion** at its core. (Check out the cover of the book and you will find out!)

The authors mentioned in the [preface](https://felleisen.org/matthias/BTLS-preface.html) that:
> *The goal of this book is to teach the reader to think recursively*.


I really love the way the book is structured by asking questions from simple examples and let the readers to think and grasp the concepts along the process. I don't know about Lisp or Scheme language beforehand but I was able to pick it up through its unique Q&A style of teaching (It's fascinating!). It's pretty light in the first few chapters but quickly gets quite in depth. Especially chapter 9 & 10.

Here are some basic concepts:

- Basic data types:

`atom`: atom is the basic element 

`list`: list

`S-expression`: basic element, 

`tup`: tuple, list of number

- Basic operations:

`cons`: concatenate between an atom and a list

`car l`: the first element in the list l

`cdr`l: a list consists of the rest of the list l excludes its first element 

`eq?`:

`lat?l`: if each S-expression in the list l is an atom

`member?a l` : if a is a member in l

`first`: 

`rmember?`:

Here is an example of how recursion is used almost everywhere in the function definitions:

Definition of `lat` (Chp2 p16)

```
(define lat? 
 (lambda (l)
  (cond
   ((null? l) #t )
     ((atom? (car l)) (lat? (cdr l))) 
      (else #f))))
```



The idea to define `lat` function is recurion. It first takes a look at the first element in the list `car l`, if it is an atom, then we will keep using the same function `lat` on the rest of the list `cdr l`. If it's not an atom we return True `#t`.

Note that the first condition `null? l` is very important because it serves as the termination condition to the recursion. The book mentioned it several time in later chapters as well.





- Up Next

In the part II we will talk more about recursion and lambda in this book. Stay tuned!





