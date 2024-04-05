import styles from "./landing.module.css";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  ` 
                  أهلا بكم في 
                  <span style="color: #87CEEB;">متجرنا الالكتروني</span>`
                )
             
                .deleteAll()
                .start();
            }}
          />
        </h1>
        <p className={styles.desc}>
          يمكنكم تسوق الاجهزة التعليمية الأن بكل بساطة عن طريق موقعنا{" "}
        </p>
      </div>
    </section>
  );
}

export default Landing;
