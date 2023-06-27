import { dataPoint } from '../db.server';
import { getStorage, ref } from 'firebase-admin/storage';
import type { Post, PostUser } from '~/types/publish';

const db = {
  posts: () => dataPoint<Post>('posts'),
};

export async function getPosts() {
  const posts = await db.posts().get();
  const postData = posts.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  });

  return postData;
}

export async function createPost(postInfo: Post, image: File, user: PostUser) {
  const bucket = getStorage().bucket();
  const buffer = Buffer.from(await image.arrayBuffer());
  await bucket.file(`posts/${image.name}`).save(buffer, { contentType: image.type });
  const imageURL = bucket.file(`posts/${image.name}`).publicUrl();

  const post = await db.posts().add({
    ...postInfo,
    image: imageURL,
    user
  });

  return post.id;
}