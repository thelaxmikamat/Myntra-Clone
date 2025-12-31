import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header/header";
import Header2 from "./Header2/main";
import Body2 from "./Body2/body2";
import Footer from "./Footer/footer";


//Header
//Body
//Footer

function Card(props){
    return(
        //making card
        <div style={{ backgroundColor:"#fee2e1ff", border:"2px solid #fee2e1ff", padding:"4px"}}>
            <img src={props.image} height="200px" width="180 px" alt={props.cloth} style={{padding:"2px"}} />
            <div style={{textAlign:"center", color:"black"}}>
                <h2 style={{whiteSpace:"pre-line"}}>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>

    )
}
const arr =[
    {cloth:"T-Shirt", Offer:"30-40% OFF", img:"https://cdn.shopify.com/s/files/1/1150/2764/files/Women_s_T-Shirts_by_Occasion_480x480.jpg?v=1734332637"},
    {cloth: "Ethnic Wear", Offer: "30-50% OFF",img:"https://img.faballey.com/images/Product/XKS03763F/d3.jpg" },
    {cloth:"Western Wear", Offer:"60-80% OFF", img:"https://raassio.com/cdn/shop/files/44A2451-2.jpg?v=1713948820"},
    {cloth:"Women's \n Footwear", Offer:"10-20% OFF", img:"https://i.etsystatic.com/24480679/r/il/a5a25f/4357259544/il_570xN.4357259544_3397.jpg"},
    {cloth:"Men's \n Footwear", Offer:"05-20% OFF", img:"https://admin.mochishoes.com/product/18-381/660/18-381LA12.jpg"},
    {cloth:"Watches", Offer:"20-40% OFF", img:"https://images-static.nykaa.com/media/catalog/product/b/b/bbcc00djwgs73_1.jpg?tr=w-500"},
    {cloth:"Grooming", Offer:"50-60% OFF", img:"https://cdn.prod.website-files.com/61c44817190504d47e91cbc4/68ba95d1a155b791c39ba269_643fbd0e5034c81ee6ab6506_cover-1-beard-routine-how-to-layer-for-men.webp"},
    {cloth:"Makeup", Offer:"30-40% OFF", img:"https://content.jdmagicbox.com/quickquotes/images_main/shimmer-olive-makeup-kit-set-802737518-8e7bzpix.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"},
    {cloth:"Kids Wear", Offer:"70-80% OFF", img:"https://www.iconicindia.com/cdn/shop/articles/Kids_Fashion_Trends.png?v=1693506767"},
    {cloth:"Lounge Wear", Offer:"20-35% OFF", img:"https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/F29038.jpg?im=Resize,width=450"},
    {cloth:"Men's\n Activewear", Offer:"35-40% OFF", img:"https://i.pinimg.com/474x/96/9b/5a/969b5af4ec0a34f523e8741677484561.jpg"},
    {cloth:"Women's \n Activewear", Offer:"20-50% OFF", img:"https://lh6.googleusercontent.com/proxy/za_BagTZevQ1gLJXhWPR7aD9_rjnHVzQYrNjx4hxGOEbEWuQQizItZgu4LoBJlHcFF9MRt9Njb-lo-FJncArIzRU2QmYl_vbSOeWM1UqG4X2EhLQlrH361zf-B3hrAOjT2Tyy-pZTIsWGZAeVRid3IMfQA"},
    {cloth:"Handbags", Offer:"40-50% OFF", img:"https://assets.ajio.com/medias/sys_master/root/20240722/dbbq/669e34346f60443f31982060/-473Wx593H-700216447-purple-MODEL.jpg"},
    {cloth:"Homedecor", Offer:"15-20% OFF", img:"https://cdn.moolwan.com/00fd9a34-d0d6-4bfa-b02e-5e0d0de73f7b.jpg"},
    {cloth:"Jewellery", Offer:"20-30% OFF", img:"https://rubans.in/cdn/shop/files/rubans-24k-gold-plated-goddess-lakshmi-motif-handcrafted-traditional-temple-jewellery-set-necklaces-necklace-sets-chains-mangalsutra-1151539141.jpg?v=1755710564"},
    {cloth:"Eyewear", Offer:"10-20% OFF", img:"https://idee-eyewear.com/cdn/shop/files/IDEE-10-03-2025178.jpg?v=1746608294"},
    {cloth:"Men's \n Ethnic Wear", Offer:"20-40% OFF", img:"https://asukacouture.com/cdn/shop/files/ethnic_wear_for_men_in_hydereabad.jpg?v=1727082720&width=1080"},
    {cloth:"Casual Wear", Offer:"35-40% OFF", img:"https://english.cdn.zeenews.com/sites/default/files/IMG_7418.JPG"},
    {cloth:"Sports Wear", Offer:"50-60% OFF", img:"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_491,c_limit/f2ebddf4-702e-49f4-984b-5c0d4d03213a/what-to-wear-for-cold-weather-running.jpg"},
    {cloth:"Work Wear", Offer:"30-40% OFF", img:"https://athenalifestyle.com/cdn/shop/products/16-09-202200619_1080x.jpg?v=1746879374"},
    {cloth:"Bags & Trolleys", Offer:"10-15% OFF", img:"https://media.karousell.com/media/photos/products/2021/11/30/ted_baker_pink_bow_luggage_ful_1638258710_a1affa63_progressive.jpg"}
]
function App(){
   return(<>
   {/*Header*/}
   <Header/>
   <Header2/>
   <Body2/>
    {/*Body*/}
    <h1 style={{textAlign:"center", backgroundColor:"#FFFF66", color:"green", margin:"20px 4rem 20px 4rem", padding:"15px",fontFamily:"Georgia", marginTop:"50px"}}>Shop By Categories</h1>
    <div style={{display:"flex", gap:"2rem", flexWrap:"wrap", padding:"20px", justifyContent:"center"}}>
       { /*<Card cloth="T-Shirt" offer="40-80% OFF" />*/}
       {
        arr.map((value,index)=> <Card key={index} cloth ={value.cloth} offer={value.Offer} image={value.img}/>)
       }


    </div>
        
    {/*Footer*/}
    <Footer/>
    
</>)
}
const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
































































// here name is expression, you can write any expression in JSX but not statement
//expression means anything which gives output, but statement doesn't give output that's why we don't use that
