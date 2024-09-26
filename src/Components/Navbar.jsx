import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <img src="/logo-marvel.png" alt="Marvel Logo" className="h-10" />
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/comics" className="text-white">Comics</Link>
          <Link to="/movies" className="text-white">Movies</Link>
          <Link to="/characters" className="text-white">Characters</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
