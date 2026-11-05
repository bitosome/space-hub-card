export const CARD_VERSION = '2.3.3';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
