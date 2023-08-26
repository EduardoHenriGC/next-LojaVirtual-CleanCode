export default function handler(req, res) {
  const items = [
    {
      id: 1,
      nome: "Naruto Shippuden",
      imgurl: "https://e0.pxfuel.com/wallpapers/386/218/desktop-wallpaper-obito-uchiha-top-35-best-obito-uchiha-background-awesome-obito.jpg",
      descricao: "bom",
      preco: 86,
      nmrEp: 500,
      categoria: "anime",
    },
    {
      id: 2,
      nome: "Record of Ragnarok",
      imgurl: "https://m.media-amazon.com/images/I/81oN91bwvlL._AC_UF1000,1000_QL80_.jpg",
      descricao: "bom mas depende",
      preco: 79,
      nmrEp: 44,
      categoria: "anime",
    },
    {
      id: 3,
      nome: "vinland saga",
      imgurl: "https://w0.peakpx.com/wallpaper/44/489/HD-wallpaper-vinland-saga-thorfinn.jpg",
      descricao: "bom mas depende",
      preco: 91,
      nmrEp: 48,
      categoria: "anime",
    },
    {
      id: 4,
      nome: "Oppenheimer",
      imgurl: "https://www.vitoriaparkshopping.com/wp-content/uploads/2023/07/oppenheimer.png",
      descricao: "bom",
      preco: 92,
      duracao: "3 hrs",
      categoria: "filme",
    },
    {
      id: 5,
      nome: "Ilha do medo",
      imgurl: "https://www.revistabula.com/wp/wp-content/uploads/2022/10/Ilha-do-Medo.jpg",
      descricao: "bom",
      preco: 87,
      duracao: "2h 18min",
      categoria: "filme",
    },
    {
      id: 6,
      nome: "Batman",
      imgurl: "https://w0.peakpx.com/wallpaper/743/913/HD-wallpaper-the-batman-official-2022-movie.jpg",
      descricao: "bom",
      preco: 84,
      duracao: "2h 56m",
      categoria: "filme",
    },
    {
      id: 7,
      nome: "Ruptura",
      imgurl: "https://seuladogeek.com.br/wp-content/uploads/2022/04/Ruptura-apple-768x1131.jpg",
      descricao: "bom",
      preco: 88,
      nmrEp: 9,
      categoria: "serie",
    },
    {
      id: 8,
      nome: "Better call Saul",
      imgurl: "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
      descricao: "bom",
      preco: 88,
      nmrEp: 63,
      categoria: "serie",
    },
    {
      id: 9,
      nome: "True Detctive",
      imgurl: "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_FMjpg_UX1000_.jpg",
      descricao: "bom",
      preco: 88,
      nmrEp: 9,
      categoria: "serie",
    },
  ];


  if (req.method === 'GET') {
    if (req.query.id) {
      // Se a query string "id" estiver presente, busca o item pelo ID
      const itemId = parseInt(req.query.id);
      const item = items.find(item => item.id === itemId);

      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Item não encontrado' });
      }
    } else {
      // Se não houver query string "id", retorna todos os itens
      res.status(200).json(items);
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}