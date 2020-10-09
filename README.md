# @yao-react/react-memo

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

| prop      | type                             | required | description                                                    |
| --------- | -------------------------------- | -------- | -------------------------------------------------------------- |
| deps      | Array \| any                     | false    | Any deps of the component, common format is an array of items. |
| compare   | (prevDeps, nextDeps) => boolean  | false    | `shallowequal` is used if not provided                         |
| render    | (deps) => (ReactElement \| null) | false    |                                                                |
| useRender | (deps) => (ReactElement \| null) | false    | alias of `render`                                              |

## Advanced Usage

### Using hooks

`useRender` is an alias of `render`, but exits here to indicate that you can use hooks inside it, which allows you to 
further optimize your render structure.

If your linter complains about it, you can give a name to your function, such as `function useRender() {...}`, which tells
your linter that it is a hook.

## License

MIT
