const product = {
    name: "Smartphone",
    price: 599.99,
    discount: 0.1,
  };
  

  const formattedProductInfo = `
    Product: ${product.name}
    Price: ${product.price}
    ${
      product.discount > 0
        ? `Discount: ${product.discount * 100}% off`
        : "No discount available"
    }
    Total: ${product.price - product.price * product.discount}
  `;
  console.log(formattedProductInfo);
