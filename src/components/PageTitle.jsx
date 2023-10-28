import bg_img from "../assets/images/checkout/checkout.png"

const PageTitle = ({text}) => {
  return (
    <div className="relative">
        <img className="w-full h-full" src={bg_img} alt="" />
        <div className="absolute bg-gradient-to-r w-full h-full from-[#151515] to-[#15151500] top-0">
            <h2 className="text-4xl text-white ml-10 mt-[90px] font-semibold">{text}</h2>
        </div>
    </div>
  )
}

export default PageTitle