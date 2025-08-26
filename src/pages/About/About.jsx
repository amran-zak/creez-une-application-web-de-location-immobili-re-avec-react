import img from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import items from '../../data/itemsAbout'

export default function About() {
  return (
    <>
      <Banner image={img}/>
       <div style={{ maxWidth: 1024, margin: "0 auto", padding: "24px 16px" }}>
        {items.map((it) => (
          <Collapse key={it.title} title={it.title}>
            {it.content}
          </Collapse>
        ))}
      </div>
    </>
  );
}
