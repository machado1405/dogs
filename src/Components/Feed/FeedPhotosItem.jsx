import React from 'react';
import styles from '../../css/FeedPhotosItem.module.css';
import Image from '../Helper/Image';
function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
