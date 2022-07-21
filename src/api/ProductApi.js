export const productAPI = {
  getProducts: async () => {
    try {
      const response = await fetch(
        `https://makartemlyakov.github.io/store/data/product.json`,
        {
          method: "GET",
        }
      );

      if (response.status !== 200) {
        throw Error("Ошибка запроса");
      }
      return response.json();
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  },
};
