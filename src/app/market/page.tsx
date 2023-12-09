import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'market',
  description: 'this is market page, where you can buy what you need',
};

export default function Market() {
  return (
    <main className='flex min-h-screen p-24'> 
      <h1 className='text-4xl'>Welcome to Market </h1>
    </main>
  );
}
