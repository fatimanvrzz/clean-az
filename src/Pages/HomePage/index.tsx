
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[1300px] border-1 h-screen ">
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

export default HomePage
