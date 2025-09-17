import { Link } from "react-router-dom";

// Componente de Cabeçalho do site com navegação
function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md flex justify-between items-center">
      {/* Nome da Loja */}
      <h1 className="text-2xl font-bold">PEGADA</h1>

      {/* Menu de Navegação */}
      <nav>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-gray-400">Portfólio</Link></li>
          <li><Link to="/register" className="hover:text-gray-400">Cadastro</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;