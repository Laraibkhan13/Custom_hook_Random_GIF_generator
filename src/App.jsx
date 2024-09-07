import Random from "./component/Random"
import Tag from "./component/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg text-2xl w-11/12 py-2 px-10 text-center font-bold mt-[20px] ">RANDOM GIF</h1>
      <div className=" flex flex-col w-full items-center mt-[20px] gap-y-10">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
