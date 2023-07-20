def anti_vowel(text):
  newText = ""
  for char in text:
    if char.lower() not in "aeiou":
      newText += char
    print(char)

  return newText

print(anti_vowel("Hey You!"))
