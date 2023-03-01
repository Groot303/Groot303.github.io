# vue3 关于组件props的类型标注,基于 `<script setup>`

##### 运行时声明：
-  `defineProps()` 宏函数支持从它的参数中推导类型
```vue
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>
```

##### 基于类型的声明
- 通过泛型参数来定义props的类型。编译器会尝试根据类型参数推导出等价的运行时选项
```vue
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

##### 语法限制
- 传给`defineProps()`的泛型参数必须是以下之一：
    - 一个类型字面量
        ```vue
       defineProps<{ /*... */ }>()
        ```
    - 对`同一个文件`中的接口或对象类型字面量的引用,不能是一个导入的类型（vue未来计划解决）
    ```vue
    interface Props {/* ... */}
    defineProps<Props>()
    ```

##### Props解构默认值
- 当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 `withDefaults` 编译器宏解决
```vue
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```
- 或者使用语法糖（试验阶段,需要显示开启）
```vue
<script setup lang="ts">
interface Props {
  name: string
  count?: number
}

// 对 defineProps() 的响应性解构
// 默认值会被编译为等价的运行时选项
const { name, count = 100 } = defineProps<Props>()
</script>
```
##### 复杂的prop类型
- 基于类型的声明，prop可以使用复杂类型
```vue
<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()
</script>
```
- 基于运行时声明，可以使用`PropType` 工具类型
```vue
import type { PropType } from 'vue'

const props = defineProps({
  book: Object as PropType<Book>
})

```
