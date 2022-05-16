import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Avatar', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);
    // const handleAdd = () => {
    //     setCategories( cats => [...categories, 'Hunter'] );
    //}

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )

}

export default GifExpertApp;