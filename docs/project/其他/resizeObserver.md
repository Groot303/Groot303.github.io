## window.resize

- window.resize事件能帮我们监听窗口大小的变化。但是reize事件会在一秒内触发将近60次，所以很容易在改变窗口大小时导致性能问题，因为它会监听每个元素的大小变化，如果我们只想监听某一个元素的变化的话，就需要用到resizeObserver这个api

## ResizeObserver

- 是一个构造函数，可以实时监听到每一项的高度变化

#### 用法

```js
const resizeObserver = new ResizeObserver(entries => {
    console.log('我的尺寸变化了');
})

resizeObserver.observe(document.getElementById('box'))

resizeObserver.unobserve(document.getElementById('box'))

resizeObserver.disconnect()
```

- resizeObserver 是返回的一个操作对象，可调用其中的方法来监听、取消监听 DOM 元素等操作。
- observe 方法用于开始观察指定的 Element 或 SVGElement 的尺寸变化。
- entries 参数返回是一个数组，里面包含监听的每个 DOM 元素的相关信息，其中 contentRect 包含的是变化后的内容区域的尺寸信息
- unobserve 结束观察指定的 Element 或 SVGElement
- disconnect 取消和结束目标对象上所有对 Element或 SVGElement 观察

:boom: 这个api可以用在虚拟列表的列表项中如果包含图片，我们无法保证获取到列表真实高度是图片是否完成加载，那么就可以使用这个api对列表项进行监听