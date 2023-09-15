import { vi } from "vitest";
import { faker } from "@faker-js/faker";

export const dataPoint = vi.fn(() => {
  return {
    get: vi.fn(() => {
      return {
        docs: [
          {
            data: vi.fn(() => {
              return {
                id: faker.string.uuid(),
                title: faker.lorem.words(5),
                description: faker.lorem.words(10),
                price: faker.number.int(100),
                image: faker.image.url(),
                user: {
                  uid: faker.string.uuid(),
                  email: faker.internet.email(),
                  displayName: faker.person.fullName(),
                  phoneNumber: faker.phone.number(),
                  photoURL: faker.internet.avatar(),
                },
              };
            }),
          },
        ],
      };
    }),
    add: vi.fn(() => {
      return {
        id: faker.string.uuid(),
      };
    }),
  };
});
