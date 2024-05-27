function createProductWithCallbackPromises(productData) {
    return new Promise((resolve, reject) => {
      fetch('http:localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create product');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
  
  // Usage example:
  const productData = {
    name: "New Product",
    description: "A new product description",
    price: 20,
    stockQuantity: 100
  };
  
  createProductWithCallbackPromises(productData)
    .then(response => {
      console.log("Product created:", response);
    })
    .catch(error => {
      console.error("Error creating product:", error);
    });
  