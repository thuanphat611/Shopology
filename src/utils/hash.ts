import { genSalt, hash } from 'bcrypt';

function generateSalt(numberOfCharacters = 10) {
  return genSalt(numberOfCharacters);
}

async function bcryptHash({
  salt,
  source,
}: {
  salt?: string | number;
  source: string;
}) {
  salt = salt || (await generateSalt());

  return hash(source, salt);
}

export default { bcryptHash };
