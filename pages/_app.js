import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
