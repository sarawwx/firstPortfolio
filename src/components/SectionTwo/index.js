import "./style.scss";
import Card from "../Card";

const SectionTwo = ({ arrayPro }) => {
  return (
    <section class="py-5 fundo-black" id="ref-2">
      <div class="container">
        <div class="container-fluid d-flex flex-column section-projects">
          <h2>my projects</h2>
          <div class="row py-4 pro-row">
            {arrayPro.map((el, index) => {
              return (
                <Card
                  key={index}
                  img={el.img}
                  title={el.title}
                  desc={el.desc}
                  ref1={el.ref1}
                  ref2={el.ref2}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;