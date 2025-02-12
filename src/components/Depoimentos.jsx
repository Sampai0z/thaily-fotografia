// import { Quote } from "lucide-react";
import c from "../styles/components/Depoimentos.module.css";
import Rating from "@mui/material/Rating";

export default function Depoimentos() {
  const testimonials = [
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "CÉLIA ALMEIDA",
      value: 4.5,
    },
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "FRANK KINNEY",
      value: 4,
    },
    {
      text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      author: "CASAR COM LARSON",
      value: 5,
    },
  ];

  return (
    <section className={c.section}>
      <div className={c.header}>
        <h2 className={c.title}>Fornecemos valor aos nossos clientes</h2>
        <p className={c.subtitle}>
          Sample text. Click to Egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate. Pharetra magna ac
          placerat vestibulum. Quam lacus suspendisse faucibus interdum posuere
          lorem.
        </p>
      </div>

      <div className={c.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={c.card}>
            {/* <Quote className={c.icon} /> */}
            <p className={c.testimonialText}>{testimonial.text}</p>
            <p className={c.author}>{testimonial.author}</p>
            <Rating
              name="read-only"
              value={testimonial.value}
              precision={0.5}
              readOnly
            />
          </div>
        ))}
      </div>
    </section>
  );
}
