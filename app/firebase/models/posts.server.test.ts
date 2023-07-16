// @vitest-environment node
import { vi, expect } from "vitest";
import { createPost } from "./posts.server";
import { faker } from "@faker-js/faker";

vi.mock("../db.server");
vi.mock("firebase-admin/storage");

describe("createPost", () => {
  it('should receive "postInfo" literal object, an "image" File and the "user" creator', async () => {
    const postInfo = {
      title: faker.lorem.words(5),
      description: faker.lorem.words(10),
      price: faker.number.int(100),
    };
    const image = new File([""], "test.png", { type: "image/png" });
    const user = {
      uid: faker.string.uuid(),
      email: faker.internet.email(),
      displayName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      photoURL: faker.internet.avatar(),
    };

    const postId = await createPost(postInfo, image, user);

    expect(postId).toBeTruthy();
  });

  it('should throw an error if "postInfo" is falsy (null, undefined, 0, -0, 0n, false, NaN)', async () => {
    const postInfo = null;
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should throw an error if "postInfo" is an Array', async () => {
    const postInfo = ["first", { second: 1 }];
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should throw an error if "image" is falsy (null, undefined, 0, -0, 0n, false, NaN)', async () => {
    const image = null;
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should throw an error if "image" is an Array', async () => {
    const image = [];
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should throw an error if "user" is falsy (null, undefined, 0, -0, 0n, false, NaN)', async () => {
    const user = null;
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should throw an error if "user" is an Array', async () => {
    const user = [];
    try {
      await createPost(postInfo, image, user);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
