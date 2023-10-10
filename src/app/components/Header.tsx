// @ts-ignore
export const Header = ({ children }) => {
  return (
    <div className="flex justify-center">
      <header className="fixed container mx-auto p-4 z-50">{children}</header>
    </div>
  );
};
