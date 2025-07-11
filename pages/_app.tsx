import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { DataProvider } from '../contexts/DataContext';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DataProvider>
        <Component {...pageProps} />
        <Toaster position="top-right" />

      </DataProvider>
    </AuthProvider>
  );
}