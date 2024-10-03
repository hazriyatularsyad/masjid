import Image from "next/image"
import React from "react"

export default function Gallery() {
  return (
    <div className="p-3">
      <h2 className="p-3 text-center text-gray-900 text-l">
        Berikut kami lampirkan keadaan sekarang
      </h2>
      <div className=" flex flex-wrap w-full">
        <div className="w-1/2 p-2 overflow-hidden">
          <Image
            src="/b.jpeg"
            width={500}
            height={400}
            alt="1"
            className="w-full h-[20vh] rounded-lg hover:scale-110 duration-300"
          />
        </div>
        <div className="w-1/2 p-2 overflow-hidden">
          <Image
            src="/c.jpeg"
            width={500}
            height={400}
            alt="2"
            className="w-full h-[20vh] rounded-lg hover:scale-110 duration-300"
          />
        </div>
        <div className="w-1/2 p-2 overflow-hidden">
          <Image
            src="/d.jpeg"
            width={500}
            height={400}
            alt="3"
            className="w-ful h-[20vh] rounded-lg hover:scale-110 duration-300"
          />
        </div>
        <div className="w-1/2 p-2 overflow-hidden">
          <Image
            src="/c.jpeg"
            width={500}
            height={400}
            alt="4"
            className="w-full h-[20vh] rounded-lg hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  )
}
