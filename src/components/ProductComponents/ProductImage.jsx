import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import logo from "../../assets/img/logo.webp";
import Loader from '../HomeComponents/Loader'

const ProductImage = () => {
    const productName = useParams().productName.replace(/-/g, " ");
    const productId = useParams().productId;
    const [query, setQuery] = useState(false);
    const [image, setImage] = useState("");
    const [heading, setHeading] = useState("");
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState("Click to copy link");
    const url = window.location.href;
    const clipBoardText = `${url}`;

    useEffect(() => {
        const fetchData = async () => {
            if (productName.length > 0) {
                const res = await axios.get(
                    import.meta.env.VITE_REACT_APP_API_URL +
                        `/products?populate=*&[filters][title][$eqi]=${productName}&[filters][id][$eqi]=${productId}`,
                    {
                        headers: {
                            Authorization:
                                "bearer " +
                                import.meta.env.VITE_REACT_APP_API_TOKEN,
                        },
                    }
                );

                setData(res.data.data);
            }
        };

        fetchData();
    }, [productName]);

    useEffect(() => {
        setImage(data[0]?.attributes?.image?.data?.attributes?.url),
            setHeading(data[0]?.attributes?.title),
            setQuery(true);
    }, [data]);

    return (
        // <!-- Product details -->
        <>
            {!query ? (
                <Loader />
            ) : (
                <div className="product-details pb-3">
                    {/* <!-- Header --> */}
                    <header className="product-details-header pt-1 pb-1">
                        <div className="container">
                            {/* <!-- Logo --> */}
                            <Link to={"/"} className="logo" title="Kocoa Mania">
                                <img
                                    src={logo}
                                    alt="kocoamania"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </header>

                    {/* <!-- Product details content --> */}
                    <div className="container">
                        <a
                            onClick={() => window.history.back()}
                            title="Back to Products"
                            className="btn btn-primary btn-white"
                        >
                            <i
                                className="fa fa-arrow-circle-left "
                                aria-hidden="true"
                            ></i>{" "}
                            Back to Products
                        </a>
                        <figure>
                            <img src={image} alt={heading} />
                            <figcaption>
                                <h2 className="pt-2 pb-2">{heading}</h2>
                                <a
                                    className="btn btn-primary btn-white"
                                    title="Copy link"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            clipBoardText
                                        );
                                        setMsg("Link Copied to Clipboard");
                                    }}
                                >
                                    <i className="fas fa-copy"></i>
                                    Copy link
                                </a>
                            </figcaption>
                        </figure>
                        <p className="pt-2 pb-2">{msg}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductImage