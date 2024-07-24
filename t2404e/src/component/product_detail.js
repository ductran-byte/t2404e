import { useParams } from "react-router-dom";

function ProductDetail() {
    const {id} = useParams();
    return (
        <h1>Product detail id: {id}</h1>
    );
}
export default ProductDetail