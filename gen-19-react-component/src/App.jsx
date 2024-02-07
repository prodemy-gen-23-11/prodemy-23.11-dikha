import Ladiva from './images/produk/Ladiva.jpg';
import Livia from './images/produk/Livia.jpg';
import Monica from './images/produk/Monica.jpg';
import Terra from './images/produk/Terra.jpg';
import ProductCard from "./sections/ProductCard";



function App() {

  return (
    <section className="container flex flex-row mx-auto gap-x-7 pt-5">
      <ProductCard title={"Ladiva Sofa"} src={Ladiva} price={"$1000"} />
      <ProductCard title={"Livia Sofa"} src={Livia} price={"$900"} />
      <ProductCard title={"Monica Sofa"} src={Monica} price={"$1200"} />
      <ProductCard title={"Terra Sofa"} src={Terra} price={"$1100"} />
    </section>
  )
}



export default App