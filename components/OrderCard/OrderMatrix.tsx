import Image from 'next/image'

export interface Product {
  image: string
  imageWidth: number
  imageHeight: number
  name: string
  quantity: number
  price: number
}

export const OrderMatrix = () => {
  const products: Product[] = [
    {
      image: '/images/tennis-ball.png',
      imageWidth: 62,
      imageHeight: 62,
      name: 'Ultricies Nibh',
      quantity: 2,
      price: 17.98,
    },
    {
      image: '/images/golf-ball.png',
      imageWidth: 60,
      imageHeight: 60,
      name: 'Fringilla Sollicitudin Consectetur',
      quantity: 1,
      price: 14.99,
    },
  ]

  return (
    <div className="text-gray-scale-600">
      <table className="w-full table-fixed ">
        <thead>
          <tr className="mb-[11px]">
            <th className="w-[15%]"></th>
            <th className="text-left text-sm leading-[22px] tracking-[.07em] uppercase font-bold w-[30%]">
              Product
            </th>
            <th className="text-center text-sm leading-[22px] tracking-[.07em] uppercase font-bold w-[20%]">
              Quantity
            </th>
            <th className="w-[35%]"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((v: Product, i) => (
            <tr
              key={`product-${v.name}-${i}`}
              className="border-b-[1px] border-[#E6E6E6]"
            >
              <td className="align-middle">
                <div className="py-[10px] flex">
                  <Image
                    src={v.image}
                    alt={v.name}
                    width={v.imageWidth}
                    height={v.imageHeight}
                  />
                </div>
              </td>
              <td>
                <div>{v.name}</div>
              </td>
              <td>
                <div className="text-center">{v.quantity}</div>
              </td>
              <td>
                <div className="pr-16 text-right"> ${v.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b-[1px] border-[#E6E6E6]">
            <td className="w-[15%]">
              <div className="font-bold leading-[26px] tracking-[-.08px] pt-[23px] pb-[22px]">
                Total:
              </div>
            </td>
            <td className="w-[30%]"></td>
            <td className="w-[20%]"></td>
            <td className="w-[35%]">
              <div className="pt-[23px] pb-[22px] pr-16 text-right">
                $
                {products.reduce(
                  (totalPrice, current) => totalPrice + current.price,
                  0
                )}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
