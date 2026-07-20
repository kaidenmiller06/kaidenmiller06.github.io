import './Experience.css';

import emergentImg from '../../assets/images/emergent.jpg';
import banquetImg from '../../assets/images/banquetGroup.jpg';
import ccImg from '../../assets/images/codingChallenge.jpg';
import ncurImg from '../../assets/images/ncurPresentation.jpg';
import nyltImg from '../../assets/images/nyltPresentation.jpg';
import ncurImg2 from '../../assets/images/ncurGroup.jpg';

function Experience() {
  return (
    <section className="experience">
      <div className="experience-inner">
        <div className="experience-images">
          <img src={emergentImg} alt="" />
          <img src={banquetImg} alt="" />
          <img src={ccImg} alt="" />
          <img src={ncurImg} alt="" />
          <img src={nyltImg} alt="" />
          <img src={ncurImg2} alt="" />
        </div>

        <h1 className="experience-heading">
          Real-world <span className="experience-blue">experience</span>
        </h1>
      </div>
    </section>
  );
}

export default Experience;