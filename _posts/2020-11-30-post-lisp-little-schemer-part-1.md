---
layout: single
title:  "The Little Schemer Reading Note Part I"
header:
  teaser: /assets/images/thumbnails/The_little_schemer.jpg
excerpt: "Recursion, recursion, and recursion... This book will break your mind!"
date:   2020-11-20
category: book
tags: [recursion, lisp, scheme, book]
comments: true
sidebar:
  nav: "docs"
---
![](/assets/images/thumbnails/The_little_schemer.jpg)

### Intro

***The Little Schemer*** is a great book writen by Daniel P. Friedman and Matthias Felleisen. The book introduced concepts in computer science and functional programming in Scheme/Lisp. It is about **recursion** at its core. (Check out the cover of the book and you will find out!)

The authors mentioned in the [preface](https://felleisen.org/matthias/BTLS-preface.html) that:

> *The goal of this book is to teach the reader to think recursively*.


I really love the way the book is structured by asking questions from simple examples and let the readers to think and grasp the concepts along the process. I don't know about LISP or Scheme programing language beforehand but I was able to pick it up through its unique Q&A style of teaching (It's fun and fascinating!). 


Here is the table of contents of *The Little Schemer*. It's pretty light in the first few chapters but quickly gets quite in depth. Especially in last few chapter about lambda and Y-combinator.

- Chapter  1: Toys
- Chapter  2: Do It, Do It Again, and Again, and Again...
- Chapter  3: Cons the Magnificent
- Chapter  4: Numbers Games
- Chapter  5: *Oh My Gawd*: It's Full of Stars
- Chapter  6: Shadows
- Chapter  7: Shadows
- Chapter  8: Lambda the Ultimate
- Chapter  9: ... and Again, and Again, and Again ...
- Chapter 10: What Is the Value of All of This?



### Resource and code

Here are some resources I found very useful when I read through the book. 

- the talk given by 
- [The little schemer repo](https://github.com/pkrumins/the-little-schemer) with code and examples in book 

If you want to run Scheme/LISP on your computer without a Scheme interpreter. Here is a tutorial on how to do so through jupyter notebook

Ok, let's get started! Today we are going through some basic concepts in this book and examples of how functions are defined using recursion.

### Basic concepts

- Basic data types:

`atom`: atom is the basic element 

`list`: list

`S-expression`: basic element, 

`tup`: tuple, list of number

- Basic operations:

`cons`: concatenate between an atom and a list

`car`: the first element in the list

`cdr`: a list consists of the rest of the list l excludes its first element 

`eq?`: check if two element are equal.

`lat?`: if each S-expression in the list is an atom

`member? a l` : if a is a member in l

`rmember? a l`: remove member a from list l

### Examples

Here is an example of how recursion is used almost everywhere in the function definitions:

- Definition of `lat` function (Chp2 p16)

```
(define lat? 
 (lambda (l)
  (cond
   ((null? l) #t )
     ((atom? (car l)) (lat? (cdr l))) 
      (else #f))))
```



The idea to define `lat` function is recurion. It first takes a look at the first element in the list `car l`, if it is an atom, then we will keep using the same function `lat` on the rest of the list `cdr l`. If it's not an atom we return False `#f`.


<i class="far fa-sticky-note"></i> **Note:** 
The first condition `null? l` is very important because it serves as the termination condition to the recursion. The book mentioned it several time in later chapters as well.
{: .notice--info}
{: .text-justify}



- Definition of `lat` function (Chp2 p16)




<i class="far fa-sticky-note"></i> **Up Next:** 
In the part II we will talk more about recursion and lambda in this book. Stay tuned!.
{: .notice--info}
{: .text-justify}

