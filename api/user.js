export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const data = [
    {
      id:1,
      name:"Kendrick Lamar",
      image:"https://upload.wikimedia.org/wikipedia/commons/7/76/Kendrick_Lamar_2018_Pulitzer_Prize_ceremony_%283x4_cropped%29.jpg"
    },
    {
      id:2,
      name:"Yaosobi",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG_CeZnRi6YZBN90UqYTMWPUF-udvayDy2Q&s"
    },
    {
      id:3,
      name:"Pharrell Williams",
      image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTE8n-7Ej4K0qbwhjgQNVHzdvUxCU2XjqpZDa4YuOjpQRPr6-he",
      
    },
    {
      id:4,
      name:'Kanna Boon',
      image:"https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2019/12/KANA-BOON_AP_s.jpg"
    }
  ]

  res.status(200).json(musicInfo);
}
