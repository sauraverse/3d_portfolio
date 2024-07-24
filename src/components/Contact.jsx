import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { photo } from "../assets";
import ReactConfetti from 'react-confetti';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isExploding, setIsExploding] = useState(false)
  const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

  const detectSize = ()=>{
    setWindowDimension({width: window.innerWidth, height: window.innerHeight})
  }
  useEffect(()=>{
    window.addEventListener('resize', detectSize);
    return()=>{
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimension])
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "saurav",
          from_email: form.email,
          to_email: "saurav0634@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          alert("Thank you. I will get back to you as soon as possible.");
          setIsExploding(true);
          setTimeout(() => setIsExploding(false), 5000);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          
        },
        (error) => {
          setLoading(false);
          setIsExploding(false)
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex justify-center xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-zinc-900 p-8 rounded-2xl '
      >
        <div className="grid grid-cols-1 place-items-center">
        <img src={photo} alt="Profile Photo" className="w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/4 mb-4 border-2 rounded-full border-amber-700 shadow-xl shadow-amber-500/30"/>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="italic text-center">Hey there! Whether you're a Recruiter or a fellow friend, <span className="font-bold text-purple-500">I'd love to hear from you</span>. Leave a message and let me know, you stopped by!! Or, if you prefer to stay mysterious, that's cool too! <span className="not-italic">👻</span></p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name <span className="text-red-600">*</span></span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-black  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email <span className="text-red-600">*</span></span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message <span className="text-red-600">*</span></span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
              required
            />
          </label>
          <button
            type='submit'
            className='bg-black py-3 px-8 rounded-xl outline-none w-fit text-white text-xl font-bold hover:shadow-xl hover:shadow-slate-800 hover:bg-slate-900'
          >
            {loading ? "Sending..." : "Send"}
            {isExploding && <ReactConfetti 
              width={windowDimension.width}
              height={windowDimension.height}
              tweenDuration={5000}/>}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
