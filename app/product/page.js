import Layout from "../components/layout";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { BsPaypal, BsStripe } from "react-icons/bs";


export default function ProductPage() {
    const product = {
        id: 1,
        name: "Demo Product",
        image: "/product1.jpg",
        price: 99.99,
        description: "This is a demo product. It is not a real product and cannot be purchased.",
        seller: "Demo Seller",
      };
  return (
    <Layout>
      <div className="flex flex-row gap-4 m-auto justify-center mt-9">
        <div className="w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4 ml-1 mt-12">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl">${product.price}</p>
          <p>{product.description}</p>
          <p>
            Sold by: <span className="font-bold">{product.seller}</span>
          </p>
          <button className="bg-black text-white px-4 py-2 w-1/2 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105 rounded-md flex items-center gap-2">
            <IoIosContact className="text-xl" />
            Contact Seller
          </button>
          <p className="font-bold">Payment Options:</p>
          <div className="flex gap-2">
            <BsPaypal className="text-3xl" />
            <BsStripe className="text-3xl" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
