import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-24 sm:py-32 lg:px-8 transition-colors duration-500">
      {/* Background Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Animated Form Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl text-left"
      >
        <div className="max-w-xl justify-center ">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Reach out for collaborations, questions, or custom solutions. We’re here to help you grow.
          </p>
        </div>

        {/* Form */}
        <form className="mt-12 w-full max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Phone number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="+91 9876543210"
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* Consent */}
            <div className="flex items-center gap-x-3 sm:col-span-2">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="agree" className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{' '}
                <a href="#" className="font-semibold text-indigo-600 underline">
                  privacy policy
                </a>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
     <div className="relative w-full hidden lg:flex">
  <div className="hidden dark:flex absolute right-0 -top-135 z-2 flex justify-end items-center">
    <img 
      src="src/images/35725375_MotionElements_cozy-black-cat-standing-in-the-window-side-rain-c-vimage.gif" 
      alt="Animated GIF" 
      className="w-150 h-80 rounded-4xl" 
    />
  </div>
</div>

    </div>
  );
};

export default ContactSection;
