import { memo, ReactElement } from 'react';
import equals from 'shallowequal';

export type Props<TDeps> = {
  deps?: TDeps;
  compare?: (prevDeps: TDeps, nextDeps: TDeps) => boolean;
  render?: (deps: TDeps) => ReactElement | null;
};

const compareProps = <TDeps extends any>(
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

export const Memo: MemoType = memo(function Memo({ deps, render }) {
  return render?.(deps!) ?? null;
}, compareProps);
