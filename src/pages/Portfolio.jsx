// Página de Portfólio com produtos fictícios
function Portfolio() {
  // Lista de produtos fictícios
  const produtos = [
    { id: 1, nome: "Tênis Esportivo", preco: "R$ 199,90", img: "https://pegada.vtexassets.com/arquivos/ids/180846/Tenis-Esportivo-Pegada-Masculino-em-Tecido-Off-White-190606-01--2-.jpg?v=638594281003770000" },
    { id: 2, nome: "Chinelo Casual", preco: "R$ 79,90", img: "https://cdnv2.moovin.com.br/teffecalcados/imagens/produtos/det/chinelo-pegada-couro-133151-4f04f270f2ad8b7db6ca504024e49e36.jpg" },
    { id: 3, nome: "Bota de Couro", preco: "R$ 299,90", img: "https://pegada.vtexassets.com/arquivos/ids/170576/180745-03_1.jpg?v=638845477214900000" },
    { id: 4, nome: "Sapato Social", preco: "R$ 249,90", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel2ouYImVDkliL3Z12KtEn6rQKpLTnpqSOQ&s" },
    { id: 5, nome: "Tênis Casual", preco: "R$ 189,90", img: "https://images.tcdn.com.br/img/img_prod/837907/sapatenis_masculino_pegada_114861_15804_1_d7eeb2944a56f16cdb74356cc441b23d.jpg" },
    { id: 6, nome: "Tênis Infantil", preco: "R$ 149,90", img: "https://pegada.vtexassets.com/arquivos/ids/180969/Tenis-Casual-Pegada-Infantil-em-Microfibra-White-372101-02--1-.jpg?v=638791073508470000" }
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
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform justify-center items-center flex flex-col"
          >
            {/* Imagem do produto */}
            <img src={p.img} alt={p.nome} className="w-[60%] h-48 object-cover rounded-md" />
            
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