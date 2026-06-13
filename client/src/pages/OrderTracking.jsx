import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDashboardOrdersData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowLeftIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import OrderOTP from "../components/OrderTracking/OrderOTP";
import LiveMap from "../components/OrderTracking/LiveMap";
import OrderTimeLine from "../components/OrderTracking/OrderTimeLine";

function OrderTracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  //latitude and longitude in LiveLocation
  const [liveLocation, setLiveLoaction] = useState(null);
  const currency = "$";
  useEffect(() => {
    setOrder(dummyDashboardOrdersData.find((order) => order._id === id));
    setLoading(false);
  }, [id, navigate]);

  if (loading) return <Loading />;
  if (!order) return null;

  return (
    <div className="min-h-screen mb-20 bg-app-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        {/* Header Btn */}
        <button
          onClick={() => navigate("/orders")}
          className="flex items-center gap-2 text-sm text-app-text-light hover:text-app-green mb-6 transition-colors"
        >
          <ArrowLeftIcon className="size-4" /> Back to Orders
        </button>

        {/* orderId, date, status */}
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl font-semibold text-app-green">
              Order #{order._id.slice(-8).toUpperCase()}
            </h1>
            <p className="text-sm text-app-text-light mt-1">
              Placed on{" "}
              {new Date(order.createsAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <span
            className={`px-4 py-1.5 text-smfont-semibold rounded-full ${order.status === "Delivered" ? "bg-green-100 text-green-700" : order.status === "Cancelled" ? "bg-red-100 text-red-700" : "bg-app-green/10 text-app-orange"}`}
          >
            {order.status}
          </span>
        </div>

        {/* Main Content Div */}

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* leftSie - Map + Order Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* OTP Card */}
            <OrderOTP order={order} />
            {/* Live Map */}
            <LiveMap order={order} liveLocation={liveLocation} />
            {/* Progress TimeLine */}
            <OrderTimeLine order={order} />

            {/* Delivery Person */}
            {order?.deliveryPartner &&
              order.status !== "Delivered" &&
              order.status !== "Cancelled" && (
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full bg-app-green flex-center">
                      <span className="text-white font-semibold text-sm">
                        {order.deliveryPartner.name.charAt(0)}
                      </span>
                    </div>

                    <div className="">
                      <p className="text-sm font-semibold text-app-green">
                        {order.deliveryPartner.name}
                      </p>
                      <p className="text-sm text-app-text-light capitalize">
                        {order.deliveryPartner.vehicleType} : Delivery Partner
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${order.deliveryPartner.phone}`}
                    className="p-2.5 bg-app-cream rounded-xl hover:bg-app-cream-drak transition-colors"
                  >
                    <PhoneIcon className="size-4 text-app-green" />
                  </a>
                </div>
              )}
          </div>

          {/* rightSide - Order Details */}
          <div className="space-y-5">
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-app-green mb-3 flex items-center gap-2">
                <MapPinIcon className="size-4" /> Delivery Address
              </h3>
              <p className="text-sm text-app-text-light leading-relaxed">
                {order?.shippingAddress.label}
                <br />
                {order?.shippingAddress.address}
                <br />
                {order?.shippingAddress.city}, {order?.shippingAddress.state}{" "}
                {order?.shippingAddress.zip}
              </p>
            </div>

            {/* items */}
            <div className="bg-white rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-app-green mb-3">
                Items ({order?.items.length})
              </h3>

              <div className="space-y-3">
                {order?.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-10 rounded-lg object-cover"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-app-green">
                        {item.name}
                      </p>
                      <p className="text-xs text-app-text-light ">
                        x{item.quantity}
                      </p>
                    </div>

                    <span className="text-am font-semibold">
                      {currency}
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-app-border space-y-1.5 text-sm">
                {/* subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-app-text-light">Subtotal</span>
                  <span className="">
                    {currency}{order?.subtotal.toFixed(2)}
                  </span>
                  
                </div>

                {/* DeliveryFee */}
                <div className="flex items-center justify-between">
                  <span className="text-app-text-light">Delivery Fee</span>
                  <span className="">
                    {order.deliveryFee === 0 ? "Free" :`${currency}${order.deliveryFee.toFixed(2)}` }
                  </span>
                  
                </div>

                {/* tax */}
                <div className="flex items-center justify-between">
                  <span className="text-app-text-light">Tax</span>
                  <span className="">
                    {currency}{order?.tax.toFixed(2)}
                  </span>
                  
                </div>

                {/*Total Price */}
                <div className="flex items-center justify-between border-t pt-2 border-app-border font-semibold text-app-green">
                  <span className="">Total</span>
                  <span className="">
                    {currency}{order?.total.toFixed(2)}
                  </span>
                  
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
