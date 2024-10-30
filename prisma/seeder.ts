// import { Prisma, PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";
// import argon2 from "argon2";

// const prisma = new PrismaClient();

// const main = async () => {
//   for (let i = 1; i <= 10; i++) {
//     const data: Prisma.UserCreateInput = {
//         name: faker.person.firstName(),
//         email: faker.internet.email(),
//         password: await argon2.hash("password"),
//         profile: {
//           create: {
//             bio: faker.lorem.sentence(),
//           },
//         },
//         posts: {
//           create: [
//             {
//               title: faker.lorem.words(5),
//               content: faker.lorem.paragraph(),
//               published: faker.datatype.boolean(),
//             },
//           ],
//         },
//     };
//   }
// };

// main().then(async () => {
//     await prisma.$disconnect();
// }).catch(async (error) => {
//     console.error(error);
//     await prisma.$disconnect();
//     process.exit(1);
// }).finally(async () => {
//     await prisma.$disconnect();
// });



import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: await argon2.hash("password"),
        profile: {
          create: {
            bio: faker.lorem.sentence(),
          },
        },
        posts: {
          create: [
            {
              title: faker.lorem.words(5),
              content: faker.lorem.paragraph(),
              published: faker.datatype.boolean(),
            },
          ],
        },
        created_at: faker.date.anytime(),
        updated_at: faker.date.anytime(),
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
