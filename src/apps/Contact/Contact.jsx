import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const isValid = await trigger();
    if (isValid) {
      emailjs
        .send("service_o4lq5yw", "template_fouztqj", data, "OkdwlobVAHffe1xmz")
        .then((response) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="container md:h-auto grid items-center mb-4">
      <section id="contact" className="pt-24 md:pb-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="mb-20">
            <p className="text-4xl font-semibold text-center">
              <span className="dark:text-yellow">Contact Me</span>
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="mx-auto w-2/4 max-w-[180px] md:max-w-[200px]" />
            </div>
          </div>
        </motion.div>
        {/* Form & Img */}
        <div className="md:flex md:items-center md:justify-between gap-16 mt-5">
          <motion.div
            className="basis-1/2 flex "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="./image/contact.jpg"
              alt="contact"
              className="rounded-md h-full"
            />
          </motion.div>

          <motion.div
            className="basis-1/2 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="max-w-[700px] mx-auto space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-1">
                <label>Name</label>
                <input
                  type="text"
                  className="rounded-md w-full text-slate-800 bg-slate-100 dark:text-slate-200 dark:bg-indigo-500/10 font-semibold placeholder-opaque-black dark:placeholder-gray-500/80 p-3"
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && (
                  <p className="text-red mt-1">
                    {errors.name.type === "required" &&
                      "This field is required"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters"}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label>Email</label>
                <input
                  type="text"
                  className="rounded-md w-full text-slate-800 bg-slate-100 dark:text-slate-200 dark:bg-indigo-500/10 font-semibold placeholder-opaque-black dark:placeholder-gray-500/80 p-3"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red mt-1">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label>Message</label>
                <textarea
                  className="rounded-md w-full text-slate-800 bg-slate-100 dark:text-slate-200 dark:bg-indigo-500/10 font-semibold placeholder-opaque-black dark:placeholder-gray-500/80 p-3"
                  name="message"
                  placeholder="MESSAGE"
                  rows="4"
                  cols="50"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>
              <button
                disabled={loading || isSubmitSuccessful}
                className={`w-full  p-5 ${
                  !loading && isSubmitSuccessful
                    ? "bg-green-500 text-white hover:bg-green-500/80"
                    : "bg-blue  text-deep-blue hover:bg-blue/80"
                } disabled:cursor-not-allowed mt-5 font-medium capitalize  transition duration-500 rounded-md`}
                type="submit"
              >
                {loading ? (
                  <svg
                    className="animate-spin inline-block h-5 w-5 mr-3 fill-yellow"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
                {!loading && isSubmitSuccessful
                  ? "Message Successfully Sent"
                  : "Send me a message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
