import { RouteType } from '../modules/common/interfaces/moduleInterfaces';

export function mergeArrays(
  ...args: { path: string, pageName: string; component: JSX.Element; type: RouteType }[][]
) {
  return [...args].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    [] as any[]
  );
}
