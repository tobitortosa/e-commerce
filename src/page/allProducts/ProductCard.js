import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./ProductCard.module.css";

import { useModal } from "../../components/Modals/useModal";
import Modal from "../../components/Modals/Modal";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { addFavoritoProduct } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard(props) {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const dis = props.discount;
  const userFound = useSelector((state) => state.userFound);
  const discountCost = (dis * props.cost) / 100;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const dispatch = useDispatch();

  const handleFavorito = (productId) => {
    if (user.logged) {
      const exist = props.favs.filter((p) => p.id === productId);
      if (!exist.length) {
        dispatch(addFavoritoProduct(productId, userFound.id));
      }
    }
  };

  return (
    <div className={s.container}>
      {user.logged && (
        <button
          className={s.favBtn}
          onClick={() => handleFavorito(props.id, userFound.id)}
        >
          ❤
        </button>
      )}

      {dis > 0 ? (
        <span className={s.discount}>
          <div className={s.disNum}>{`${dis}% OFF!`}</div>
        </span>
      ) : null}
      <div className={s.imgContainer}>
        <img src={props.img} alt={props.name} />
      </div>
      <p id={s.nombre}>{props.name}</p>
      <p id={dis > 0 ? s.disPrice : s.precio}>{`$${props.cost}`}</p>
      {dis > 0 ? <p id={s.disCost}>{`$${props.cost - discountCost}`}</p> : null}
      <NavLink to={"/detail/" + props.id} className={s.button}>
        Ver más
      </NavLink>
      <div className={s.cart2} onClick={() => props.cart(props)}>
        <span className={s.add}>Add to cart</span>
        <i className="uil uil-shopping-cart"></i>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h1 className={s.modalTitle}>
            Producto agregado a tu carrito <ThumbUpAltRoundedIcon />
          </h1>
          <p className={s.modalSubtitle}>
            Agregaste el producto a tu carrito exitosamente!
          </p>
        </Modal>
      </div>
    </div>
  );
}
