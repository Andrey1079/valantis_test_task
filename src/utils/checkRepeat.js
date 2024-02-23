const checkRepeat = (products) => {
  const productsSet = products.reduce((res, product) => {
    if (!res.find((element) => element.id === product.id)) {
      res.push(product);
    }
    return res;
  }, []);

  return productsSet;
};
export default checkRepeat;
