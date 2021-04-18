import React from "react";
import PortfolioCard from "../PortfolioCard";
import work from "../../assets/work.json";


function Portfolio() {
  return (
    <div>



      <div className="container portfolio-container">
        <h1 className="title">work List</h1>
        <div className="row">
          <PortfolioCard
            name={work[0].name}
            image={work[0].image}
            github={work[0].github}
            deploy={work[0].deploy}
          />
          <PortfolioCard
            name={work[1].name}
            image={work[1].image}
            github={work[1].github}
            deploy={work[1].deploy}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={work[2].name}
            image={work[2].image}
            github={work[2].github}
            deploy={work[2].deploy}
          />

          <PortfolioCard
            name={work[3].name}
            image={work[3].image}
            github={work[3].github}
            deploy={work[3].deploy}
          />
        </div>

        <div className="row">

          <PortfolioCard
            name={work[4].name}
            image={work[4].image}
            github={work[4].github}
            deploy={work[4].deploy}
          />

          <PortfolioCard
            name={work[5].name}
            image={work[5].image}
            github={work[5].github}
            deploy={work[5].deploy}
          />

        </div>
      </div>



    </div >
  );
}

export default Portfolio;
