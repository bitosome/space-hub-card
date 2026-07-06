export const CARD_VERSION = '2.0.66';

export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
