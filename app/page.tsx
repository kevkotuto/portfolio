
import Title from "@/components/header/Title";

const image = [
  {
      src : "/logo/1.png",
      alt : "NappyLocks"
  },
  {
      src : "/logo/2.png",
      alt : "GeneraleCi"
  },
  {
      src : "/logo/3.png",
      alt : "Bernabe Ci"
  },
  {
      src : "/logo/4.png",
      alt : "Mr Bricolage Ci"
  },
  {
      src :"/logo/5.png",
      alt : "Moro"
  }
]

export default function Home() {
  return (
    <div className="">
      <div className="h-[30rem] rounded-b-[5rem] bg-[#F3F2F1] dark:bg-[#1E1E1E] ">
        <div className="h-20"></div>
        <Title />
      </div>
      <div  className=' min-h-60 border-b-2 rounded-b-[5rem] justify-center z-0 mb-32 flex flex-row items-center gap-10 flex-wrap p-4 '>
            {
                image.map((item, index) => {
                    return (
                        <img src={item.src} alt={item.alt} key={index} className="w-32 h-32 object-cover" />
                    )
                })
            }
      </div>

    </div>
  );
}