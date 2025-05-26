
interface productNameProp  {
    params:{
        product_name : string
    }
}


const productName = ({params}:productNameProp) => {
    const product_name = params;

    return(
        <>
        <p>Product Name </p>
        {product_name}
        </>
    )
}

export default productName;