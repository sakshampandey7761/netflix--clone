// Sample movie data used by the mini Netflix clone.
// Keeping this offline and static so no API keys are required.
window.MOVIES = [
  {
    id:1,
    title:"The Adventurer",
    year:2021,
    genres:["Action","Adventure"],
    overview:"A daring explorer searches for lost artifacts and faces impossible odds.",
  poster:"https://img.youtube.com/vi/6ZfuNTqbHE8/hqdefault.jpg",
    youtubeId: "6ZfuNTqbHE8"
  },
  {
    id:2,
    title:"City Lights",
    year:2019,
    genres:["Drama"],
    overview:"An intimate look at the lives of three people whose paths cross in the city.",
  poster:"https://img.youtube.com/vi/kOkQ4T5WO9E/hqdefault.jpg",
    youtubeId: "4zY1OLF31Wc"
  },
  {
    id:3,
    title:"Spacebound",
    year:2022,
    genres:["Sci-Fi","Action"],
    overview:"A crew embarks on a mission beyond the solar system and discovers the unexpected.",
  poster:"https://img.youtube.com/vi/pU8-7BX9uxs/hqdefault.jpg",
    youtubeId: "pU8-7BX9uxs"
  },
  {
    id:4,
    title:"Laugh Track",
    year:2020,
    genres:["Comedy"],
    overview:"A group of comedians launch a comeback tour that doesn't go as planned.",
  poster:"https://img.youtube.com/vi/sGbxmsDFVnE/hqdefault.jpg",
    youtubeId: "sGbxmsDFVnE"
  },
  {
    id:5,
    title:"Midnight Chase",
    year:2018,
    genres:["Thriller","Action"],
    overview:"A tense cat-and-mouse thriller set on the rainy streets of a sleepless city.",
  poster:"https://img.youtube.com/vi/kX1sY7QJk-s/hqdefault.jpg",
    youtubeId: "3GNZYLOx05s"
  },
  {
    id:6,
    title:"Hearts & Harmony",
    year:2017,
    genres:["Romance","Drama"],
    overview:"Two musicians collide and find that love has its own tempo.",
  poster:"https://img.youtube.com/vi/b4m3ue8f5VQ/hqdefault.jpg",
    youtubeId: "1cRzZcMlJh8"
  },
  {
    id:7,
    title:"Wild Trails",
    year:2015,
    genres:["Documentary"],
    overview:"An award-winning look into wild places and the people who protect them.",
  poster:"https://via.placeholder.com/300x450?text=Wild+Trails",
    youtubeId: "tn2-GSqPyl0"
  },
  {
    id:8,
    title:"Neon Nights",
    year:2023,
    genres:["Action","Drama"],
    overview:"A neon-lit future city hides secrets that a small team tries to expose.",
  poster:"https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    youtubeId: "npCUW_Gkg8o"
  },
  {
    id:9,
    title:"Family Ties",
    year:2016,
    genres:["Comedy","Drama"],
    overview:"A multi-generational family learns to forgive and rebuild after a crisis.",
  poster:"https://via.placeholder.com/300x450?text=Family+Ties",
    youtubeId: "ns8weNznn1Y"
  },
  {
    id:10,
    title:"Avengers: Endgame (Trailer)",
    year:2019,
    genres:["Action","Adventure"],
    overview:"After the devastating events of Infinity War, the universe is in ruins.",
  poster:"https://img.youtube.com/vi/TcMBFSGVi1c/hqdefault.jpg",
    youtubeId: "TcMBFSGVi1c"
  },
  {
    id:11,
    title:"Inception (Trailer)",
    year:2010,
    genres:["Sci-Fi","Thriller"],
    overview:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
  poster:"https://img.youtube.com/vi/8hP9D6kZseM/hqdefault.jpg",
    youtubeId: "8hP9D6kZseM"
  },
  {
    id:12,
    title:"Interstellar (Trailer)",
    year:2014,
    genres:["Sci-Fi","Drama"],
    overview:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  poster:"https://img.youtube.com/vi/zSWdZVtXT7E/hqdefault.jpg",
    youtubeId: "zSWdZVtXT7E"
  },
  {
    id:13,
    title:"The Matrix (Trailer)",
    year:1999,
    genres:["Sci-Fi","Action"],
    overview:"A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  poster:"https://img.youtube.com/vi/m8e-FF8MsqU/hqdefault.jpg",
    youtubeId: "m8e-FF8MsqU"
  },
  {
    id:14,
    title:"John Wick (Trailer)",
    year:2014,
    genres:["Action","Thriller"],
    overview:"An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
  poster:"https://img.youtube.com/vi/2AUmvWm5ZDQ/hqdefault.jpg",
    youtubeId: "2AUmvWm5ZDQ"
  },
  {
    id:15,
    title:"Mad Max: Fury Road (Trailer)",
    year:2015,
    genres:["Action","Adventure"],
    overview:"In a post-apocalyptic wasteland, Max helps a rebellious woman and a group of female prisoners flee from tyranny.",
  poster:"https://img.youtube.com/vi/hEJnMQG9ev8/hqdefault.jpg",
    youtubeId: "hEJnMQG9ev8"
  },
  {
    id:16,
    title:"The Dark Knight (Trailer)",
    year:2008,
    genres:["Action","Drama"],
    overview:"Batman raises the stakes in his war on crime when the menace known as the Joker emerges from his mysterious past.",
  poster:"https://img.youtube.com/vi/EXeTwQWrcwY/hqdefault.jpg",
    youtubeId: "EXeTwQWrcwY"
  },
  {
    id:17,
    title:"Gladiator (Trailer)",
    year:2000,
    genres:["Action","Drama"],
    overview:"A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
  poster:"https://img.youtube.com/vi/owK1qxDselE/hqdefault.jpg",
    youtubeId: "P5ieIbInFpg"
  },
  {
    id:18,
    title:"Toy Story (Trailer)",
    year:1995,
    genres:["Animation","Family"],
    overview:"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
  poster:"https://img.youtube.com/vi/KYz2wyBy3kc/hqdefault.jpg",
    youtubeId: "KYz2wyBy3kc"
  },
  {
    id:19,
    title:"Pirates of the Caribbean (Trailer)",
    year:2003,
    genres:["Action","Adventure"],
    overview:"Blacksmith Will Turner teams up with eccentric pirate Jack Sparrow to save the governor's daughter and free his island.",
  poster:"https://img.youtube.com/vi/naQr0uTrH_s/hqdefault.jpg",
    youtubeId: "naQr0uTrH_s"
  },
  {
    id:20,
    title:"wild trails",
    year:2010,
    genres:["Drama"],
    overview:"The story of the founding of Facebook and the resulting lawsuits.",
  poster:"https://img.youtube.com/vi/2RB3edZyeYw/hqdefault.jpg",
    youtubeId: "tn2-GSqPyl0"
  }
];
