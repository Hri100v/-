def censor(text, word):
  result = ""
  new_words = []
  words = text.split()
  word_len = len(word)
  index = text.index(word)
  for x in words:
    if (word in x):
      new_words.append("*" * word_len)
    else:
      new_words.append(x)
  
  return " ".join(new_words)
