import { useNavigate } from "react-router-dom";


function ProductCard(props){
    const {title, price, src, id} = props;

    const navigate = useNavigate();
    const goToProductPage = (id) => {
        navigate(`/products/${id}`);
        window.scrollTo(0,0);
    }

    return (
        <section className='flex items-center rounded-3xl bg-gray-300 cursor-pointer' {...props} onClick={() => goToProductPage(id)}>
            <div className='py-2 shadow-xl'>
                <div className='max-w-96 p-2'>
                    <img className='rounded-xl shadow-xl hover:scale-105' src={src}/>
                </div>
                <div className='text-5xl font-semibold pt-5 pl-2 cursor-pointer'>
                    <h1>{title}</h1>
                </div>
                <div className='text-2xl pt-3 text-right pr-5'>
                    {price}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;