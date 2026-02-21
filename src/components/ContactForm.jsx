import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

/* ===============================
   VALIDATION SCHEMA
================================ */
const contactFormSchema = Z.object({
  name: Z.string().min(1, "Name is required"),
  email: Z.string().email("Please enter a valid email"),
  subject: Z.string().min(1, "Subject is required"),
  message: Z.string().min(1, "Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/* ===============================
   COMPONENT
================================ */
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  /* ===============================
     SUBMIT HANDLER
  =================================*/
  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);

    try {
      const payload = {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Sarath Chandra",
      };

      /* ENV VARIABLES */
      const serviceID =
        import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID =
        import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey =
        import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      console.log("EmailJS Config:", {
        serviceID,
        templateID,
        publicKey,
      });

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS ENV not configured");
      }

      /* ✅ CORRECT EMAILJS CALL */
      await emailjs.send(
        serviceID,
        templateID,
        payload,
        publicKey
      );

      setStatus("success");
      reset(initialValues);
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     UI
  =================================*/
  return (
    <div className="flex-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl text-[#a7a7a7] flex flex-col gap-6"
      >
        {/* NAME */}
        <div>
          <label className="block text-white text-lg mb-2">
            Your Name
          </label>
          <input
            {...register("name")}
            placeholder="Sarath Chandra"
            className="w-full px-5 py-4 bg-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-50"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-white text-lg mb-2">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full px-5 py-4 bg-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <label className="block text-white text-lg mb-2">
            Subject
          </label>
          <input
            {...register("subject")}
            placeholder="Let’s work together"
            className="w-full px-5 py-4 bg-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-50"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-white text-lg mb-2">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-5 py-4 bg-black-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-50"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* STATUS */}
        {status === "success" && (
          <div className="text-green-400 bg-green-900/20 p-4 rounded-lg">
            ✅ Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">
            ❌ Failed to send message.
          </div>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-600"
              : "bg-blue-50 hover:bg-blue-600"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;