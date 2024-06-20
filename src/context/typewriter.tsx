import useTypewriter from "../hooks/useTypewriter";

type typeProps = { text: any; speed?: number };
const Typewriter = ({ text, speed }: typeProps) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
