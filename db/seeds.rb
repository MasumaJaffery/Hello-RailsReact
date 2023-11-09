greetings = [
  "السلام عليكم",
  "Salam",
  "Greetings and salutations!",
  "Hola, ¿cómo estás?",
  "Ola!"
]

greetings.each do |greeting|
  Greeting.create(message: greeting)
end
