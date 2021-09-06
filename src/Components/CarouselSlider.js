// if (data) {
        //     var sliderProducts = data.map((product)=>{
        //     var SliderImg ="../Images/" + product.image;
        //     var title= product.title;
        //     var price = product.price;
        //     var rating = product.rating;
        //     return 
        //<Product
        // key={product.id}
        // id={product.id}
        // title={product.title}
        // img={SliderImg}
        // price={product.price}
        // rating={product.rating}
        // slider/>
            
        // {data.map(product=>(
        //     <>
        //     <Product
        //     key={product.id}
        //     id={product.id}
        //     title={product.title}
        //     img={"../Images/" + product.Sliderimg}
        //     price={product.price}
        //     rating={product.rating}
        //     slider/>
            
        //     </>
        // ))}  
        // })

        <i  class="fas fa-chevron-left prev"></i>
                        <i class="fas fa-chevron-right next"></i>                   
                       <Slider className="slider" {...settings}>
                            {data.map(product=>(
                                <>
                                <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                img={"GET_ITstoreImages/" + product.Sliderimg}
                                price={product.price}
                                rating={product.rating}
                                slider/>
                                
                                </>
                            ))}                                                 
                       </Slider>