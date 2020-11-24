import React from 'react';
import Style from './Shop.module.css';
import Masonry from 'react-masonry-component';
import Sidebar from './Sidebar/Sidebar';
import Card from '../Home/New/Card/Card';
import { motion } from 'framer-motion';

export default function Shop({ Items, addItemToFav, getQuery }) {
    document.title = 'Shop';
    const masonryOptions = {
        transition: 0.5,
        columnWidth: 150,
        columnGutter: 18,
    };
    const formatNumb = numb => {
        return Intl.NumberFormat().format(numb);
    };
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={Style.Shop}>
            <div className={Style.Title}>Our Product</div>
            <div className={Style.container}>
                <div className={Style.sidebar}>
                    <Sidebar Items={Items} getQuery={getQuery} />
                </div>
                <div className={Style.Items}>
                    <Masonry
                        className={'my-gallery-class'}
                        elementType={'ul'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}>
                        {Items
                            ? Items.map((item, index) => {
                                  return (
                                      <div className={Style.Item} key={index}>
                                          <Card key={index} item={item} addItemToFav={addItemToFav} formatNumb={formatNumb} />
                                      </div>
                                  );
                              })
                            : null}
                    </Masonry>
                </div>
            </div>
        </motion.div>
    );
}
