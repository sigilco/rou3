import { NullProtoObj } from "./object.ts";
import type { Node, RouterContext } from "./types.ts";

/**
 * Create a trie node: one construction site, so the shape every node is
 * created with stays uniform as `Node` grows fields.
 */
export const createNode = (key: string): Node<any> => ({ key });

/**
 * Create a new router. `T` is the type of the route data.
 */
export function createRouter<T = unknown>(): RouterContext<T> {
  const ctx: RouterContext<T> = {
    root: createNode(""),
    static: new NullProtoObj(),
  };
  return ctx;
}
