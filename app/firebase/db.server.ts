import type { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { getFirestore } from "firebase-admin/firestore";

// helper function to convert firestore data to typescript
const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

// helper to apply converter to multiple collections
const dataPoint = <T extends FirebaseFirestore.DocumentData>(
  collectionPath: string
) => getFirestore().collection(collectionPath).withConverter(converter<T>());

type Post = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[]
};

const db = {
  posts: () => dataPoint<Post>(`/posts`),
};

export async function getPosts() {
  const posts = await db.posts().get();
  const postData = posts.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  });

  return postData
}

