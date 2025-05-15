import Header from "@/components/Header";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center h-screen py-4 overflow-y-auto">
        <h1 className="text-4xl font-bold">
          Bienvenido, a <span className="text-red-500">BaseTime</span>
        </h1>
      </div>

      <Layout />
    </>
  );
}
