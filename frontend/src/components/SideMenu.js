import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SideMenu() {
     const [suratExpanded, setSuratExpanded] = useState(false)
     const [pembayaranExpanded, setPembayaranExpanded] = useState(false)

     const toggleSurat = () => setSuratExpanded(!suratExpanded)
     const togglePembayaran = () => setPembayaranExpanded(!pembayaranExpanded)
     return (
          <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
               <div className="flex flex-col items-center py-8">
                    <img src="/path/to/profile-image.jpg" alt="Foto Profil" className="w-24 h-24  object-cover mb-4" />
                    <h2 className="text-xl font-semibold">Nama Pengguna</h2>
                    <p className="text-sm text-gray-400">NIP: 123456789</p>
               </div>
     
               <nav className="flex-1 px-4">
                    <ul className="space-y-2">
                         <li><Link to="/profile" className="block py-2 hover:bg-gray-700 rounded">Profile</Link></li>
                         <li>
                              <button onClick={toggleSurat} className="w-full text-left py-2 flex justify-between items-center hover:bg-gray-700 rounded"> Surat </button>
                              {suratExpanded && (
                                   <ul className="pl-4 mt-2 space-y-1">
                                        <li><Link to="/surat/surat-umum" className="block py-1 hover:text-gray-300">Surat Umum</Link></li>
                                        <li><Link to="/surat/surat-keputusan" className="block py-1 hover:text-gray-300">Surat Keputusan</Link></li>
                                        <li><Link to="/surat/surat-masuk" className="block py-1 hover:text-gray-300">Surat Masuk</Link></li>
                                        <li><Link to="/surat/surat-keluar" className="block py-1 hover:text-gray-300">Surat Keluar</Link></li>
                                        <li><Link to="/surat/surat-keterangan-siswa" className="block py-1 hover:text-gray-300">Surat Keterangan Siswa</Link></li>
                                        <li><Link to="/surat/surat-keterangan-guru" className="block py-1 hover:text-gray-300">Surat Keterangan Guru</Link></li>
                                   </ul>
                              )}
                         </li>
                         <li>
                              <button onClick={togglePembayaran} className="w-full text-left py-2 flex justify-between items-center hover:bg-gray-700 rounded"> Pembayaran </button>
                              {pembayaranExpanded && (
                                   <ul className="pl-4 mt-2 space-y-1">
                                        <li><Link to="/pembayaran/spp" className="block py-1 hover:text-gray-300">SPP</Link></li>
                                        <li><Link to="/pembayaran/biaya-pendidikan" className="block py-1 hover:text-gray-300">Biaya Pendidikan</Link></li>
                                        <li><Link to="/pembayaran/wakaf" className="block py-1 hover:text-gray-300">Wakaf</Link></li>
                                   </ul>
                              )}
                         </li>
                    </ul>
               </nav>
          </div>
     )
}

export default SideMenu