import Navbar from "../../components/Navbar/Navbar";
import Gif from "../../assets/images/gif.gif"
import Quote from "../../components/Quote/Quote";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1300px] w-[90%] sm:w-[95%] md:w-[90%] lg:[90%] h-screen">
        <Navbar />
        <div className="h-auto items-center leading-10 lg:leading-16">
          <p className="text-[22px] font-medium md:text-[45px] leading-10 lg:leading-13 mt-[50px]">
            Enjoy the moments that matter <br />
            We’ll handle the <span className="text-[#0F42FF]">Cleanup</span>
          </p>
        </div>

        <div className="mt-[20px] h-auto relative">
          <img src={Gif} className="rounded-xl w-full max-w-[1300px] h-auto xl:h-[425px]" />
          <Quote/>
        </div>
        <div className="w-full flex mt-[20px] text-[16px] text-[#5C5C5E]">
          <p className="ml-auto text-right w-[491px] h-[40px]">From top to bottom, we make your space shine, let us handle the mess while you focus on what matters.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
