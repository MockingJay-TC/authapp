"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

import styles from "../../styles/Form.module.css";

const SignupPage = () => {
  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });
  return (
    <div>
      <Head>
        <title>Signup</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Sign Up</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            enim.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="text"
              name="username"
              placeholder="Username"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show.password ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show.cpassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500">
          Have have an account?
          <Link href={"/login"} className="text-blue-700">
            {" "}
            Log In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignupPage;
