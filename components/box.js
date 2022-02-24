import styles from "../styles/Home.module.css";
const data = [
  {
    img: "/julianwan1.png",
    head: "Speaker 1",
    text: "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage. ",
    time: "09:45",
  },
  {
    img: "/julianwan3.png",
    head: "Speaker 2",
    text: "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage. ",
    time: "06:35",
  },
  {
    img: "/julianwan2.png",
    head: "Speaker 3",
    text: "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage. ",
    time: "04:30",
  },
];

const Box = () => {
  return (
    <div className={styles.new}>
      <div className={styles.box}>
        <p className={styles.para}>Box 1</p>
        {data.map((item, key) => {
          return (
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img className={styles.image} src={item.img} />
                <span style={{ marginLeft: "10px", fontWeight: "500" }}>
                  {" "}
                  {item.head}
                </span>{" "}
                <span style={{ marginLeft: "5px", fontWeight: "400" }}>
                  {item.time}
                </span>
              </div>
              <p style={{ marginLeft: "3rem" }}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Box;
