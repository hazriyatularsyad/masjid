import React from "react"
import Gallery from "./_components/card"
import Link from "next/link"

export default function Content() {
  return (
    <div>
      <div className="flex flex-col text-center p-3 ">
        <h2 className="py-2 font-bold text-gray-900 text-l uppercase">
          Wakaf Untuk Masjid Mutiara Hati
        </h2>
        <p className="text-balance text-sm text-slate-600">
          Assalamu’alaikum Warahmatullahi Wabarakatuh, Segala puji bagi Allah
          SWT yang telah memberikan kita nikmat iman dan kesempatan untuk
          berbagi kebaikan. Kami dari pengurus Masjid Mutiara Hati ingin
          mengajak Bapak/Ibu serta saudara-saudari sekalian untuk berpartisipasi
          dalam amal jariyah melalui wakaf untuk pembelian karpet masij mutiara
          hati.
        </p>
      </div>
      <Gallery />
      <div className="p-3">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              Untuk informasi lebih lanjut atau penyaluran wakaf, Anda dapat
              menghubungi:
            </h5>
          </a>
          <div className="mb-3 font-normal text-gray-700 flex flex-col">
            <p> 📞 [Nomor kontak]</p>
            <p> 💼 [Rekening wakaf]</p>
            <p className="py-3">
              “Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia
              lainnya.” – (HR. Ahmad)
            </p>
          </div>
          <Link
            href="https://wa.me/6282288504544?text=Assalamualaikum,"
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none "
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}
