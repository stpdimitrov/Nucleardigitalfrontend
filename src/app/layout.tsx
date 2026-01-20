import './globals.css';

export const metadata = {
  title: 'Flixen™',
  description: 'Create cinematic visuals that captivate every audience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
