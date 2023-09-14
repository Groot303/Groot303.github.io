---
title: MVC、MVP、MVVM模型
categories:
 - Vue2
tags:
 - vue2进阶
 - 数据驱动
---

# {{ $frontmatter.title }}
:boom: **出现背景**
- js的出现让网页变得越来越多样性，但是随着页面的强大，js的代码也会不断膨胀臃肿，和html、css的关系也变得错综复杂，维护起来非常不方便，所以就出现了MVC、MVP、MVVM这些架构设计模式。通过分离关注点的方式来组织代码结构，优化项目代码和提高开发效率。

:boom: **MVC模型**

- Model：负责在数据库中存取数据。处理数据的crud
- View： 呈现给用户的终端界面
- Controller：控制器负责从视图读取数据，控制用户输入，并将数据发送给模型

:one: **优点**
- 在一定程度上对mvc三者做了解耦
- 可维护性高

:two: **缺点**
- model和view还是具有**耦合性**，MVC并**没有限制数据流**，也就是说model和view之间可以互相通信，也可以通过controller进行通信，这样就会导致了**数据来源过于混乱**；controller功能过于单薄，形同虚设。



:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: :heavy_minus_sign::heavy_minus_sign:为了解决MVC出现的问题，就发展出了MVP模型 :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:



:boom: **MVP模型**
- MVP 和 MVC 模型很相似，Model层和View层都差不多，只是Controller层发展成为**Presenter层**
- MVP在MVC基础上，限定了Model和View之间不能直接通信，要通过Presenter通信，让Model和view解耦更加彻底

:red_circle: 但是MVP这个模式也存在问题，Presenter需要知道View和Model的结构，并且在model变动时候需要操作dom来更新view，这样就会导致Presenter层变得十分臃肿，降低了代码的维护性。




:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign: :heavy_minus_sign::heavy_minus_sign:为了解决MVP出现的问题，就发展出了MVP模型 :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:



:boom: **MVVM模型**

- 这个模型设置了一个ViewModel层，把对dom的操作封装在**指令**中，开发者通过指令调用就能实现数据的监听和数据的驱动，使得整体代码变得简洁苗条。
- vm通过**数据劫持**和**发布订阅者模式**，实现了model改变，view自动更新；view更新，model也会自动变化。

:boom: **总结**

- MVVM模型和以上两者的最大区别：
    - ViewModel通过对数据的双向绑定，实现了View和Model之间的数据自动同步。
    - 开发者不用再手动来操作Dom元素，vm会通过diff算法来生成虚拟dom实现页面的更新，开发者只需要专注业务逻辑的处理