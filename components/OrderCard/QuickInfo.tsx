export const QuickInfo = () => {
  return (
    <>
      {/* quick info */}
      <div className="flex justify-between items-center mb-[25px]">
        {/* order id */}
        <p className="text-lg text-gray-scale-600 leading-7 tracking-[-.008em]">
          <strong>Order</strong> US5426899
        </p>
        {/* dates */}
        <p className="leading-[22px] tracking-[-.08px] text-right text-sm text-gray-scale-600">
          Created on Mar 6th 2021
          <br />
          Last updated on Mar 6th 2021
        </p>
      </div>
    </>
  )
}
