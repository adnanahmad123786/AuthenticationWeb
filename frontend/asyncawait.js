async function createProductWithAsyncAwait(productData) {
    try {
      const response = await fetch('http:/localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to create product', response);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  // Usage example:
  const productData = {
    name: "New Product",
    description: "A new product description",
    price: 20,
    stockQuantity: 100
  };
  
  createProductWithAsyncAwait(productData)
    .then(response => {
      console.log("Product created:", response);
    })
    .catch(error => {
      console.error("Error creating product:", error);
    });
  