import React, {memo, useMemo} from 'react';
import styles from "../National/National.module.css";
import clsx from "clsx";
import {SubmitHandler, useForm} from "react-hook-form";
import img1 from "../../images/national/Vector2.svg";
import img2 from "../../images/national/Vector3.svg";
import img3 from "../../images/national/Layer 1.svg";
import img4 from "../../images/national/Vector5.svg";

interface IFormInput {
  name: string;
  lastName: string;
  answer: string;
}

const National = () => {
  const {register, handleSubmit, formState} = useForm<IFormInput>();

  const errors = useMemo(
      () => formState.errors,
      [formState]
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
      <div className={styles.body}>
        <section className={styles.header}>
          <div className={styles.main_container}>
            <h2 className={styles.names}>Арсен и Айна</h2>
            <div className={styles.flex_container}>
              <p>суббота</p>
              <h5>23</h5>
              <p>cентября</p>
            </div>
            <hr/>
            <p className={styles.year}>2022</p>
          </div>
        </section>
        <section className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>Дорогие друзья и родные! Приглашаем вас на нашу свадьбу!</h1>
          <p>Начало в 17:00</p>
          <img src={img1} alt="img1"/>
          <div className={styles.tillStart}>
            <p className={styles.tillStart_text}>До свадьбы:</p>
            <div className={styles.tillStart_box}>
              <div>
                <h4>12</h4>
                <p>дней</p>
              </div>
              <div>
                <h4>21</h4>
                <p>часов</p>
              </div>
              <div>
                <h4>19</h4>
                <p>минут</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.plan}>
          <h1>План мероприятия:</h1>
          <div className={styles.plan_flex}>
            <div>
              <p>17:00</p>
              <h6>сбор гостей</h6>
              <img src={img2} alt="img2"/>
            </div>
            <div>
              <p>18:00</p>
              <h6>вывод гостей</h6>
              <img src={img2} alt="img2"/>
            </div>
            <div>
              <p>19:00</p>
              <h6>показ жениха</h6>
              <img src={img2} alt="img2"/>
            </div>
            <div>
              <p>20:00</p>

              <h6>дискотека</h6>
            </div>
          </div>
        </section>
        <section className={styles.place}>
          <h1>Место проведения:</h1>
          <img src={img3} alt="place"/>
          <p>Банкетный зал Ридада (старая) ул. 2-й Таманской Дивизии, 7, курортный посёлок Вольный Аул</p>
          <button>Построить маршрут</button>
        </section>
        <section className={styles.confirm}>
          <h1>Подтвердите, пожалуйста, ваше присутсвие</h1>
          <form onSubmit={handleSubmit(onSubmit)}
                className={styles.gold_form}>
            <input
                {...register("name", {required: true, minLength: 10})}
                className={clsx(errors.name)}
                type="text"
                placeholder="Имя"
            />
            <input
                {...register("lastName", {required: true, minLength: 2})}
                className={clsx(errors.lastName)}
                type="text"
                placeholder="Фамилия"
            />
            <select {...register("answer")}>
              <option value="Обязательно буду">Обязательно буду</option>
              <option value="Возможно">Возможно</option>
              <option value="Не приду">Не приду</option>
            </select>
            <input
                {...register("name", {required: true, minLength: 2})}
                className={clsx(errors.name)}
                type="text"
                placeholder="С кем вы придете?"
            />
            <input
                {...register("name", {required: true, minLength: 2})}
                className={clsx(errors.name)}
                type="text"
                placeholder="Будут ли с вами дети?"
            />
            <img src={img4} alt="submit_img"/>
            <button type="submit">
              Отправить
            </button>
          </form>
        </section>
      </div>
  );
};

export default memo(National);