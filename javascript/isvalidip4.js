function isValidIP(str) {
  if (str.length === 0) {
    return false;
  }

  const entries = str.split(".");
  if (entries.length !== 4) {
    return false;
  }

  for (const item of entries) {
    if (item.indexOf(" ") != -1) {
      return false;
    }

    const n = Number(item);
    if ((isNaN(item)) || (n < 0 || n > 255)) {
      return false;
    }
  }

  return true;
}
