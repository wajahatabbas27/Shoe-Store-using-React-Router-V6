import React from 'react'
import { useParams } from 'react-router-dom'

export default function ShoeDetails() {
    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "Nike Adapt": {
            name: "Apgs-nsw",
            img:
                "https://p7.hiclipart.com/preview/624/596/891/nike-free-nike-air-max-sneakers-shoe-red-shoes.jpg"
        },
        "kyrie-7-ep-basketball-shoe-kMwm27": {
            name: "Kyrie 7 EP",
            img: "https://assets.ajio.com/medias/sys_master/root/20200923/zVxD/5f6a534d7cdb8c21e3698ec7/-1117Wx1400H-460550669-red-MODEL.jpg"
        },
        "air-force-1-crater-shoe-Z7JHnk": {
            name: "Nike Air Force 1 Crater",
            img: "https://cdn.cliqueinc.com/posts/263604/types-of-nike-sneakers-263604-1532348873438-product.700x0c.jpg"
        },
        "Nike Air Force 1": {
            name: "Nike Dunk",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e57215a3-1d81-46dc-b85d-edfec0fedfad/superrep-go-training-shoe-SMnpt6.jpg"
        },
        "air-jordan-xxxv-pf-basketball-shoe-QrRrHz": {
            name: "Air Jordan XXXV PF",
            img: "https://cms.qz.com/wp-content/uploads/2020/02/NIKE-AIR-ZOOM-ALPHAFLY-NEXT_-5.jpg?quality=75&strip=all&w=450&h=337&crop=1  "
        },
        "blazer-mid-77-infinite-shoe-dCp5Mm": {
            name: "Nike Blazer Mid '77 Infinite",
            img: "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/956557c5-1a43-414b-9ab1-dd2d5b7003b0/air-max-1-shoe-SS9rJG.jpg"
        },
        "air-max-1-shoe-SS9rJG": {
            name: "Nike Air Max 1",
            img: "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/1f035601-bb2c-450a-bc3b-d88a2df87073/air-vapormax-2020-flyknit-mens-shoe-kn9vwZ.jpg"
        },
        "metcon-6-training-shoe-mW5Pwg": {
            name: "Nike Metcon 6",
            img: "https://b4less.pk/wp-content/uploads/2020/07/Nike-Air-Max-720-Grey-Mens-Shoes.jpg"
        }

    };


    const { slug } = useParams();
    const shoe = shoes[slug];

    if (!shoe) {
        return <h1>Not Found!..</h1>
    }

    const { name, img } = shoe;
    return (
        <div style={{ margin: "30px 500px" }}>

            <center><h3>Product Details</h3></center>
            <img src={img} alt={name} style={{ width: "350px", height: "350px" }} />
            <center><h2>{slug}</h2></center>

        </div>
    )
}
