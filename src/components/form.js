import { useEffect, useState } from "react";

function Form() {
    const [allMemes, setAllMemes] = useState([]);
    const [data, setData] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setData(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json())
        .then(data => {
            setAllMemes(data.data.memes);
        });
        
    }, [])

    return (
        <div className="container">
            <div className="form">
                <input
                    className="top-text"
                    type='text'
                    placeholder='Top Text'
                    value={data.topText}
                    name="topText"
                    onChange={handleChange}
                ></input>
                <input
                    className="bottom-text"
                    type='text'
                    placeholder='Bottom Text'
                    value={data.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                ></input>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={data.randomImage} alt='meme' className='meme' />
                <h2 className="meme--text top">{data.topText}</h2>
                <h2 className="meme--text bottom">{data.bottomText}</h2>
            </div>
        </div>
    )
}

export default Form;