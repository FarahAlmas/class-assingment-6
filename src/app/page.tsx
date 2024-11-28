import Navbar from "@/components/Navbar";



export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 mt-20">
      {/* Full-width div */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-red-500 p-6 text-center border rounded">
        My Name is Farah Almas 👩🏻‍💼
      </div>

      {/* Two half-width divs */}
      <div className="bg-green-500 p-6 text-center border rounded">
       Iam a Software Developer 💻 
      </div>
      <div className="bg-yellow-500 p-6 text-center border rounded">
       I Love Coding ♥♥♥
      </div>
      </div>
      </>
  )
}