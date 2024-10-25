export default function Header() {
  return (
    <div className="w-full bg-black px-4 py-2 flex">
      <div className="text-white uppercase text-center text-[15px] w-1/4 px-4 py-2 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a>home</a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 px-4 py-2 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a>about</a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 px-4 py-2 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a>menu</a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 px-4 py-2 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a>cafe</a>
      </div>
    </div>
  );
}
