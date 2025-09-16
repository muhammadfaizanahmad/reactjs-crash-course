interface GreetProps {
  name: string;
  age: number
}

export default function Greet({ name, age }: GreetProps) {
  return <div>Hello {name}. Your age is {age}.</div>;
}
