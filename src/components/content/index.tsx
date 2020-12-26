import './styles.css';
import Button from '../button';

export default function Content() {
  const contentMethod = () => console.info('Content');

  return (
    <main className='content'>
      <Button label='Update content state' method={contentMethod} />
    </main>
  );
}
