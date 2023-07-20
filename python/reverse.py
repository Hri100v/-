def reverse(text):
  textLen = len(text)
  newText= ""
  index = textLen - 1
  for char in text:
    newText += text[index]
    index -= 1
  return newText

result = reverse("abcd")
print(result)
