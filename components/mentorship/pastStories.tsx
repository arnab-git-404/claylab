import Image from 'next/image'

const ImageData = [
  {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg1.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp1.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg2.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp2.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg3.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp3.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/pastStories/bg4.png",
    pfpUrl: "/claylab assets/mentorshipProgram/pastStories/pfp4.png"
  }
]

const PastStories = () => {
  return <div className='py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col '>

    <h3 className='text-center font-roughScript text-3xl sm:text-6xl font-bold text-green-800 mb-[-2%]'>Past Stories</h3>
    <Image src={"/claylab assets/general/brushGraphics2.png"} height={8} width={200} className="max-w-xs sm:max-w-3xl mx-auto" alt={"underline"} />
    <div className="flex flex-wrap justify-center gap-4 mx-auto w-full">
      {ImageData.map((imageCard) => {
        return <div key={imageCard.ImageUrl} className='relative flex w-fit'>
          <Image className='rounded-xl w-32 sm:w-60 h-auto' src={imageCard.ImageUrl} height={200} width={120} alt={"Image-bg"} />
          <Image className="rounded-full absolute bottom-[-5%] left-[37%]" src={imageCard.pfpUrl} height={75} width={75} alt={"Image-pfp"} />
        </div>
      })}
    </div>
  </div>
}

export default PastStories