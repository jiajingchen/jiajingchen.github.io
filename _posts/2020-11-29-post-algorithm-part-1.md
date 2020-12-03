---
layout: single
title:  "Intro to data structure and algorithm Part I"
header:
  teaser: /assets/images/thumbnails/logo-data-structures-algorithms.png
excerpt: "DFS and backtracking "
date:   2020-11-20
category: 
tags: [algorithm, data structure, dfs, bfs, graph]
comments: true
sidebar:
  nav: "docs"
---

_This is Part I of the intro to data structure and algo series. See others here._
{: .notice--primary}
&nbsp;
&nbsp;

test code block here:

- DFS

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        #backtracking
        n = len(nums)
        if n==0:
            return []
        def dfs(i, curr_path, res):
            res.append(curr_path)
            if len(curr_path)==n:
                return
            for j in range(i,n):
                dfs(j+1, curr_path+[nums[j]], res)
        res = []
        curr_path = []
        dfs(0, curr_path, res)
        return res

```


- BFS
