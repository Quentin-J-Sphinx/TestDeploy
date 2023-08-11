import './style.scss';
import { useState } from "react";
import slugify from "slugify";
import categories from './datas.js';

function Categories(){
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseOver = (itemId) => {
        setIsHovered(itemId);
    };

    const handleMouseOut = () => {
        setIsHovered(null);
    };


    function handleClick(title) {
        const slug = slugify(title, { lower: true })
        window.location.href = `/recherche?categorie=${encodeURIComponent(slug)}`;
    }

    const categoriesList = categories.map(categorie =>
        <>
            {window.location.href != 'http://localhost:1234/search' && (
            <li 
            onMouseOver={() => handleMouseOver(categorie.id)} 
            onMouseOut={handleMouseOut} 
            onClick={() => handleClick(categorie.title)}
            className='categories--list' 
            key={categorie.id}
            >
                <img className='categories--logo' src={isHovered === categorie.id ? categorie.lightimg : categorie.img} alt={categorie.alt} />
                {categorie.title}
            </li>
            )}

            {window.location.href === 'http://localhost:1234/search' && (
                <li 
                onMouseOver={() => handleMouseOver(categorie.id)} 
                onMouseOut={handleMouseOut} 
                onClick={() => handleClick(categorie.title)}
                className='categories--list categories--list--search' 
                key={categorie.id}
                >
                    <img className='categories--logo' src={isHovered === categorie.id ? categorie.lightimg : categorie.img} alt={categorie.alt} />
                    {categorie.title}
                </li>
            )}
        </>
        )
    return(
        <section>
            <ul className='categories'>{categoriesList}</ul>
        </section>
    );
}

export default Categories;