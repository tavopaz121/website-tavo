export function getStorage() {
  return {
    bucket: () => {
      return {
        file: () => {
          return {
            save: async () => await Promise.resolve(),
            publicUrl: () =>
              "https://storage.googleapis.com/vitest.appspot.com/posts/test.png",
          };
        },
      };
    },
  };
}
