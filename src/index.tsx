import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './styles.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content />
      <Footer />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

reportWebVitals();
