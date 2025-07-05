'use client';


export const testimonials = [
  {
    quote: `"I didn't even know what a pitch was. Now I can explain my idea in 30 seconds!"`,
    name: 'Anaya H., Ahmedabad',
    bgColor: 'bg-[#fbc7c7]', // soft red-pink
  },
  {
    quote: `"This was the first time I felt like a real founder. My mentor believed in me before I did."`,
    name: 'Vihaan K., Jaipur',
    bgColor: 'bg-[#78cdf6]', // light blue
  },
  {
    quote: `"Our project was messy and hard — but we never gave up. That's when I knew I was an entrepreneur."`,
    name: 'Div. P., Ranchi',
    bgColor: 'bg-[#c3e6c2]', // mint green
  },
  {
    quote: `"I always thought business was boring. Turns out it's just solving problems with passion."`,
    name: 'Iqra. M., Hyderabad',
    bgColor: 'bg-[#ffe07d]', // yellow
  },
  {
    quote: `"My favorite part? Demo Day. I was nervous, but then I saw everyone clapping for our idea."`,
    name: 'Aarav S., Mumbai',
    bgColor: 'bg-[#dcc4f3]', // light violet
  },
  {
    quote: `"They didn't just teach us — they listened. I felt seen."`,
    name: 'Nikhil L., Bengaluru',
    bgColor: 'bg-[#fbc2e2]', // pink
  },
];


export default function TestimonialsGrid() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4">
      <div className="max-w-full sm:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`${t.bgColor} rounded-md shadow-[10px_10px_20px_rgba(0,0,0,0.3)] p-6 sm:p-8 min-h-[180px] sm:min-h-[300px] flex flex-col justify-between transition-transform duration-300 cursor-pointer`}
          >
            <p className="text-base sm:text-xl font-medium text-right leading-snug font-roughScript">{t.name}</p>
            <p className="text-lg sm:text-3xl md:text-4xl text-center font-medium mt-2 sm:mt-4 font-roughScript">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}