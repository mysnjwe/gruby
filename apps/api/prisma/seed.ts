import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create categories
  const barierki = await prisma.category.upsert({
    where: { slug: 'barierki' },
    update: {},
    create: {
      name: 'Barierki',
      slug: 'barierki',
      description: 'Nowoczesne barierki aluminiowe – idealne zabezpieczenie tarasów, balkonów i schodów',
    },
  });

  const balustrady = await prisma.category.upsert({
    where: { slug: 'balustrady' },
    update: {},
    create: {
      name: 'Balustrady',
      slug: 'balustrady',
      description: 'Eleganckie balustrady aluminiowe do wnętrz i na zewnątrz',
    },
  });

  const pergole = await prisma.category.upsert({
    where: { slug: 'pergole' },
    update: {},
    create: {
      name: 'Pergole',
      slug: 'pergole',
      description: 'Luksusowe pergole aluminiowe z roletami – idealne zacienianie tarasu',
    },
  });

  console.log('✅ Categories created');

  // Create products - Barierki
  const barierka1 = await prisma.product.upsert({
    where: { slug: 'barierka-nowoczesna-minimal' },
    update: {},
    create: {
      name: 'Barierka Nowoczesna Minimal',
      slug: 'barierka-nowoczesna-minimal',
      shortDesc: 'Minimalistyczna barierka aluminiowa z niewidocznym mocowaniem',
      description: `Barierka Minimal to kwintesencja nowoczesnego designu. Charakteryzuje się czystymi liniami i niewidocznym systemem mocowania, który zapewnia estetyczny wygląd bez zbędnych elementów wizualnych.

**Kluczowe cechy:**
- Niewidoczne mocowanie
- Profile aluminiowe o wysokiej wytrzymałości
- Dostępne w różnych kolorach RAL
- Możliwość montażu na różnych powierzchniach
- Wysyłka na terenie całej Polski

**Zastosowanie:**
Idealna do nowoczesnych domów, tarasów, balkonów i schodów. Świetnie komponuje się z architekturą minimalistyczną.`,
      basePrice: 450,
      categoryId: barierki.id,
      featured: true,
      inStock: true,
      dimensions: {
        height: '100-110 cm',
        thickness: '60-80 mm',
        customizable: true,
      },
      gallery: [
        '/images/barierka-minimal-1.jpg',
        '/images/barierka-minimal-2.jpg',
        '/images/barierka-minimal-3.jpg',
      ],
      specifications: {
        material: 'Aluminium anodowane',
        finish: 'Malowanie proszk owe',
        mounting: 'Ukryte mocowanie',
        warranty: '10 lat',
      },
    },
  });

  // Add variants for barierka1
  await prisma.productVariant.createMany({
    data: [
      {
        productId: barierka1.id,
        type: 'kolor',
        value: 'RAL 9005 - Czarny',
        label: 'Czarny',
        priceModifier: 0,
      },
      {
        productId: barierka1.id,
        type: 'kolor',
        value: 'RAL 9016 - Biały',
        label: 'Biały',
        priceModifier: 0,
      },
      {
        productId: barierka1.id,
        type: 'kolor',
        value: 'RAL 7016 - Antracyt',
        label: 'Antracyt',
        priceModifier: 50,
      },
      {
        productId: barierka1.id,
        type: 'wysokosc',
        value: '100cm',
        label: '100 cm',
        priceModifier: 0,
      },
      {
        productId: barierka1.id,
        type: 'wysokosc',
        value: '110cm',
        label: '110 cm',
        priceModifier: 30,
      },
    ],
  });

  const barierka2 = await prisma.product.upsert({
    where: { slug: 'barierka-ze-szklem' },
    update: {},
    create: {
      name: 'Barierka ze Szkłem',
      slug: 'barierka-ze-szklem',
      shortDesc: 'Elegancka barierka z bezpiecznym szkłem hartowanym',
      description: `Barierka ze Szkłem łączy bezpieczeństwo z estetyką. Szkło hartowane zapewnia pełną ochronę nie ograniczając widoku.

**Kluczowe cechy:**
- Szkło hartowane 10mm
- Profile aluminiowe o wysokiej wytrzymałości
- Minimalistyczny design
- Łatwy montaż
- Wysyłka na terenie całej Polski wraz z instrukcją montażu

**Zastosowanie:**
Idealna do tarasów z widokiem, balkonów oraz nowoczesnych wnętrz.`,
      basePrice: 650,
      categoryId: barierki.id,
      featured: true,
      inStock: true,
      dimensions: {
        height: '100-120 cm',
        glassThickness: '10 mm',
        customizable: true,
      },
      gallery: [
        '/images/barierka-szklo-1.jpg',
        '/images/barierka-szklo-2.jpg',
      ],
      specifications: {
        material: 'Aluminium + Szkło hartowane',
        glassType: 'Bezpieczne VSG',
        mounting: 'Mocowanie naścienne lub na powierzchni',
        warranty: '10 lat',
      },
    },
  });

  // Pergole
  const pergola1 = await prisma.product.upsert({
    where: { slug: 'pergola-bioklimatyczna-premium' },
    update: {},
    create: {
      name: 'Pergola Bioklimatyczna Premium',
      slug: 'pergola-bioklimatyczna-premium',
      shortDesc: 'Luksusowa pergola z regulowanymi lamelami',
      description: `Pergola Bioklimatyczna Premium to najwyższa jakość i funkcjonalność. Regulowane lamele pozwalają na pełną kontrolę nad zacienieniem i wentylacją.

**Kluczowe cechy:**
- Elektryczna regulacja lameli (opcjonalnie)
- Zintegrowany system odprowadzania wody
- Możliwość montażu oświetlenia LED
- Zdalna kontrola przez aplikację
- Wysyłka na terenie całej Polski wraz z instrukcją montażu

**Wymiary:**
Pergola dostępna w różnych rozmiarach - od 3x3m do 6x4m.`,
      basePrice: 8500,
      categoryId: pergole.id,
      featured: true,
      inStock: true,
      dimensions: {
        sizes: ['3x3m', '4x3m', '4x4m', '5x4m', '6x4m'],
        height: '240 cm',
        customizable: true,
      },
      gallery: [
        '/images/pergola-premium-1.jpg',
        '/images/pergola-premium-2.jpg',
        '/images/pergola-premium-3.jpg',
        '/images/pergola-premium-4.jpg',
      ],
      specifications: {
        material: 'Aluminium anodowane',
        blades: 'Regulowane lamele aluminiowe',
        motor: 'Silnik elektryczny (opcja)',
        warranty: '10 lat',
        waterproof: 'Tak',
      },
    },
  });

  await prisma.productVariant.createMany({
    data: [
      {
        productId: pergola1.id,
        type: 'rozmiar',
        value: '3x3m',
        label: '3m x 3m',
        priceModifier: 0,
      },
      {
        productId: pergola1.id,
        type: 'rozmiar',
        value: '4x3m',
        label: '4m x 3m',
        priceModifier: 1500,
      },
      {
        productId: pergola1.id,
        type: 'rozmiar',
        value: '4x4m',
        label: '4m x 4m',
        priceModifier: 2500,
      },
      {
        productId: pergola1.id,
        type: 'rozmiar',
        value: '5x4m',
        label: '5m x 4m',
        priceModifier: 3500,
      },
      {
        productId: pergola1.id,
        type: 'automatyka',
        value: 'manual',
        label: 'Ręczna',
        priceModifier: 0,
      },
      {
        productId: pergola1.id,
        type: 'automatyka',
        value: 'electric',
        label: 'Elektryczna',
        priceModifier: 2000,
      },
    ],
  });

  // Balustrady
  const balustrada1 = await prisma.product.upsert({
    where: { slug: 'balustrada-wewnetrzna-classic' },
    update: {},
    create: {
      name: 'Balustrada Wewnętrzna Classic',
      slug: 'balustrada-wewnetrzna-classic',
      shortDesc: 'Elegancka balustrada do schodów wewnętrznych',
      description: `Balustrada Classic to ponadczasowy design w nowoczesnym wydaniu. Idealna do schodów wewnętrznych w domach i apartamentach.

**Kluczowe cechy:**
- Poręcz z drewna lub aluminium
- Profile aluminiowe w różnych kolorach
- Montaż boczny lub na stopnie
- Wysyłka wraz z kompletnym zestawem montażowym

**Zastosowanie:**
Schody wewnętrzne, antresole, galerie.`,
      basePrice: 380,
      categoryId: balustrady.id,
      featured: false,
      inStock: true,
      dimensions: {
        height: '90-100 cm',
        customizable: true,
      },
      gallery: [
        '/images/balustrada-classic-1.jpg',
        '/images/balustrada-classic-2.jpg',
      ],
      specifications: {
        material: 'Aluminium',
        handrail: 'Drewno dębowe lub aluminium',
        mounting: 'Boczne lub na stopnie',
        warranty: '5 lat',
      },
    },
  });

  console.log('✅ Products and variants created');
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
