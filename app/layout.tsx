// app/layout.tsx
//import './globals.css'; // Si tienes un archivo CSS global, créalo.

export const metadata = {
  title: 'Vota Libre',
  description: 'Aplicación de registro y perfil de candidatos/ciudadanos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}