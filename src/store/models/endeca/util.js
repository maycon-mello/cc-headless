// @flow
/**
 * 
 * Endeca utils
 */


export function getString(value: Array<string>) {
  return value[0]
}

export function getArray(value: Array<string>) {
  return value;
}

export function getBoolean(value: Array<string>) {
  const val = value && value[0];
  return val === '1';
}

export function getFloat(value: Array<string>) {
  return value && parseFloat(value[0]);
}

export function getInt(value: Array<string>) {
  return value && parseInt(value[0]);
}

export function getDate(value: Array<string>) {
  return value && new Date(parseInt(value[0]))
}

