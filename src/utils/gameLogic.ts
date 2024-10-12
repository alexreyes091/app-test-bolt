export interface BibleBook {
  name: string;
  description: string;
  isCorrect: boolean;
}

const bibleBooks: BibleBook[] = [
  { name: "Génesis", description: "Habla sobre la creación del mundo, el pecado y sus consecuencias, y el pacto de Dios con Abram.", isCorrect: true },
  { name: "Éxodo", description: "Relata cómo Dios liberó a su pueblo de la esclavitud y lo guió hacia la Tierra prometida.", isCorrect: true },
  { name: "Levítico", description: "Especie de manual con las leyes de Dios para su pueblo.", isCorrect: true },
  { name: "Números", description: "Contiene censos y leyes de Dios para su pueblo además de relatos sobre la rebelión del pueblo.", isCorrect: true },
  { name: "Deuteronomio", description: "Recordatorio de la ley y de la importancia de obedecer a Dios.", isCorrect: true },
  { name: "Josué", description: "Narra la historia de Josué como líder y la entrada del pueblo a la Tierra prometida.", isCorrect: true },
  { name: "Jueces", description: "Relata la vida del pueblo bajo el liderazgo de los jueces y el efecto de las decisiones que ellos tomaron.", isCorrect: true },
  { name: "Rut", description: "Narra la historia de Rut, historia de amor, de fidelidad y de redención.", isCorrect: true },
  { name: "1 Samuel", description: "Cuenta la vida del profeta Samuel (el último juez) y de Saúl y David, los primeros reyes.", isCorrect: true },
  { name: "2 Samuel", description: "Se enfoca en el reinado de David y en la importancia de obedecer a Dios.", isCorrect: true },
  // Add more books here...
];

const generateIncorrectDescription = (book: BibleBook): string => {
  const otherBooks = bibleBooks.filter(b => b.name !== book.name);
  const randomBook = otherBooks[Math.floor(Math.random() * otherBooks.length)];
  return randomBook.description;
};

export const generateQuestions = (count: number): BibleBook[] => {
  const questions: BibleBook[] = [];
  const shuffledBooks = [...bibleBooks].sort(() => 0.5 - Math.random());

  for (let i = 0; i < count; i++) {
    const book = shuffledBooks[i % shuffledBooks.length];
    const isCorrect = Math.random() > 0.5;

    questions.push({
      name: book.name,
      description: isCorrect ? book.description : generateIncorrectDescription(book),
      isCorrect: isCorrect,
    });
  }

  return questions;
};