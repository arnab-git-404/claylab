// // "use client"

// // import Link from "next/link"
// // import Image from "next/image"
// // import { Button } from "@/components/ui/button"
// // import { Menu, X } from "lucide-react"
// // import { useState } from "react"

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   // const [hasMounted, setHasMounted] = useState(false)
// //   // const pathName = usePathname()
// //   // const segments = pathName.split("/")
// //   // const lastSegment = segments[segments.length - 1]

// //   // useEffect(() => {
// //   //   setHasMounted(true)
// //   // }, [])

// //   // const textColor = hasMounted && lastSegment === "support" ? "text-black" : "text-white"

// //   return (
// //     <header className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent ${isOpen ? "bg-black/95" : ""}`}>
// //       {/* // <header className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent`}> */}

// //       <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
// //         <Image
// //           src={"/claylab assets/general/claylab-logo.png"}
// //           height={32}
// //           width={120}
// //           alt="claylab-logo"
// //           className="w-auto h-8 md:h-10"
// //         />
// //       </div>

// //       {/* Desktop Nav */}
// //       <nav className={`hidden md:flex items-center space-x-6 md:space-x-8 `}>
// //         <Link className="hover:underline cursor-pointer" href="/">Home</Link>
// //         <Link className="hover:underline cursor-pointer" href="/about">About Us</Link>
// //         <Link className="hover:underline cursor-pointer" href="/mentorship">Mentorship</Link>
// //         <Link className="hover:underline cursor-pointer" href="/entrepreneurship">Entrepreneurship</Link>
// //         <Link className="hover:underline cursor-pointer" href="/support">
// //         <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4">
// //           Support Us
// //         </Button>
// //         </Link>
// //       </nav>

// //       {/* Mobile Hamburger Icon */}
// //       <button
// //         className="md:hidden text-black ml-2 p-2 rounded focus:outline-none focus:ring-2 "
// //         onClick={() => setIsOpen(!isOpen)}
// //         aria-label="Toggle Menu"
// //       >
// //         {isOpen ? <X size={28} /> : <Menu size={28} />}
// //       </button>

// //       {isOpen && (
// //         // <div className="fixed inset-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">
// //           <div className="fixed inset-0 w-full h-full bg-transparent text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">

// //           <Link className="hover:underline cursor-pointer text-2xl" href="/" onClick={() => setIsOpen(false)}>Home</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/mentorship" onClick={() => setIsOpen(false)}>Mentorship Program</Link>
// //           <Link className="hover:underline cursor-pointer text-2xl" href="/entrepreneurship" onClick={() => setIsOpen(false)}>Entrepreneurship Program</Link>
// //           <Button
// //             className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg"
// //             onClick={() => setIsOpen(false)}
// //           >
// //             Support Us
// //           </Button>
// //         </div>
// //       )}
// //     </header>
// //   )
// // }



// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 bg-transparent fixed top-0 left-0 right-0">
      
//       <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
//         <Image
//           src={"/claylab assets/general/claylab-logo.png"}
//           height={32}
//           width={120}
//           alt="claylab-logo"
//           className="w-auto h-8 md:h-10"
//         />
//       </div>

//       {/* Desktop Nav */}
//       <nav className={`hidden md:flex items-center space-x-6 md:space-x-8 text-white`}>
//         <Link className="hover:underline cursor-pointer" href="/">Home</Link>
//         <Link className="hover:underline cursor-pointer" href="/about">About Us</Link>
//         <Link className="hover:underline cursor-pointer" href="/mentorship">Mentorship</Link>
//         <Link className="hover:underline cursor-pointer" href="/entrepreneurship">Entrepreneurship</Link>
//         <Link className="hover:underline cursor-pointer" href="/support">
//         <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4">
//           Support Us
//         </Button>
//         </Link>
//       </nav>

//       {/* Mobile Hamburger Icon */}
//       <button
//         className="md:hidden text-white ml-2 p-2 rounded focus:outline-none focus:ring-2"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle Menu"
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">
//           <Link className="hover:underline cursor-pointer text-2xl" href="/" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/mentorship" onClick={() => setIsOpen(false)}>Mentorship Program</Link>
//           <Link className="hover:underline cursor-pointer text-2xl" href="/entrepreneurship" onClick={() => setIsOpen(false)}>Entrepreneurship Program</Link>
//           <Button
//             className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg"
//             onClick={() => setIsOpen(false)}
//           >
//             Support Us
//           </Button>
//         </div>
//       )}
//     </header>
//   )
// }




"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-14 py-4 md:py-6 z-30 fixed top-0 left-0 right-0 transition-all duration-300 ${
       
       
         'bg-transparent'
    }`}>
      
      <div className="text-2xl md:text-3xl font-bold flex-shrink-0">
        <Image
          src={"/claylab assets/general/claylab-logo.png"}
          height={32}
          width={120}
          alt="claylab-logo"
          className="w-auto h-8 md:h-10"
        />
      </div>

      {/* Desktop Nav */}
      <nav className={`hidden md:flex items-center space-x-6 md:space-x-8 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <Link className="hover:underline cursor-pointer transition-colors duration-200 " href="/">Home</Link>
        <Link className="hover:underline cursor-pointer transition-colors duration-200 " href="/about">About Us</Link>
        <Link className="hover:underline cursor-pointer transition-colors duration-200 " href="/mentorship">Mentorship</Link>
        <Link className="hover:underline cursor-pointer transition-colors duration-200 " href="/entrepreneurship">Entrepreneurship</Link>
        <Link className="hover:underline cursor-pointer" href="/support">
        <Button className="bg-clay-normal hover:bg-green-600 rounded-full px-4 transition-all duration-200 hover:scale-105">
          Donate Us
        </Button>
        </Link>
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-white ml-2 p-2 rounded focus:outline-none focus:ring-2 transition-colors duration-200 hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-black/95 text-white flex flex-col items-center justify-center space-y-8 py-10 px-6 md:hidden z-40 overflow-y-auto">
          <Link className="hover:underline cursor-pointer text-2xl transition-colors duration-200 hover:text-green-200" href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:underline cursor-pointer text-2xl transition-colors duration-200 hover:text-green-200" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link className="hover:underline cursor-pointer text-2xl transition-colors duration-200 hover:text-green-200" href="/mentorship" onClick={() => setIsOpen(false)}>Mentorship Program</Link>
          <Link className="hover:underline cursor-pointer text-2xl transition-colors duration-200 hover:text-green-200" href="/entrepreneurship" onClick={() => setIsOpen(false)}>Entrepreneurship Program</Link>
          <Link href="/support" onClick={() => setIsOpen(false)}>
            <Button className="bg-clay-normal hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg transition-all duration-200 hover:scale-105">
              Donate Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}