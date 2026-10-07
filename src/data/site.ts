// Todo el contenido de la landing vive aquí.
// Cambia textos, contactos o imágenes sin tocar los componentes.
// Para usar fotos reales: coloca el archivo en /public/images y define `image: '/images/archivo.jpg'`.
// Si `image` no está definido, se muestra una ilustración de reemplazo según `kind`.

export type FurnitureKind =
  | 'bed'
  | 'wardrobe'
  | 'kitchen'
  | 'console'
  | 'cabinet'
  | 'sofa'
  | 'desk'
  | 'chair'
  | 'pallet'
  | 'tools';

const whatsappNumber = '51991722806';
export const whatsappLink = (text = 'Hola INDEMUG, quisiera una cotización.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const site = {
  name: 'INDEMUG',
  legalName: 'INDEMUG S.A.C.',
  description:
    'INDEMUG S.A.C. fabrica muebles de melamina y madera, parihuelas y repara paletas de madera en Lima, Perú. Productos con los mejores acabados a precios competitivos.',
  email: 'proyectos@indemug.com',
  phones: [
    { label: '(+51) 585 5868', href: 'tel:+515855868' },
    { label: '991 722 806', href: 'tel:+51991722806' },
  ],
  address: ['Calle 23 de Agosto Mz. A Lt. 34, Asoc. Aproviep', 'La Ensenada, Puente Piedra – Lima'],
  hours: [
    { days: 'Lunes a viernes', time: '8:00 a.m. – 6:00 p.m.' },
    { days: 'Sábados', time: '8:00 a.m. – 12:00 p.m.' },
  ],
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/' },
    { name: 'WhatsApp', href: whatsappLink() },
  ],
};

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  title: 'Productos con los\nmejores acabados',
  text: 'Cuidamos tanto los aspectos estéticos como los funcionales, a precios competitivos.',
  primary: { label: 'Solicitar cotización', href: whatsappLink() },
  secondary: { label: 'Ver productos', href: '#productos' },
};

export const lines = {
  title: 'Nuestras líneas',
  link: { label: 'Ver productos', href: '#productos' },
  items: [
    { name: 'Dormitorios', note: 'Camas y veladores', kind: 'bed' },
    { name: 'Closets', note: 'Roperos a medida', kind: 'wardrobe' },
    { name: 'Cocinas', note: 'Melamina', kind: 'kitchen' },
    { name: 'Aparadores', note: 'Madera', kind: 'console' },
    { name: 'Oficina', note: 'Escritorios', kind: 'desk' },
    { name: 'Parihuelas', note: 'Industria', kind: 'pallet' },
  ] as { name: string; note: string; kind: FurnitureKind; image?: string }[],
};

export const services = {
  eyebrow: 'Nuestros servicios',
  title: 'Fabricamos lo que\ntu espacio necesita',
  text:
    'Fabricamos muebles de madera, melamina y parihuelas de madera. Adicionalmente brindamos el servicio de reparación de paletas de madera.',
  cta: { label: 'Cotizar ahora', href: whatsappLink('Hola INDEMUG, quisiera información sobre sus servicios.') },
  items: [
    {
      title: 'Muebles de melamina',
      text:
        'La melamina es un material muy duradero, pero también ligero y menos costoso que otros materiales usados en muebles. Además puede soportar altas temperaturas.',
      kind: 'wardrobe',
    },
    {
      title: 'Muebles de madera',
      text:
        'Los muebles de madera son fáciles de limpiar y arreglar. La madera es mucho más duradera que otros materiales usados en este rubro.',
      kind: 'cabinet',
    },
    {
      title: 'Parihuelas de madera',
      text:
        'Contamos con pistolas neumáticas de última generación para el clavado de las maderas con clavos espiralados y engomados con polímero sellador de la mejor calidad.',
      kind: 'pallet',
    },
    {
      title: 'Reparación de paletas',
      text:
        'Amplia experiencia en la reparación de paletas aplicando siempre el know-how y la maquinaria más avanzada del mercado. ¡Alargamos la vida de sus paletas!',
      kind: 'tools',
    },
  ] as { title: string; text: string; kind: FurnitureKind; image?: string }[],
};

export const products = {
  title: 'Algunos de nuestros productos',
  text: 'Un amplio catálogo con condiciones comerciales que solo encontrarás con nosotros.',
  filters: ['Todos', 'Melamina', 'Madera', 'Parihuelas'],
  items: [
    { name: 'Closet empotrado', material: 'Melamina', kind: 'wardrobe', color: '#e8dcc8' },
    { name: 'Cocina integral', material: 'Melamina', kind: 'kitchen', color: '#5b5f63' },
    { name: 'Aparador rústico', material: 'Madera', kind: 'console', color: '#a8673a' },
    { name: 'Vitrina clásica', material: 'Madera', kind: 'cabinet', color: '#8a5530' },
    { name: 'Cama con veladores', material: 'Madera', kind: 'bed', color: '#9a6038' },
    { name: 'Escritorio de oficina', material: 'Melamina', kind: 'desk', color: '#d9c6a5' },
    { name: 'Parihuela estándar', material: 'Parihuelas', kind: 'pallet', color: '#c8975f' },
    { name: 'Parihuela reforzada', material: 'Parihuelas', kind: 'pallet', color: '#a77a45' },
  ] as { name: string; material: string; kind: FurnitureKind; color: string; image?: string }[],
};

export const about = {
  title: 'Hacemos realidad\nlos espacios que imaginas',
  text:
    'INDEMUG S.A.C. es una empresa peruana dedicada a la fabricación de muebles de melamina y madera, así como a la fabricación y reparación de paletas de madera para la industria en general. Con 8 años de presencia en el mercado peruano, gracias a nuestro equipo de profesionales y mano de obra calificada, nos hemos posicionado como una empresa que ofrece productos y servicios de calidad.',
  reasonsTitle: '¿Por qué elegirnos?',
  reasons: [
    {
      title: 'Asesoría',
      text: 'Contamos con decoradoras expertas que te apoyarán durante todo el proceso.',
    },
    {
      title: 'Calidad',
      text: 'Contamos con la certificación en estándares de calidad otorgada por SGS.',
    },
    {
      title: 'Servicio',
      text: 'Te atendemos como mereces, buscando siempre lo que mejor se adapte a tus gustos y necesidades.',
    },
    {
      title: 'Precio',
      text: 'Los mejores precios del mercado para ventas al por mayor y menor. Solicita una cotización sin compromiso.',
    },
  ],
};

export const advantage = {
  title: 'Nuestra ventaja competitiva',
  text:
    'Clientes fidelizados a lo largo de los años que INDEMUG opera en la industria peruana nos ofrecen el respaldo necesario para extender nuestros horizontes a nuevos clientes y oportunidades. Tanto empresas como particulares confían en los productos y servicios ofertados por nuestra empresa.',
  stats: [
    { value: '8+', label: 'años en el mercado' },
    { value: 'SGS', label: 'certificación de calidad' },
  ],
  clientsTitle: 'Nuestros clientes',
  clients: ['Jaked', 'adidas', 'Amcor'],
};

export const cta = {
  title: 'Transforma tu espacio hoy',
  text: 'Cuéntanos qué necesitas —muebles para tu hogar, oficina o parihuelas para tu empresa— y te enviamos una cotización.',
  button: { label: 'Cotizar por WhatsApp', href: whatsappLink() },
  note: 'Cotización sin compromiso',
  badge: 'Calidad certificada por SGS',
};

export const footer = {
  about:
    'Empresa peruana dedicada a la fabricación de muebles de melamina y madera, y a la fabricación y reparación de paletas de madera.',
  columns: [
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Por qué elegirnos', href: '#nosotros' },
        { label: 'Clientes', href: '#clientes' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Muebles de melamina', href: '#servicios' },
        { label: 'Muebles de madera', href: '#servicios' },
        { label: 'Parihuelas', href: '#servicios' },
        { label: 'Reparación de paletas', href: '#servicios' },
      ],
    },
  ],
};
