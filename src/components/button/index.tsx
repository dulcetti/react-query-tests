import './styles.css';
import { IButton } from './interface';

export default function Button({ className = '', label, method }: IButton) {
  return (
    <button className={`${className} button`} onClick={method}>
      {label}
    </button>
  );
}
