export const CARD_VERSION = '2.0.51';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
