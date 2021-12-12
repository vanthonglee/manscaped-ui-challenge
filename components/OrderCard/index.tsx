import clsx from 'clsx'
import { OrderMatrix } from './OrderMatrix'
import { QuickInfo } from './QuickInfo'

export interface OrderCardProps {
  className: string
}

export const OrderCard = ({ className }: OrderCardProps) => {
  return (
    <section className={clsx([className])}>
      <QuickInfo />
      {/* modal */}
      <div className="p-6 bg-white">
        <OrderMatrix />
        {/* shipping address */}
        <div className="mt-[27px]">
          <h3 className="text-gray-scale-600 text-sm leading-[22px] tracking-[.07em] uppercase font-bold mb-1">
            Shipping Address
          </h3>
          <p className="text-sm text-gray-scale-600 leading-[22px] tracking-[-.08px]">
            Ryan Fralick
            <br /> 1489 DESERT SPRINGS AVE <br />
            RICHLAND, Washington 99352 <br />
            United States
          </p>
        </div>
        {/* tags */}
        <div className="flex gap-[10px] mt-3 mb-5">
          <div className="flex items-center justify-center px-[9px] py-[3px] font-medium border rounded-[30px] bg-gray-scale-200 ">
            <div className="flex-initial max-w-full text-xs font-bold text-gray-scale-500 leading-5 tracking-[-.06px]">
              SUBSCRIPTION_ORDER
            </div>
          </div>
          <div className="flex items-center justify-center px-[9px] py-[3px] font-medium border rounded-[30px] bg-gray-scale-200 ">
            <div className="flex-initial max-w-full text-xs font-bold text-gray-scale-500 leading-5 tracking-[-.06px]">
              PAID
            </div>
          </div>
          <div className="flex items-center justify-center px-[9px] py-[3px] font-medium border rounded-[30px] bg-gray-scale-200 ">
            <div className="flex-initial max-w-full text-xs font-bold text-gray-scale-500 leading-5 tracking-[-.06px]">
              UNFULFULLED
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] border-[#E6E6E6]" />
        {/* bottom ctas */}
        <div className="mt-6 flex gap-[13px]">
          <button className="p-3 font-bold text-white text-[15px] leading-[18px] bg-gray-scale-400 rounded-[4px]">
            Cancel
          </button>
          <button className="p-3 font-bold text-white text-[15px] leading-[18px] bg-gray-scale-400 rounded-[4px]">
            Refund
          </button>
          <button className="p-3 font-bold text-white text-[15px] leading-[18px] bg-gray-scale-400 rounded-[4px]">
            Resend Confirmation
          </button>
          <button className="p-3 font-bold text-white text-[15px] leading-[18px] bg-gray-scale-400 rounded-[4px]">
            Resend Tracking
          </button>
        </div>
      </div>
    </section>
  )
}
