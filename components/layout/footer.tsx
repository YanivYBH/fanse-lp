import Image from "next/image";

export default function Footer() {
  return (
    <div>
        
    <div className="absolute flex w-full flex-col items-center justify-center gap-3 border-t border-gray-200 bg-white py-5 text-center text-xs text-gray-400 sm:flex-col sm:gap-3">
    <div className="flex items-center sm:flex-row flex-row justify-center gap-3 sm:gap-2" >
    <a href="#"><Image src={"/ig.svg"} width={24} height={24} alt="ico" /></a>
    <a href="#"><Image src={"/tw.svg"} width={24} height={24} alt="ico" /></a>
    </div>
    
      
      <div className="flex items-center sm:flex-row flex-col justify-center gap-3 sm:gap-2">
      <p>@2023 Fanse</p>
        <a href="#">Fanse by Creators for Creators Platform</a>
        <div className="flex items-center sm:flex-row flex-row justify-center gap-3 sm:gap-2" >
        <p className="sm:inline-block hidden">|</p>
        <a href="/photographers">Photographers Program</a>
        <p className="sm:inline-block hidden">|</p>
        <a href="/start">How To Start</a>
        <p className="sm:inline-block">|</p>
        <a href="#">Privacy Policy</a>
        <p className="sm:inline-block ">|</p>
        <a href="/faq">FAQs</a>
    </div>
       
      </div>
    </div>
    </div>
  );
}
