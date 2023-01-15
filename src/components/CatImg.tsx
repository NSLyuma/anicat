import { useEffect, useState } from 'react';
import CatLoader from './CatLoader';

function CatImg() {
  const [img, setImg] = useState<Blob>();
  const [imgUrl, setImgUrl] = useState('img/gag.jpg');
  const [isLoading, setIsLoading] = useState(true);

  const catImg = document.querySelector<HTMLImageElement>('.file_img');

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  const getCatImg = async () => {
    setIsLoading(true);
    // setImgUrl('');
    // setImg(undefined);

    if (catImg) {
      catImg.style.opacity = '0';
    }

    // const urlFile = 'https://cataas.com/cat';
    // const response = await fetch(urlFile);
    // const newImg: Blob = await response.blob();
    // setImg(newImg);

    const urlData = 'https://api.thecatapi.com/v1/images/search';
    const responseData = await fetch(urlData);
    const [data] = await responseData.json();

    setImgUrl(data.url);
  };

  const handleImageLoading = () => {
    setIsLoading(false);

    if (catImg) {
      catImg.style.opacity = '1';
    }
  };

  return (
    <div className="file">
      <div className="file_item">
        {isLoading && <CatLoader />}
        {/* {img && (
          <img
            className="file_img"
            onLoad={handleImageLoading}
            src={URL.createObjectURL(img)}
            alt="cat-img"
          />
        )} */}
        {imgUrl && (
          <img
            className="file_img"
            onLoad={handleImageLoading}
            src={imgUrl}
            alt="cat-img"
          />
        )}
      </div>

      <button className="file_btn" onClick={getCatImg}>
        Хочу картинку с котом!
      </button>
    </div>
  );
}

export default CatImg;
