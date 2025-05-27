import { Outlet, Link, Links } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
export default function layout() {
  return (
    <>
        <div className="bg-neutral-100 dark:bg-black flex justify-center min-h-screen dark:text-white">
            <div className="p-4 max-w-[640px] flex-1 flex flex-col gap-8">
              <NavBar />
              <div className="flex flex-col flex-1">
              <Outlet/>
              </div>
              
              <Footer />
             
            </div>
        </div>
      
        
    </>
  )
}
  