def median(list):
  l = len(list)
  halfl = l / 2
  nlist = sorted(list)
  if l % 2 == 0:
    # even
    first = nlist[halfl]
    second = nlist[halfl - 1]
    return (first + second) / 2.0
  else:
    # odd
    return nlist[halfl]
