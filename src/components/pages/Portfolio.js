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
            project={work[0].project}
            location={work[0].location}
          />
          <PortfolioCard
            name={work[1].name}
            image={work[1].image}
            project={work[1].project}
            location={work[1].location}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={work[2].name}
            image={work[2].image}
            project={work[2].project}
            location={work[2].location}
          />

          <PortfolioCard
            name={work[3].name}
            image={work[3].image}
            project={work[3].project}
            location={work[3].location}
          />
        </div>

        <div className="row">

          <PortfolioCard
            name={work[4].name}
            image={work[4].image}
            project={work[4].project}
            location={work[4].location}
          />

          <PortfolioCard
            name={work[5].name}
            image={work[5].image}
            project={work[5].project}
            location={work[5].location}
          />

        </div>
      </div>



    </div >
  );
}

export default Blog;
