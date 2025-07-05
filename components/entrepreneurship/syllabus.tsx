import Image from 'next/image'

const Syllabus = () => {
  return <div className='py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col '>

    <h3 className='text-center font-roughScript text-4xl sm:text-7xl font-bold text-green-800 mb-[-2%]'>Syllabus</h3>
    <Image src={"/claylab assets/general/brushGraphics1.png"} height={8} width={180} className="max-w-xs sm:max-w-3xl mx-auto" alt={"underline"} />

    <Image src={"/claylab assets/entrepreneurshipProgram/syllabus.png"} height={180} width={52200} className="mx-auto my-4 sm:my-8 max-w-full sm:max-w-6xl" alt={"syllabus-bg"} />
  </div>
}

export default Syllabus