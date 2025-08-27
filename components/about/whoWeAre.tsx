const WhoWeAre = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 ">
      <div className="mx-auto">
        
        {/* Main Heading with Underline */}
        <div className="mb-12">
          <h2 className="underline text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-2">
            Who We Are & Our Culture
          </h2>
          
        </div>


        {/* Content */}
        <div className="space-y-8">
          
          {/* Opening Statement */}
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-800 leading-relaxed font-light">
            At Claylab, we are not just teachers or facilitators — we are co-travellers with our students.
          </p>

          {/* ECO Section */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl md:text-2xl text-gray-800 leading-relaxed">
              We believe in <strong className="font-bold">ECO</strong>
            </p>

            {/* ECO Points */}
            <div className="space-y-4 ml-4 sm:ml-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  <strong className="font-semibold">Empathy with Rigor:</strong> Caring deeply for our students while holding high expectations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  <strong className="font-semibold">Collaboration & Trust:</strong> Working as a team that learns from each other, just as our students do.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                  <strong className="font-semibold">Ownership & Reflection:</strong> Modeling the same responsibility and self-learning we want our students to develop.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-xl sm:text-2xl md:text-2xl text-gray-800 leading-relaxed font-light">
            We see ourselves as sparks — igniting curiosity, agency, and ambition in every teenager we meet.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;