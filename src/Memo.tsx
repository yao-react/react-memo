import { memo, ReactElement } from 'react';
import equals from 'shallowequal';

type RenderFunc<TDeps> = (deps: TDeps) => ReactElement | null;

export type Props<TDeps> = {
  deps?: TDeps;
  compare?: (prevDeps: TDeps, nextDeps: TDeps) => boolean;
  render?: RenderFunc<TDeps>;
  useRender?: RenderFunc<TDeps>;
};

const compareProps = <TDeps,>(
  prevProps: Props<TDeps>,
  nextProps: Props<TDeps>
) => {
  // edge case: if deps' are not specified, it should be treated as no memorization as `useMemo`
  if (!('deps' in prevProps) && !('deps' in nextProps)) {
    return false;
  }

  return (nextProps.compare ?? equals)(prevProps.deps, nextProps.deps);
};

type MemoType = <TDeps>(props: Props<TDeps>) => ReactElement | null;

export const Memo: MemoType = memo(function Memo({ deps, render, useRender }) {
  const renderFunc = useRender ?? render ?? emptyRenderFunc;
  return renderFunc(deps!);
}, compareProps);

function emptyRenderFunc() {
  return null;
}
