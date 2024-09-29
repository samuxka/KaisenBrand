import SakuraTee from './assets/Imgs/produtos/sakuratee.jpg'
import TempleTee from './assets/Imgs/produtos/templetee.jpg'
import SamuraiTee from './assets/Imgs/produtos/samuraitee.jpg'
import CarpHoodie from './assets/Imgs/produtos/carphoodie.jpg'
import KimonoBlack from './assets/Imgs/produtos/KimonoB.jpg'

const produtos = [
  // Start Tee categorie
  {
    id: 1,
    nome: "Sakura Tee 1",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: SakuraTee,
    categoria: "apparel",
    colecao: "sakura"
  },
  {
    id: 2,
    nome: "Temple Tee",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: TempleTee,
    categoria: "apparel",
    colecao: "temple"
  },
  {
    id: 3,
    nome: "Samurai Tee",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: SamuraiTee,
    categoria: "apparel",
    colecao: "samurai"
  },
  {
    id: 4,
    nome: "Countries Tee",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: SamuraiTee,
    categoria: "apparel",
    colecao: "countries"
  },
  {
    id: 5,
    nome: "States Tee",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: SamuraiTee,
    categoria: "apparel",
    colecao: "states"
  },
  {
    id: 6,
    nome: "Carp Tee",
    preco: 29.99,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: SamuraiTee,
    categoria: "apparel",
    colecao: "carp"
  },
  // Start Hoodie categorie
  {
    id: 7,
    nome: "Sakura Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "sakura"
  },
  {
    id: 8,
    nome: "Temple Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "temple"
  },
  {
    id: 9,
    nome: "Samurai Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "samurai"
  },
  {
    id: 10,
    nome: "Countries Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "countries"
  },
  {
    id: 11,
    nome: "States Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "states"
  },
  {
    id: 12,
    nome: "Carp Hoodie",
    preco: 130.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: CarpHoodie,
    categoria: "hoodie",
    colecao: "carp"
  },
  // Start Kimono Categorie
  {
    id: 13,
    nome: "Kimono Sakura",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "sakura"
  },
  {
    id: 14,
    nome: "Kimono Temple",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "temple"
  },
  {
    id: 15,
    nome: "Kimono Samurai",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "samurai"
  },
  {
    id: 16,
    nome: "Kimono Countrie",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "countries"
  },
  {
    id: 17,
    nome: "Kimono State",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "states"
  },
  {
    id: 18,
    nome: "Kimono Carp",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "kimono",
    colecao: "carp"
  },
  // Start NoGi categorie
  {
    id: 19,
    nome: "Sakura No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "sakura"
  },
  {
    id: 20,
    nome: "Temple No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "temple"
  },
  {
    id: 21,
    nome: "Samurai No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "samurai"
  },
  {
    id: 22,
    nome: "Countries No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "countries"
  },
  {
    id: 23,
    nome: "States No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "states"
  },
  {
    id: 24,
    nome: "Carp No-Gi",
    preco: 320.00,
    feature1: "Relaxed fit",
    feature2: "Super soft ring spun cotton",
    feature3: "Screen printed design",
    feature4: "Kaisen Brand original design",
    imagem: KimonoBlack,
    categoria: "nogi",
    colecao: "carp"
  },
]

export default produtos;