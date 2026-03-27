import Image from "next/image";
import CardComponent from "./component/CardComponent";

export default function Home() {

  return (
    <div className="flex flex-col flex-1  bg-red-500 font-sans dark:bg-black">
      <main className="flex flex-col justify-baseline items-center">
        <div className="text-center bg-white min-w-150 opacity-70 mt-12 rounded-3xl ">
          <h1 className="text-3xl ">Pokemon API</h1>
        </div>
        <div className="flex justify-center">
          <input type="text" className="bg-amber-600" />
        </div>
        <CardComponent></CardComponent>
      </main>
    </div>
  );
}
