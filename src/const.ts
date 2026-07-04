export const CARD_VERSION = '2.0.59';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
