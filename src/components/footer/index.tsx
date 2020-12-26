import './styles.css';
import Button from '../button';

export default function Footer() {
  const footerMethod = () => console.info('Footer');

  return (
    <footer className='footer'>
      <Button label='Update state' method={footerMethod} />
    </footer>
  );
}
