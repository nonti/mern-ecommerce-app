import { Outlet } from "react-router-dom"
import ShoppingHeader from "./header"

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-slate-400 overflow-hidden ">
      {/**common header */}
      <ShoppingHeader/>
      <main className="flex flex-col w-full">
        <Outlet/>
      </main>
    </div>
  )
}

export default ShoppingLayout
