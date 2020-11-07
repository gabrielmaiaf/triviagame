export function capitalizeBoolean(boolean: boolean): string {
  const string = boolean.toString();
  return string.charAt(0).toUpperCase() + string.slice(1);
}
