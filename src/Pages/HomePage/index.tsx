import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1300px] w-[90%] sm:w-[95%] md:w-[90%] lg:w-full px-4 md:px-8 lg:px-12 border-1 h-screen">
        <Navbar />
        {/* <div className="h-auto mt-[56px] items-center">
          <p className="text-[45px] font-medium">
          Enjoy the moments that matter <br/>
          We’ll handle the <span className="text-[#0F42FF]">Cleanup</span>
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default HomePage;
