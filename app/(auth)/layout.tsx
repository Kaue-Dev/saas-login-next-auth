export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen justify-center items-center">
        {children}
      </body>
    </html>
  );
}
