import Image from "next/image";
import { doctorDetails, navbarItems } from "../store";

export default function Navbar() {
  return (
    <div className="mx-10 my-4 bg-white rounded-full py-4 px-10 flex items-center justify-between">
      <div>
        <Image src="/TestLogo.svg" alt="logo" width={211} height={41} />
      </div>
      <div className="flex items-center justify-center gap-10">
        {navbarItems.map(({ logo, text }, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-full py-2 px-4 hover:bg-navbar-hover cursor-pointer"
          >
            <Image src={logo} alt={text} width={20} height={20} />
            <span className="text-lg ml-2">{text}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4">
        <Image
          src={doctorDetails.image}
          alt={doctorDetails.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="font-bold">
          {doctorDetails.name}
          <br />
          <span className="font-normal">{doctorDetails.spec}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image src="/gearIcon.svg" alt="settings" width={20} height={20} />
          <Image src="/optionsVert.svg" alt="options" width={5} height={5} />
        </div>
      </div>
    </div>
  );
}
