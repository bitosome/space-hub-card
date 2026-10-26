export const CARD_VERSION = '2.1.2';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
