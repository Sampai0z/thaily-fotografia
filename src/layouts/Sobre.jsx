import c from "../styles/layouts/Sobre.module.css";
import Thaily from "/Thaily.jpg";
import detail1 from "/detalheSobre.png";

export default function Sobre() {
  return (
    <>
      <div></div>
      <main className={c.Container}>
        <div className={c.foto}>
          <img src={Thaily} alt="" />
        </div>
        <div className={c.caixaTexto}>
          <img className={c.detalhe} src={detail1} alt="" />
          <img className={c.detalhe2} src={detail1} alt="" />
          <p>
            Me chamo Thaily, trabalho com a fotografia há 5 anos. Sou formada em
            Técnico em Processos Fotográficos no Senac. Estou sempre buscando
            conhecimento e aprimorando o que já aprendi na fotografia.Apaixonada
            pela arte de registrar histórias, contadas por imagens que compõem a
            si mesmo. Sempre me esforcei muito para chegar até onde estou hoje.
            Comprei meu primeiro equipamento fotográfico vendendo trufas na rua,
            para conseguir realizar esse sonho de se tornar uma Fotografa
            Profissional.
          </p>
        </div>
      </main>
    </>
  );
}
