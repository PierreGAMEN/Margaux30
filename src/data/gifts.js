export const cagnotteUrl = 'https://www.leetchi.com/votre-lien-ici' // ← à remplacer

export const univers = [
  {
    id: 'climb',
    num: 'I',
    label: "TERRAIN",
    titleItalic: 'Du stade à la grande voie.',
    tagline: "Le rocher ne fait pas de cadeau, les journées d'EPS sous la pluie non plus. Pour ses projets en montagne ou les intempéries au boulot : de la technicité pure pour rester au sec, partout",
    accentColor: 'var(--c-accent-climb)',
    bgImage: '/images/margaux_climbing.jpg',
  },
  {
    id: 'chic',
    num: 'II',
    label: 'ALLURE',
    titleItalic: 'L’élégance après l’effort.',
    tagline: "Une fois le sifflet rangé et le baudrier enlevé, place au style. Une sélection de pièces iconiques pour garder ce sens du détail et du chic qui la caractérise.",
    accentColor: 'var(--c-accent-chic)',
    bgImage: './images/elegance.jpg',
  },
  {
    id: 'zen',
    num: 'III',
    label: 'RÉCUPÉRATION',
    titleItalic: 'La pause méritée.',
    tagline: "Parce qu'entre les cours et les parois, le corps est mis à rude épreuve. Un moment suspendu pour relâcher la pression, soigner les tensions et recharger les batteries avant le prochain sommet.",
    accentColor: 'var(--c-accent-zen)',
    bgImage: './images/dodo.jpg',
  },
]

export const gifts = [
  {
    id: 'mammut-jacket',
    universId: 'climb',
    brand: 'Mammut',
    name: 'Aenergy TR HS Hooded Jacket',
    description: "L'armure hardshell 3 couches. 150g de technologie pour affronter le vent au relais comme les enfants un peu bruyant",
    price: 145,
    imageUrl: '/images/mammut-jacket.png',
    productUrl: 'https://www.mammut.com/fr/fr/products/1010-30010-6433/aenergy-tr-hs-hooded-jacket-women',
    emoji: '🏔️',
  },
  {
    id: 'sezane-joyce',
    universId: 'chic',
    brand: 'Sézane',
    name: 'Pull Joyce',
    description: 'La maille mohair évasée pour les soirées fraîches.',
    price: 115,
    imageUrl: '/images/sezane-joyce.png',
    productUrl: 'https://www.sezane.com/fr/product/pull-joyce',
    emoji: '🧶',
  },
  // {
  //   id: 'sezane-noemie',
  //   universId: 'chic',
  //   brand: 'Sézane',
  //   name: 'Pull Noémie (Optionnel)',
  //   description: "L'indispensable coton bio, doux et intemporel.",
  //   price: 105,
  //   imageUrl: '/images/sezane-noemie.png',
  //   productUrl: 'https://www.sezane.com/fr/product/pull-noemie',
  //   emoji: '🧶',
  // },
  {
    id: 'sezane-alycia',
    universId: 'chic',
    brand: 'Sézane',
    name: 'Chemise Alycia',
    description: 'La broderie placée, le détail qui fait tout.',
    price: 110,
    imageUrl: '/images/sezane-alycia.png',
    productUrl: 'https://www.sezane.com/fr/product/chemise-alycia',
    emoji: '👗',
  },
  {
    id: 'sezane-colombe',
    universId: 'chic',
    brand: 'Sézane',
    name: "Boucles d'oreilles Colombe",
    description: "L'éclat final, du quotidien aux grandes occasions.",
    price: 85,
    imageUrl: '/images/sezane-colombe.png',
    productUrl: 'https://www.sezane.com/fr/collection/bijoux/boucles-doreilles',
    emoji: '✨',
  },
  {
    id: 'eva-retreat',
    universId: 'zen',
    brand: 'Eva Bayle',
    name: 'Soin Eva : Retreat',
    description: '80 minutes de déconnexion totale. Un rituel de récupération profonde pour repartir de plus belle.',
    price: 80,
    imageUrl: '/images/eva-retreat.png',
    productUrl: 'https://evabayle.fr/retreat/',
    emoji: '🌿',
  },
]

export const totalPrice = gifts.reduce((sum, g) => sum + g.price, 0)

export const cagnotte = {
  objectif: totalPrice,
  collecte: 510, // ← tu mets à jour ici au fur et à mesure
}

