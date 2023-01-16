import { useEffect, useState } from 'react';
import CatLoader from './CatLoader';

function CatImg() {
  const [img, setImg] = useState<Blob>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getCatImg = async () => {
    setIsLoading(true);
    setImg(undefined);

    const urlFile = 'https://cataas.com/cat';
    const response = await fetch(urlFile);
    const newImg: Blob = await response.blob();
    setImg(newImg);
  };

  const handleImageLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="file">
      <div className="file_item">
        {isLoading && <CatLoader />}
        {img && (
          <img
            className="file_img"
            onLoad={handleImageLoading}
            src={URL.createObjectURL(img)}
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
