// Página de Portfólio com produtos fictícios
function Portfolio() {
  // Lista de produtos fictícios
  const produtos = [
    { id: 1, nome: "Tênis Esportivo", preco: "R$ 199,90", img: "https://via.placeholder.com/250x200?text=Tênis" },
    { id: 2, nome: "Chinelo Casual", preco: "R$ 79,90", img: "https://via.placeholder.com/250x200?text=Chinelo" },
    { id: 3, nome: "Bota de Couro", preco: "R$ 299,90", img: "https://via.placeholder.com/250x200?text=Bota" },
    { id: 4, nome: "Sapato Social", preco: "R$ 249,90", img: "https://via.placeholder.com/250x200?text=Sapato" },
    { id: 5, nome: "Tênis Casual", preco: "R$ 189,90", img: "https://via.placeholder.com/250x200?text=Tênis+Casual" },
    { id: 6, nome: "Sandália Feminina", preco: "R$ 129,90", img: "https://via.placeholder.com/250x200?text=Sandália" },
    { id: 7, nome: "Chuteira", preco: "R$ 219,90", img: "https://via.placeholder.com/250x200?text=Chuteira" },
    { id: 8, nome: "Tênis Infantil", preco: "R$ 149,90", img: "https://via.placeholder.com/250x200?text=Tênis+Infantil" }
  ];

  return (
    <div className="text-center">
      {/* Título da Página */}
      <h2 className="text-3xl font-bold mb-6">Nosso Portfólio</h2>

      {/* Grid de Produtos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform"
          >
            {/* Imagem do produto */}
            <img src={p.img} alt={p.nome} className="w-full h-48 object-cover rounded-md" />
            
            {/* Nome do produto */}
            <h3 className="text-xl font-semibold mt-2">{p.nome}</h3>
            
            {/* Preço do produto */}
            <p className="text-gray-600">{p.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;