var store = [{
        "title": "STAT110: The Probability course you don't want to miss",
        "excerpt":"I have always been fascinated by probability and statistics ever since I was in high school. I have taken a few courses in probability from school and online courses. But I would say that Joe’s probability course is one of my favorite courses of all time! It helped me gasp...","categories": ["stat"],
        "tags": ["probability","stat","courses"],
        "url": "http://localhost:4000/stat/post-stat110-probability/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/stat110logo.jpg"
      },{
        "title": "Intro to data structure and algorithm Part I",
        "excerpt":"This is Part I of the intro to data structure and algo series. See others here.     test code block here: DFS class Solution: def subsets(self, nums: List[int]) -&gt; List[List[int]]: #backtracking n = len(nums) if n==0: return [] def dfs(i, curr_path, res): res.append(curr_path) if len(curr_path)==n: return for j in...","categories": [],
        "tags": ["algorithm","data structure","dfs","bfs","graph"],
        "url": "http://localhost:4000/post-algorithm-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/stat110logo.jpg"
      },{
        "title": "The Little Schemer Reading Note Part I",
        "excerpt":"The Little Schemer is an great book writen by Daniel P. Friedman and Matthias Felleisen. The book introduced concepts in computer science and functional programming in Scheme/Lisp. It is about recursion at its core. (look at the cover of the book and you will soon find out!) The authors mentioned...","categories": ["book"],
        "tags": ["recursion","lisp","scheme","book"],
        "url": "http://localhost:4000/book/post-lisp-little-schemer-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/The_little_schemer.jpg"
      },{
        "title": "Intro to data structure and algorithm Part II",
        "excerpt":"This is Part II of the intro to data structure and algo series. See others here.     BFS in Trees structure: max Depth in a tree def maxDepth(self, root: TreeNode) -&gt; int: #non-recursive, queue if not root: return 0 q = collections.deque() q.append(root) depth = 0 while q: depth+=1...","categories": [],
        "tags": ["algorithm","data structure","dfs","bfs","graph"],
        "url": "http://localhost:4000/post-algorithm-part-2/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/logo-data-structures-algorithms.png"
      }]
