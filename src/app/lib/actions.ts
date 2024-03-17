"use server";

export async function getProduct() {
  // const response = await fetch("https://api.escuelajs.co/api/v1/products/8");
  // return response.json()
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        images: [
          "https://i.imgur.com/9LFjwpI.jpeg",
          "https://i.imgur.com/vzrTgUR.jpeg",
          "https://i.imgur.com/p5NdI6n.jpeg",
        ],
        title: "Classic Red Jogger Sweatpants",
        price: "98",
        description:
          "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
      });
    }, 300);
  });
}

export async function verifyPay(formData: any) {
  const mockDataVerify = {
    cardNumber: "3742 454554 00126",
    expiryDate: "02 / 29",
    securityCode: "4444",
  };

  return mockDataVerify.cardNumber === formData.cardNumber;
}
