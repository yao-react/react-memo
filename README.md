# @yao-react/memo

React memorization with render children pattern.

## Install

```
npm install @yao-react/react-memo
```

```
yarn add @yao-react/react-memo
```

## Usage

```tsx
import { Memo } from '@yao-react/react-memo'

const Demo = () => {
  return <Memo
    deps={[dep1, dep2, ...]}
    render={([dep1, dep2, ...]) => <div>...</div>}
  />
}
```

## Props

| prop    | type                             | required | description                                                    |
| ------- | -------------------------------- | -------- | -------------------------------------------------------------- |
| deps    | Array \| any                     | false    | Any deps of the component, common format is an array of items. |
| compare | (prevDeps, nextDeps) => boolean  | false    | `shallowequal` is used if not provided                         |
| render  | (deps) => (ReactElement \| null) | false    |                                                                |

## Advanced Usage

### Use hooks inside render

You can use hooks inside the render function, which allows you to further optimize your render structure.

If your lint complains about it, you can write your render function as `function Comp() {...}`, which fools the lint to
see it as a component, but you should know it is not indeed, as it is only a normal function called inside the Memo component.

## License

MIT
