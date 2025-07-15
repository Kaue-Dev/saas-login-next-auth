export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="antialiased flex min-h-screen justify-center items-center">
      {children}
    </div>
  );
}
