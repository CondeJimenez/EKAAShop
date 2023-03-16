import { useGetCartQuery } from "../../../../redux/service/cart.service";
import ErrorForm from "../../../../components/errors/ErrorForm";
import WishCart from "../../../../components/wishCart/WishCart";

const ListCartMap = ({ me }) => {
  const { data: results = [], error, isLoading } = useGetCartQuery(me);

  return error ? (
    <ErrorForm message={error.data.message} />
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    results?.results?.Products.map((p) => <WishCart p={p} title={"Cart"} key={p.id} />)
  );
};

export default ListCartMap;
