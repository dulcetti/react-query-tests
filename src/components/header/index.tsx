import logo from '../../assets/images/logo192.png';
import './styles.css';
import Button from '../button';
import { GetAddress } from '../../services/cep/index';

export default function Header() {
  const contentMethod = () => GetAddress('20541145');

  return (
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
      <Button label='Update content state' method={contentMethod} />
    </header>
  );
}
