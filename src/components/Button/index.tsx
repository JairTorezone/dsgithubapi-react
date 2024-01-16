import './styles.css';

type Props = {
  title: string;
};

function Button({ title }: Props) {
  return <button>{title}</button>;
}

export default Button;
