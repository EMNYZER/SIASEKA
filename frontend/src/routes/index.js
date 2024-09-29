import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Surat from "../pages/Surat";
import SuratMasuk from "../pages/SuratMasuk";
import SuratKeluar from "../pages/SuratKeluar";
import SuratUmum from "../pages/SuratUmum";
import SuratKeputusan from "../pages/SuratKeputusan";
import SuratKeteranganSiswa from "../pages/SuratKeteranganSiswa";
import SuratKeteranganGuru from "../pages/SuratKeteranganGuru";
import Pembayaran from "../pages/Pembayaran";
import SPP from "../pages/SPP";
import BiayaPendidikan from "../pages/BiayaPendidikan";
import Wakaf from "../pages/Wakaf";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
          {
               path: "",
               element: <Home/>,
          },
          {
               path: "profile",
               element: <Profile/>,
          },
          {
               path: "login",
               element: <Login/>,
          },
          {
               path: "surat",
               element: <Surat/>,
               children:[
                    {
                         path: "surat-masuk",
                         element: <SuratMasuk/>,
                    },
                    {
                         path: "surat-keluar",
                         element: <SuratKeluar/>,
                    },
                    {
                         path: "surat-umum",
                         element: <SuratUmum/>,
                    },
                    {
                         path: "surat-keputusan",
                         element: <SuratKeputusan/>,
                    },
                    {
                         path: "surat-keterangan-siswa",
                         element: <SuratKeteranganSiswa/>,
                    },
                    {
                         path: "surat-keterangan-guru",
                         element: <SuratKeteranganGuru/>,
                    },
               ]
          },
          {
               path: "pembayaran",
               element: <Pembayaran/>,
               children:[
                    {
                         path: "spp",
                         element: <SPP/>,
                    },
                    {
                         path: "biaya-pendidikan",
                         element: <BiayaPendidikan/>,
                    },
                    {
                         path: "wakaf",
                         element: <Wakaf/>,
                    },
               ]
          },

        ]
    },
]);

export default router;
