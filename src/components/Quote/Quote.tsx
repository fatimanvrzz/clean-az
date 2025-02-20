import { BsArrowRight } from "react-icons/bs";


const Quote = () => {
    return (
        <div className='flex absolute bottom-[31px] left-[20px]'>
            <div className="flex justify-between items-center w-[275px] h-[50px] bg-white border-none rounded-2xl px-4">
                <p>Get a Quote</p>
                <div className="flex justify-center items-center w-[35px] h-[35px] bg-[#0F42FF] rounded-xl text-white">
                    <BsArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Quote
