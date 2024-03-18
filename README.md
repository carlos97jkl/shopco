Shop.co a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### How to use

Welcome! In the next steps, you can see how to use the app and this is the link that you can interact with the app [Link to app](https://main.dkpw63iosul0x.amplifyapp.com/en) :

### 1. Product Detail

In the first part of the app when you enter, it shows you the product detail page, on this page, you can see all about the product, you pass through the different images of the product, see the details, and the price and you can set the quantity that wants to buy

![image](https://github.com/carlos97jkl/shopco/assets/26122890/4cb12f67-41f6-405d-b97b-d0b683679811)

### 2. Payment Checkout

When you have added the quantity of the product that you want to buy, you can click on the button **PAY WITH CREDIT CARD**, and the app will show a dialog. In the first step of this dialog, you can type the payment data, in this case, we can only pay with a credit card.

As you know this app is just a test, in which if you want a successful payment you must type the next fake credit card **(374245455400126)**, this credit card number is hardcoded in the app. Otherwise, if you want to test the messages failed, you can type another credit card number, but remember it should be one valid

![image](https://github.com/carlos97jkl/shopco/assets/26122890/afe3819f-c17f-4649-b533-5872ec15ee2e)

### 3. Summary

Once you type the payment data correctly, and you click on the next button, the app takes you to the last step, in this step, you can  see the summary of your buy. When you click on **PAY NOW** button the app show the last step that we will describe in the next step 

### 4. Confirmation Result

If you type the correct data, as you can see in Step 2, the app will show the next dialog

![image](https://github.com/carlos97jkl/shopco/assets/26122890/7ca09e94-dee2-4ba7-8d1e-a5f2f8ee52d9)

Otherwise, it will show you a toast error like this

![image](https://github.com/carlos97jkl/shopco/assets/26122890/bb2493a1-432f-47c7-822f-eef0a67bc386)


### Test Coverage

![image](https://github.com/carlos97jkl/shopco/assets/26122890/c5194e7b-2e34-4f45-b3f4-31fc3ee19043)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
