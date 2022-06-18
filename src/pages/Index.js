import React, { useEffect, useState } from 'react'

export const Home = () => {
    const [loadingCategories, setLoadingCategories] = useState(false)
    const [loadedCategories, setLoadedCategories] = useState(false)
    const [categories, setCategories] = useState(null)
    const [messageCategories, setMessageCategories] = useState(null)
    const [products, setProducts] = useState(null)
    const [loadingProducts, setLoadingProducts] = useState(false)
    const [messageProducts, setMessageProducts] = useState(null)

    useEffect(() => {
     
    }, [])

    const setDefualtValueToCategoryList = function() {
      let event = new Event('change');
      document.getElementById("category-name").value = '';
      document.getElementById("category-name").dispatchEvent(event);
    }

    const handleChange = e => {

    };

    return (  
      <section className="container py-3">
        <div className='row row-cols-1 mb-3'>
          <div className="form-floating">
            <select className="form-select"
            id='category-name'
            name='category-name'
            onChange={handleChange.bind(this)}>
              <option value={""} defaultValue disabled>{(loadingCategories && messageCategories)||(loadedCategories && messageCategories)}</option>
              {
              !!categories && categories.length > 0?            
                categories.map((category)=> (
                  <option key={category} value={category} className="text-capitalize">
                    {category.replace(/\b(\w)/g, s => s.toUpperCase())}
                  </option>
                )):[]
              }
            </select>
            <label htmlFor="category-name" className="mx-3">Categoría de productos</label> 
          </div>
        </div>
        <div className="row">
          <br/>
          {loadingProducts && messageProducts}
          <br/>
          {!!products && products.length > 0 ? products.map((product) => {
              return(              
                  <div key={product.id} className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img className="img-fluid rounded-start card-img-product mt-3" src={product.image} alt={product.title}/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><small className="text-muted">Precio: {product.price}</small></p>                   
                          </div>                    
                        </div>
                      </div>
                  </div>
              )   
            }):(<p></p>)
          }
        </div> 
        
      </section>
    )
}