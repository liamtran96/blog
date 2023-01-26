import Image from 'next/image'
import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className={inter.className}>hello</div>
    </main>
  );
}
