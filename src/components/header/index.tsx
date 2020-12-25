import logo from '../../assets/images/logo192.png';
import './styles.css';

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
    </header>
  );
}
