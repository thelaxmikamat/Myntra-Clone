import React, {useState} from "react"
function Header(){
    const[activeMenu, setActiveMenu]= React.useState(null);
    return(
      <div className="heading">
        {/*image*/}

        <img src="https://i.pinimg.com/736x/68/6d/c5/686dc532a1d5ba6a70057b87815eb929.jpg" className="images" height="100px" width="100px"/>
        {/*options*/}
        <div className="options">
            <div className="menu">
        <button className="but" onMouseEnter={()=> setActiveMenu("men")} onMouseLeave={()=> setActiveMenu(null)}>MEN </button>
            {activeMenu==='men' &&(
                <div className="dropdown" onMouseEnter={()=> setActiveMenu("men")} onMouseLeave={()=> setActiveMenu(null)}>
                    <div>
                        <h3>Outfits</h3>
                    <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Casual Wear</a></li>
                   <li> <a href="#">T-Shirts</a></li>
                   <li> <a href="#">Work Wear</a></li>
                   <li> <a href="#">Ethnic Wear</a></li>
                    </ul>
                    </div>
                     <div>
                        <h3>Gymming</h3>
                    <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Sports Wear</a></li>
                   <li> <a href="#">Men's Activewear</a></li>
                    </ul>
                    </div>
                    <div>
                        <h3>Accessories</h3>
                    <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Watches</a></li>
                   <li> <a href="#">Eyewear</a></li>
                   <li> <a href="#">Men's Footwear</a></li>
                   <li> <a href="#">Grooming</a></li>
                    </ul>
                    </div>


                </div>
            )}
            </div>
       
        <div className="menu">    

        <button className="but"  onMouseEnter={()=> setActiveMenu("women")} onMouseLeave={()=> setActiveMenu(null)}>WOMEN</button>
        {activeMenu=== 'women' &&(
            <div className="dropdown" onMouseEnter={()=> setActiveMenu("women")} onMouseLeave={()=> setActiveMenu(null)}>
                <div>
                <h3>Dresses</h3>
                    <ul style={{listStyleType:"none"}}>
             <li> <a href="#">T-Shirts</a></li>
              <li> <a href="#">Ethnic Wear</a> </li>
             <li>  <a href="#">Casual Wear</a> </li>
              <li> <a href="#">Work Wear</a> </li>
              <li> <a href="#">Lounge Wear</a></li>
               </ul>
               </div>
               <div>
               <h3>Styling</h3>
                    <ul style={{listStyleType:"none"}}>
             <li>  <a href="#"> Makeup</a></li>
            <li>   <a href="#"> Jewellery</a></li>
            <li>   <a href="#"> Watches</a></li>
               </ul>
            </div>
            <div>
               <h3>Workout Diva</h3>
                    <ul style={{listStyleType:"none"}}>
              <li> <a href="#"> Women's Activewear</a></li>
              <li> <a href="#"> Sports Wear</a></li>
               </ul>
            </div>
            <div>
                <h3>Accessories</h3>
                    <ul style={{listStyleType:"none"}}>
            <li>   <a href="#">Watches</a></li>
             <li>  <a href="#">Women's Footwear</a></li>
             <li>  <a href="#">Handbags</a></li>
             <li>  <a href="#">Eyewear</a></li>
               </ul>


            </div>
            </div>
        )}
        </div> 
        <div className="menu">
        <button className="but" onMouseEnter={()=> setActiveMenu("kids")} onMouseLeave={()=> setActiveMenu(null)}>KIDS</button>
        {activeMenu==='kids'&&(
            <div className="dropdown" onMouseEnter={()=> setActiveMenu("kids")} onMouseLeave={()=> setActiveMenu(null)}>
                <div>
                    <h3>Baby Clothing</h3>
                    <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">T-Shirts</a> </li>
                   <li> <a href="#">Jeans</a></li>
                    <li><a href="#">Shorts</a></li>
                   <li> <a href="#">Trousers</a></li>
                   </ul>
                   
                </div>
                <div>
                    <ul style={{listStyleType:"none"}}>
                    <h3> Girls Clothing</h3>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Casual Wears</a></li>
                    </ul>
                </div>
                 <div>
                    <h3>Footwear</h3>
                    <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Casual Shoes</a></li>
                    <li><a href="#">Fancy Shoes</a></li>
                    <li><a href="#">Flats</a></li>
                    </ul>

                </div>
            </div>
        )}
        </div>
         <div className="menu">
        <button className="but" onMouseEnter={()=> setActiveMenu("home")} onMouseLeave={()=> setActiveMenu(null)}>HOME</button>
         {activeMenu==='home'&&(
            <div className="dropdown" onMouseEnter={()=> setActiveMenu("home")} onMouseLeave={()=> setActiveMenu(null)}>
            <div>
                <h3>Bed Linnen & Furnishing </h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Casual Shoes</a></li>
                    <li><a href="#">Fancy Shoes</a></li>
                    <li><a href="#">Flats</a></li>
                    </ul>

            </div>
             <div>
                <h3>Bath</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Bath Towels</a></li>
                    <li><a href="#">Beach Sets</a></li>
                    <li><a href="#">Bath Rugs</a></li>
                    </ul>

            </div>
             <div>
                <h3>Home Decor</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Planters</a></li>
                    <li><a href="#">Aromas & Candles</a></li>
                    <li><a href="#">Mirrors</a></li>
                    </ul>

            </div>

               </div>
            )}
            </div>
            <div className="menu">
        <button className="but" onMouseEnter={()=> setActiveMenu("beauty")} onMouseLeave={()=> setActiveMenu(null)}>BEAUTY</button>
        {activeMenu==='beauty' &&(
            <div className="dropdown" onMouseEnter={()=> setActiveMenu("beauty")} onMouseLeave={()=> setActiveMenu(null)}>
                <div>
                <h3>Makeup</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Lipsticks</a></li>
                    <li><a href="#">Kajal</a></li>
                    <li><a href="#">Eye Shadows</a></li>
                    </ul>

            </div>
             <div>
                <h3>Skincare</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#"> Face Moisturiser</a></li>
                    <li><a href="#">Body Moisturiser</a></li>
                    <li><a href="#">Sunscreen</a></li>
                    </ul>

            </div>
             <div>
                <h3>HairCare</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Shampoos</a></li>
                    <li><a href="#">Conditiors</a></li>
                    <li><a href="#">Hair Oil</a></li>
                    </ul>

            </div>
                </div>

        )}
           
        </div>
            <div className="menu">
        <button className="but" onMouseEnter={()=> setActiveMenu("genz")} onMouseLeave={()=> setActiveMenu(null)}>GENZ</button>
         {activeMenu==='genz' &&(
            <div className="dropdown" onMouseEnter={()=> setActiveMenu("genz")} onMouseLeave={()=> setActiveMenu(null)}>
            <div> 
                <h3>Women's Western Wear</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Dresses</a></li>
                    <li><a href="#">T-shirts</a></li>
                    <li><a href="#">Skirts</a></li>
                    </ul>
            </div>
             <div>
                <h3>Men's Casual Wear</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Casual Shoes</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Baggy Pants</a></li>
                    </ul>

            </div>
             <div>
                <h3>Ethnic Wear</h3>
                <ul style={{listStyleType:"none"}}>
                   <li> <a href="#">Women's Kurta</a></li>
                    <li><a href="#">Men's Kurta</a></li>
                    <li><a href="#">Kurta Sets</a></li>
                    </ul>

            </div>
            </div>
         )}
        </div>
        <button className="but">STUDIO <sup style={{color:'red'}}>New</sup></button>
        </div>
        {/*search*/}
        <input className="search" placeholder="Search for brands, and more"></input>
        {/*3options*/}
        <div className="three-option">
            <button className="button">
                <img src="https://cdn-icons-png.flaticon.com/128/456/456283.png"/>
                Profiles</button>
            <button className="button">
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"/>
                Wishlist</button>
            <button className="button">
                <img src="https://cdn-icons-png.flaticon.com/128/4308/4308487.png"/>Bag</button>
        </div>
      </div>  
    )
}
export default Header