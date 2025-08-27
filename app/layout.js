import './globals.css';

export const metadata = {
  title: 'Hong Yi Zhang - Portfolio',
  description: 'Personal website and portfolio of Hong Yi Zhang, Full-Stack Developer & Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

