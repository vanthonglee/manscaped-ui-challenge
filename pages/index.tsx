import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { OrderCard } from '../components/OrderCard'

const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-[#F4F5F7]">
        <OrderCard className="w-[704px]" />
      </main>
    </>
  )
}

export default Home
