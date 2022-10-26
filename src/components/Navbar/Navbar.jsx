import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
      <img
        src="http://educainternet.es/documents/2711/download"
        alt="logo"
        className={s.logo}
      />
      <form className={s.form}>
        <input type="text" placeholder="Buscador" />
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
      <div className={s.containerChild}>
        <div className={s.user}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="usuario"
            className={s.userimg}
          />
          <span>Usuario</span>
        </div>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </div>
      </div>
      <div className={s.links}>
        {/* <NavLink>Productos</NavLink> */}
        <NavLink to={''} className={s.child}>Productoos</NavLink>
      </div>
    </nav>
  );
}