import React from 'react';
import Style from './Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Item({ item, addItemToFav, quickView }) {
    const empHeart = <FontAwesomeIcon icon={emptyHeart} />;
    const fulHeart = <FontAwesomeIcon style={{ color: '#d72d2d' }} icon={fullHeart} />;

    return (
        <div className={Style.image}>
            <img src={item.thumb} alt='dim' />
            <div className={Style.like} onClick={() => addItemToFav(item.id)}>
                {item.isFav ? fulHeart : empHeart}
            </div>{' '}
            <Link to={`/v/${item.id}`} className={Style.view}>
                <FontAwesomeIcon icon={faEye} />
            </Link>
            <Link to={`/product/${item.id}`} className={Style.hover}>
                <img src={item.image[1]} alt='321' />
            </Link>
        </div>
    );
}
