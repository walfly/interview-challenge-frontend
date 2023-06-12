export default (value: string | null | undefined) => {
  let resolvedValue: number | undefined;
  if (value !== undefined && value !== null) {
    resolvedValue = parseInt(value, 10);
    if (isNaN(resolvedValue)) {
      resolvedValue = undefined;
    }
  }
  return resolvedValue;
}
