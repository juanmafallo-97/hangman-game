const words = [
  'bienvenida',
  'colegio',
  'felicidad',
  'tristeza',
  'ahorcado',
  'jugador',
  'esperanza',
  'exterior',
  'guitarra',
  'especulacion',
  'antigeno',
  'corteza',
  'guacamole',
  'pizarron',
  'estudiante',
  'perplejo',
  'depresion',
  'alcoholizado',
];

export const selectWord = () => words[Math.floor(Math.random() * words.length)];
