export type PostUser = {
  uid: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
};

export type Post = {
  title: string;
  description: string;
  price: number;
  image: string;
};
