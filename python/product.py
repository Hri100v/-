def product(numbers):
  l = len(numbers)
  total = 0
  if l != 0:
    total = 1
    for num in numbers:
      total *= num
  return total
