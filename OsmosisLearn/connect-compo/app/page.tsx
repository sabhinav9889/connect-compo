import Image from "next/image";
import Card from "./component/card";
import Conect from './component/connect'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Card/> */}
      <Conect/>
    </main>
  );
}
