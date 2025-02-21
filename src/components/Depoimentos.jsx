// import { Quote } from "lucide-react";
import Thaily from "/contato.jpg";
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
          Instantes de uma vida. A fotografia que te faz sentir, lembrar e amar.
          Que te faz recordar para sempre de um momento ou fase de sua vida. Que
          te traz a experiência de auto conhecimento, se amando mais e se vendo
          pelo olhar de uma outra pessoa. Notando em si detalhes que talvez
          nunca tenha percebido serem tão lindos. A fotografia, a arte do
          registro sagrado, trazendo a nostalgia de coisas que fazem parte da
          sua história e de quem você é
        </p>
      </div>

      <div className={c.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={c.card}>
            <img src={Thaily} className={c.icon} />
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
