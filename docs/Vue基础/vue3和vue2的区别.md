---
title: vue3和vue2的区别
date: '2022-11-22'
categories:
 - Vue3
tags:
 - vue3

---
# {{ $frontmatter.title }}

## 原理方面

- 响应式原理利用 proxy 
    - vue3并不是完全抛弃了defineProperty,通过reactive.定义的响应式数据使用proxy包装出来，而ref还是用的defineProperty去给一个空对象，定义了一个value属性来做的响应式

## 性能优化
- vue3利用函数式编程可以按需引入充分配合tree-shaking，让打包体积更小
- 静态节点标记
- 推荐hook
    - 易于理解和维护（允许你根据功能来组织代码，而不是根据选项），
    - 更好的代码重用、避免命名冲突：你可以将相关逻辑封装到自定义函数中，然后在组件中按需使用，而不需要关心命名冲突或组件之间的耦合问题

## 生命周期
- 没有 beforeCreated 和 create 

## 组合式api
- 相同的业务逻辑可以写在一起


## 速度更快
- 配合 vite 

  