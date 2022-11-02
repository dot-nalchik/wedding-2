import * as React from "react";
import {memo, useMemo} from "react";
import styles from "./ModernPage.module.css";
import clsx from "clsx";
import {SubmitHandler, useForm} from "react-hook-form";
import modern1 from "../../images/modern/modern1.png";

interface IFormInput {
  name: string;
  lastName: string;
  answer: string;
}

const ClassicPage = () => {
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
          <div className={styles.header_image}>
            <img src={modern1} alt="img"/>
          </div>
          <h1 className={styles.abbreviation}>A&A</h1>
          <div className={styles.main_container}>
            <h2 className={styles.names}>Арсен и Айна</h2>
            <div className={styles.flex_container}>
              <p>суббота</p>
              <h5>23</h5>
              <p>cентября</p>
            </div>
          </div>
          <p className={styles.restTitle}>до свадьбы:</p>
          <div className={styles.restTime}>
            <div>
              <p className={styles.days}>12</p>
              <p className={styles.time}>дней</p>
            </div>
            <div>
              <p className={styles.days}>21</p>
              <p className={styles.time}>часов</p>
            </div>
            <div>
              <p className={styles.days}>19</p>
              <p className={styles.time}>минут</p>
            </div>
          </div>
        </section>
        <section className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>Дорогие друзья и родный!</h1>
          <p className={styles.news}>Вы оказались здесь, а значит мы спешим сообщить вам важную новость!</p>
          <h2>Мы женимся!</h2>
          <h4>Мы очень хотим разделить с вами этот счастливый праздник.</h4>
          <h5>Ждём вас на нашей свадьбе! Начало в 17:00</h5>
        </section>
        <section className={styles.plan}>
          <div className={styles.plan_box}>
            <h1>План мероприятия:</h1>
            <div className={styles.plan_flex}>
              <div>
                <p>17:00</p>
                <h6>сбор гостей</h6>
              </div>
              <div>
                <p>18:00</p>
                <h6>вывод гостей</h6>
              </div>
              <div>
                <p>19:00</p>
                <h6>показ жениха</h6>
              </div>
              <div>
                <p>20:00</p>
                <h6>дискотека</h6>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.place}>
          <div className={styles.place_box}>
            <h1>Место проведения:</h1>
            <p>Банкетный зал Ридада (старая)</p>
            <p>ул. 2-й Таманской Дивизии, 7, курортный посёлок Вольный Аул</p>
          </div>
          <button>Построить маршрут</button>
          <hr/>
        </section>
        <section className={styles.confirm}>
          <h1 className={styles.abbreviation}>A&A</h1>
          <h1>Подтвердите, пожалуйста, ваше присутсвие</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit">
              ОТПРАВИТЬ
            </button>
          </form>
        </section>
      </div>
  );
}

export default memo(ClassicPage);