import { Link, useLoaderData, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import formatInReal from '../../Utils/format.util';

export default function Search() {
  const { catalog } = useLoaderData();
  const name = useParams().name.replaceAll('%20', '');
  const layout = [];
  catalog.forEach((p) => {
    if (p.product.name.toLowerCase().includes(name)) {
      layout.push([p.product.name, p.product.cost, p.product.image, p._id]);
    }
  });
  return (
    <>
      <ContainerPage>
        {layout.map((p) => (
          <Link style={{ textDecoration: 'none' }} to={`/product/${p[3]}`}>
            <Product>
              <img src={p[2]} alt={`${p[0]}`} />
              <h2>{p[0]}</h2>
              <h1>{formatInReal(p[1])}</h1>
            </Product>
          </Link>
        ))}
      </ContainerPage>
      <Footer />
    </>
  );
}

const ContainerPage = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
img{
    width: 200px;
    height: 200px;
}
h1{
    font-weight: 700;
    font-size: 20px;
    flex-wrap: wrap;
    color: #000000;
}
h2{
    font-weight: 400;
    font-size: 17px;
    color: #000000;

}
`;

const Product = styled.div`
width: 200px;
height: 270px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-between;
`;
