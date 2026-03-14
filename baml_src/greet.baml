function Greet(name: string) -> string {
  client "openai-responses/gpt-5-mini"

  prompt #"
    Hello {{ name }}! Welcome to the Hameed Lovable Clone!
  "#
}