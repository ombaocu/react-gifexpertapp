import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

    // const categories = ['One Push', 'Samuri X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Naruto'])


    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Naruto']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>   
            <AddCategory setCategories={ setCategories } />
            <hr/>

                {
                    categories.map( category => (
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                   )
                    
                }
        </>
    )
}

export default GifExpertApp
