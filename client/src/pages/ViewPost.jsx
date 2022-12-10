import React from "react";
import { Link } from "react-router-dom";
import post from "../images/post1.png";
import user from "../images/user.png";
import edit from "../images/edit.png";
import _delete from "../images/delete.png";
import Menu from "../components/Menu";

const ViewPost = () => {
  return (
    <div className="view_post">
      <div className="content">
        <img src={post} alt="" />
        <div className="user">
          <img src={user} alt="" />

          <div className="info">
            <span>user Name</span>
            <p>posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/compose?edit=2`}>
              <img src={edit} alt="" />
            </Link>
            <img src={_delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          voluptate, obcaecati quod nesciunt dolorum tempora nisi officiis quia
          illo aperiam quam, impedit suscipit tempore cumque eius inventore!
          Voluptates, quis ipsa.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          sapiente quod, aliquid dolor perspiciatis ex animi officia, maxime
          saepe eligendi et, rem placeat libero modi soluta? Eos minima rem
          optio! Magni ducimus sint hic, nesciunt dolore laudantium fuga minima,
          provident officia cupiditate culpa quaerat odit natus, consectetur
          dolor id nemo alias. Et nobis distinctio placeat eos, aut nisi
          praesentium explicabo. Quasi illum voluptate nisi repudiandae adipisci
          iusto voluptates consectetur necessitatibus est accusantium rerum,
          quae autem nobis earum ea, vero quas consequatur blanditiis
          exercitationem officiis deserunt illo dolorem minima. Fugiat, quasi.
          Voluptatum error maiores obcaecati nesciunt nobis quisquam id earum
          autem perspiciatis rerum nihil repudiandae tenetur saepe repellendus
          facilis blanditiis, debitis dolorum aliquid assumenda culpa cumque
          quidem adipisci voluptate! Optio, harum. In corporis neque, cum at
          veritatis omnis eligendi, dicta minima libero laboriosam delectus
          blanditiis exercitationem inventore quisquam voluptas et minus. Eaque
          voluptate dicta distinctio vitae beatae modi, expedita non corrupti.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          sapiente quod, aliquid dolor perspiciatis ex animi officia, maxime
          saepe eligendi et, rem placeat libero modi soluta? Eos minima rem
          optio! Magni ducimus sint hic, nesciunt dolore laudantium fuga minima,
          provident officia cupiditate culpa quaerat odit natus, consectetur
          <br />
          <br />
          dolor id nemo alias. Et nobis distinctio placeat eos, aut nisi
          praesentium explicabo. Quasi illum voluptate nisi repudiandae adipisci
          iusto voluptates consectetur necessitatibus est accusantium rerum,
          quae autem nobis earum ea, vero quas consequatur blanditiis
          exercitationem officiis deserunt illo dolorem minima. Fugiat, quasi.
          Voluptatum error maiores obcaecati nesciunt nobis quisquam id earum
          autem perspiciatis rerum nihil repudiandae tenetur saepe repellendus
          facilis blanditiis, debitis dolorum aliquid assumenda culpa cumque
          quidem adipisci voluptate! Optio, harum. In corporis neque, cum at
          veritatis omnis eligendi, dicta minima libero laboriosam delectus
          blanditiis exercitationem inventore quisquam voluptas et minus. Eaque
          <br />
          <br />
          voluptate dicta distinctio vitae beatae modi, expedita non corrupti.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          sapiente quod, aliquid dolor perspiciatis ex animi officia, maxime
          saepe eligendi et, rem placeat libero modi soluta? Eos minima rem
          optio! Magni ducimus sint hic, nesciunt dolore laudantium fuga minima,
          provident officia cupiditate culpa quaerat odit natus, consectetur
          dolor id nemo alias. Et nobis distinctio placeat eos, aut nisi
          praesentium explicabo. Quasi illum voluptate nisi repudiandae adipisci
          iusto voluptates consectetur necessitatibus est accusantium rerum,
          quae autem nobis earum ea, vero quas consequatur blanditiis
          exercitationem officiis deserunt illo dolorem minima. Fugiat, quasi.
          Voluptatum error maiores obcaecati nesciunt nobis quisquam id earum
          autem perspiciatis rerum nihil repudiandae tenetur saepe repellendus
          facilis blanditiis, debitis dolorum aliquid assumenda culpa cumque
          quidem adipisci voluptate! Optio, harum. In corporis neque, cum at
          veritatis omnis eligendi, dicta minima libero laboriosam delectus
          blanditiis exercitationem inventore quisquam voluptas et minus. Eaque
          voluptate dicta distinctio vitae beatae modi, expedita non corrupti.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default ViewPost;
