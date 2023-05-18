export const isNode = (target: EventTarget | null): target is Node => {
  return target instanceof Node;
};