"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import UserSidebar from "../components/user-sidebar";
import ProductList from "../components/product-list";
import Layout from "../components/layout";

export default function UserPage() {
  return (
    <Layout>
    <div className="flex flex-row min-h-screen">
      <aside className="w-1/5">
        <UserSidebar />
      </aside>
      <main className="flex-1">
        <ProductList />
      </main>
    </div>
    </Layout>
  );
}
