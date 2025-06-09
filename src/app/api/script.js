import bcrypt from 'bcrypt';
import { PrismaClient } from '../../generated/prisma/client.js';
import { log } from 'console';

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany();

  const password = 'Rikimaruinvoker0403!';
  const hash = bcrypt.hashSync(password, 10);
  const base64 = Buffer.from(hash).toString('base64');

  console.log('original:', hash);
  console.log('base64:', base64);
}

main();
