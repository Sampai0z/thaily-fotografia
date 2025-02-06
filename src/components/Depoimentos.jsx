// import { Quote } from "lucide-react";
import styles from "../styles/components/Depoimentos.module.css";

export default function Depoimentos() {
  const testimonials = [
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "CÉLIA ALMEIDA",
    },
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "FRANK KINNEY",
    },
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "CASAR COM LARSON",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Fornecemos valor aos nossos clientes</h2>
        <p className={styles.subtitle}>
          Sample text. Click to Egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate. Pharetra magna ac
          placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere
          lorem.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            {/* <Quote className={styles.icon} /> */}
            <p className={styles.testimonialText}>{testimonial.text}</p>
            <p className={styles.author}>{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
