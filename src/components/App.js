import React, { useEffect, useState } from 'react';

function App() {
    const [image, setImage] = useState("Loading...")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
        })


    }, [])
    
    if (image === "Loading..."){
        return (<p>{image}</p>)
    } else {
        return (<img alt="A Random Dog" src={image}></img>)
    }
}

export default App