import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motions";
import Swal from 'sweetalert2';




//template id template_xgjq2tj
//service_rdcwj0a
//user_KqXinkkQ79mUegkWWQCdH

const Contact = () => {
  const Swal = require('sweetalert2')
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_1fcze4v', 'template_z0n1svx',
      {
        from_name: form.name,
        to_name: 'Pamino.js',
        from_email: form.email,
        to_email: 'josephlagbalu@gmail.com',
        message: form.message,
      }, 'T_n4Xk159ZUu1YKU2').then(() => {
        setLoading(false);
        Swal.fire(
          'Thank You!',
          'I will get back to you soon!',
          'success'
        )
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        Swal.fire(
          'Error!',
          'something went wrong.',
          'error'
        )
      })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl" >
        <p className={styles.sectionSubText}>Get in touch </p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          {/* name input section */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Please enter your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />



          {/* email input section */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Please enter your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />



          {/* message input section */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
          </label>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Please enter your message?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />

          {/* button section */}
          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");