import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../styles/Listgroup.css";
function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab
        eventKey="Best Interest rates on the Market"
        title="Best Interest rates on the Market"
        className="eacttabs"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quasi
          obcaecati facilis. Sequi minus perspiciatis cupiditate autem amet
          deserunt aspernatur, atque similique ad rerum nemo excepturi sapiente
          illo quod voluptates. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Iure dolor totam, laboriosam quisquam repellendus
          ullam architecto in, ipsum consectetur, fugit non. Eius quidem quasi
          ipsum impedit, id explicabo. Eum, cum.
        </p>
      </Tab>
      <Tab
        eventKey="Prevent Unstable Prices"
        title="Prevent Unstable Prices"
        className="eacttabs"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quasi
          obcaecati facilis. Sequi minus perspiciatis cupiditate autem amet
          deserunt aspernatur, atque similique ad rerum nemo excepturi sapiente
          illo quod voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi rem laborum animi praesentium sint iste
          eius reiciendis inventore! Saepe ipsa ipsum adipisci voluptatum hic
          dolore quae rerum ullam soluta illum? Nihil blanditiis hic, saepe
          illum est unde reprehenderit eaque voluptas quibusdam cum? Facilis,
          quasi repellendus optio non placeat delectus, incidunt aliquam sunt
          libero fugiat provident iure omnis recusandae odit dolorem.
        </p>
      </Tab>
      <Tab
        eventKey="Best Prices On The Market"
        title="Best Prices On The Market"
        className="eacttabs"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quasi
          obcaecati facilis. Sequi minus perspiciatis cupiditate autem amet
          deserunt aspernatur, atque similique ad rerum nemo excepturi sapiente
          illo quod voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Similique eius quos obcaecati est vero praesentium
          maxime esse reprehenderit, totam qui dolore cum nisi culpa amet
          adipisci voluptas ipsam. Ex, quasi?
        </p>
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;
