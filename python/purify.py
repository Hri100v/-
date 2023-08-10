# Removes all odd numbers

def purify(array):
  new_array = []
  for x in array:
    if x % 2 == 0:
      new_array.append(x)
      
  return new_array
