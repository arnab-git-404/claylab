import { Mail } from "lucide-react";

const JoinMovement = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
      <div className="bg-gradient-to-r from-clay-light to-clay-light-active rounded-2xl p-4 sm:p-8 text-center">
        <div className="flex justify-center">
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-800" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2 sm:mt-4">Join the Movement</h2>
        <form className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="rounded-full px-4 py-2 w-full sm:w-72 text-sm border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-full text-sm hover:bg-green-700 transition w-full sm:w-auto"
          >
            Subscribe →
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-2 sm:mt-4">
          We respect your inbox - unsubscribe anytime. Join 1200+ supporters.  
          <br />
          Make an impact from your inbox.
        </p>
      </div>
    </section>
  );
};

export default JoinMovement;
