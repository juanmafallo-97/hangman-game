const cards = [
  { value: 1, name: 'one' },
  { value: 2, name: 'two' },
  { value: 3, name: 'three' },
  { value: 4, name: 'four' },
  { value: 5, name: 'five' },
  { value: 6, name: 'six' },
  { value: 7, name: 'seven' },
  { value: 8, name: 'eight' },
];

const takeCard = () => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  return card;
};

export default takeCard;
