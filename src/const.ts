export const CARD_VERSION = '2.1.1';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
