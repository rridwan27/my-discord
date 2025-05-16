const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-black/95 backdrop-blur-md">
      {children}
    </div>
  );
};
export default AuthLayout;
