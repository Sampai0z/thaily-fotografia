// import { Quote } from "lucide-react";
import c from "../styles/components/Depoimentos.module.css";
import Rating from "@mui/material/Rating";

export default function Depoimentos() {
  const testimonials = [
    {
      src: "depoimento1.jpeg",
      text: "Ficaram lindas! Muito obrigada por essa experiência.",
      author: "Pamella",
      value: 4.5,
    },
    {
      src: "depoimento3.jpg",
      text: "Liiindaaaaas!!! parabens! as fotos estão tão leves e transmitem o mesmo sentimento da cerimonia, você conseguiu captar tudo com muita delicadeza.",
      author: "Vitoria e Lucas",
      value: 5,
    },
    {
      src: "depoimento2.jpg",
      text: "foi o que eu disse, eu achei incrivel, eu gostei muito, muito profissional.",
      author: "Gabriel Morango",
      value: 4,
    },
  ];

  return (
    <section className={c.section}>
      <div className={c.header}>
        <h2 className={c.title}>Fornecemos valor aos nossos clientes</h2>
        <p className={c.subtitle}>
          Capturamos momentos únicos e emocionantes, e nada nos deixa mais
          felizes do que ver a satisfação de nossos clientes. Confira as
          experiências de quem confiou em nosso olhar para eternizar suas
          memórias!
        </p>
      </div>

      <div className={c.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={c.card}>
            <img src={testimonial.src} className={c.icon} />
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
