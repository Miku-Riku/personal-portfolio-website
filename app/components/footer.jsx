// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#1d471e] border-[#25332E] text-[#c5e2d1]">
  <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
    <div className="flex justify-center -z-40">
      <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <p className="text-sm">
        © Personal Portfolio of <Link target="_blank" href="https://www.linkedin.com/in/bhaswanth-vangapati/" className="text-[#16f2b3]">V Bhaswanth</Link>
      </p>             
    </div>
  </div>
</div>

    // <div className="relative border-t bg-[#2F4F4F] border-[#25332E] text-[#B0B3A8]">
    //   <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
    //     <div className="flex justify-center -z-40">
    //       <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
    //     </div>
    //     <div className="flex flex-col md:flex-row items-center justify-center">
    //       <p className="text-sm">
    //         © Personal Portfolio of <Link target="_blank" href="https://www.linkedin.com/in/abu-said-bd/" className="text-[#16f2b3]">V Bhaswanth</Link>
    //       </p>             
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;