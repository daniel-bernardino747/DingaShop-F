import { useLoaderData } from 'react-router-dom';
import Footer from '../../components/Footer';
import { viewUserPerfil } from '../../helpers/auth.helpers';
import formatInReal from '../../Utils/format.util';
import * as s from './style';

export async function loader() {
  const data = await viewUserPerfil();
  console.log(data);
  return { data };
}

export default function User() {
  const { data } = useLoaderData();
  const { user, historic } = data;
  console.log('user to page user', data);
  return (
    <>
      <s.Container>
        <s.BoxInitial>
          <img src={user.image} alt={user.name} />
          <div>
            <h1>
              Bem vindo,
              {' '}
              {user.name}
            </h1>
            <p>
              Aqui você encontra suas informações e seu histórico de compras.
              Futuramente poderá modificar essas informações.
            </p>
          </div>
        </s.BoxInitial>
        <s.BoxInformations>
          <s.Subtitle>Informações:</s.Subtitle>
          <div>
            <s.Label>
              <s.LabelText>Nome:</s.LabelText>
              <s.Input disabled value={user.name} />
            </s.Label>
            <s.Label>
              <s.LabelText>Email:</s.LabelText>
              <s.Input disabled value={user.email} />
            </s.Label>
          </div>
        </s.BoxInformations>
        <s.BoxHistoric>
          <s.Subtitle>Histórico de Compras:</s.Subtitle>
          {historic.map((item) => (
            <s.Products key={item._id}>
              <s.Label>
                <s.LabelText>Forma de Pagamento:</s.LabelText>
                <s.Input disabled value={item.purchase.payment} />
              </s.Label>
              <div>
                <s.LabelText>Produtos:</s.LabelText>
                {item.purchase.products.map((product) => (
                  <span>
                    {product.product.name}
                    {' '}
                    -
                    {' '}
                    {formatInReal(product.product.cost)}
                  </span>
                ))}
              </div>
            </s.Products>
          ))}
        </s.BoxHistoric>
      </s.Container>
      <Footer />
    </>
  );
}
