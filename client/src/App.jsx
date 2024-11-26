import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Signin from "./pages/auth/signin"
import Signup from "./pages/auth/signup"
import Admindashboard from "./pages/admin-view/dashboard"
import AdminLayout from "./components/admin-view/layout"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingLisitng from "./pages/shopping-view/lisitng"
import ShoppingHome from "./pages/shopping-view/home"

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-slate-400"> 
      {/**common  components */}
      <Routes>
        <Route path='/auth' element={<AuthLayout/>} >
          <Route path='signin' element={<Signin/>} />
          <Route path='signup' element={<Signup/>} />
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path='dashboard' element={<Admindashboard/>} />
          <Route path='features' element={<AdminFeatures/>} />
          <Route path='products' element={<AdminProducts/>} />
          <Route path='orders' element={<AdminOrders/>} />
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}>
          <Route path='home' element={<ShoppingHome/>}/>
          <Route path='listing' element={<ShoppingLisitng/>}/>
          <Route path='checkout' element={<ShoppingCheckout/>}/>
          <Route path='account' element={<ShoppingAccount/>}/>


        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
