import Image from "next/image"
import React from "react"

export default function Offering() {
  return (
    <div className="p-3 ">
      <div className="grid gap-4">
        <div>
          <p className="text-gray-900 mb-2 text-pretty text-center">
            Berikut adalah karpet yang akan kami tawarkan dengan harga
            Rp.300.000 per meter
          </p>
          <Image src="/c1.webp" alt="c1" width={600} height={400} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Image src="/c2.webp" alt="c1" width={600} height={400} />
          </div>
          <div>
            <Image src="/c4.webp" alt="c1" width={600} height={400} />
          </div>
          <div>
            <Image src="/c3.webp" alt="c1" width={600} height={400} />
          </div>
          <div>
            <Image src="/c2.webp" alt="c1" width={600} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}
