import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import { Addresses, AppLayout, Checkout, FlashDeals, Home, Login, MyOrders, OrderTracking, ProductPage, Products, SreachResults } from './pages'
import ProtectedRoute from './components/ProtectedRoute'
import { AdminDashboard,AdminDeliveryPartners,AdminLayout,AdminOrders,AdminProductForm,AdminProducts } from './pages/admin'
import { DeliveryDashboard, DeliveryLayout, DeliveryLogin } from './pages/delivery'



function App() {
  return (
    <>
      <Toaster position='top-right' toastOptions={{ duration: 3000, style: { background: "#1b3022", color: "#fff", borderRadius: '12px', fontSize: "14px" } }} />
      <Routes>
        {/* Auth pages - No Navbar & Footer */}
        <Route path='/login' element={<Login />} />
        {/* Main pages - No Navbar & Footer */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductPage />} />
          <Route path='search' element={<SreachResults />} />
          <Route path='deals' element={<FlashDeals />} />
          {/* Protected Routes */}

          <Route element={<ProtectedRoute />}>
            <Route path='checkout' element={<Checkout />} />
            <Route path='orders' element={<MyOrders />} />
            <Route path='orders/:id' element={<OrderTracking />} />
            <Route path='addresses' element={<Addresses />} />
          </Route>
        </Route>
        {/* Admin pages */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='products/new' element={<AdminProductForm />} />
          <Route path='products/:id/edit' element={<AdminProductForm />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='delivery-partners' element={<AdminDeliveryPartners />} />
        </Route>

        {/* Delivery Partner pages */}
        <Route path='/delivery/login' element={<DeliveryLogin />} />
        <Route path='/delivery' element={<DeliveryLayout />}>
          <Route index element={<DeliveryDashboard />} />
        </Route>

      </Routes>
    </>
  )
}

export default App