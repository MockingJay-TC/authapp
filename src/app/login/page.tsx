"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

import styles from "../../styles/Form.module.css";

const LoginPage = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            enim.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign In with Google{" "}
              <Image
                src={"/assets/google.svg"}
                width={20}
                height={20}
                alt="Google"
              />
            </button>
          </div>
          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign In with Github{" "}
              <Image
                src={"/assets/github.svg"}
                width={25}
                height={25}
                alt="Google"
              />
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500">
          Don&apos;t have an account yet?
          <Link href={"/signup"} className="text-blue-700">
            {" "}
            Signup
          </Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
