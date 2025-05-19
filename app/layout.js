// import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to my Portfolio, This is V Bhaswanth - Web developer",
  description:
    "I am a Full Stack Developer, I am fascinated about new technologies and very curious and interested to learn and explre and get skilled. And I am a quick learner always looking for new challenges.",
  icons: {
          icon: '/favicon.ico',
        }
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
