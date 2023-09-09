function isValidIP(str) {
  if (str.length === 0) {
    return false;
  }

  const entries = str.split(".");
  if (entries.length !== 4) {
    return false;
  }

  for (const item of entries) {
    const changedN = item | 0;
    const itemLen = item.length;
    if ((changedN / 10 < 1 && itemLen == 2) || (changedN / 100 < 1 && itemLen == 3)) {
        return false;
    }

    if (itemLen == 0) {
        return false;
    }
    
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
