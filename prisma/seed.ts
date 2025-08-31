/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { procedures } from '../src/mockDB/procedures';

const prisma = new PrismaClient();

async function main() {
  console.log('Начинаем заполнение базы данных...');

  // Очищаем таблицу procedures
  await prisma.procedure.deleteMany();
  console.log('🧹 Таблица procedures очищена');

  // Создаем процедуры из mockDB

  for (const procedure of procedures) {
    await prisma.procedure.create({
      data: procedure,
    });
    console.log(`✅ Создана процедура: ${procedure.title}`);
  }

  console.log('🎉 База данных успешно заполнена!');
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении базы данных:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
