import { useState } from 'react';

function CatImg() {
  const [img, setImg] = useState<Blob>();

  const getCatImg = async () => {
    const url = 'https://cataas.com/cat';
    const response = await fetch(url);
    const newImg: Blob = await response.blob();
    setImg(newImg);
  };

  return (
    <div className="file">
      <div className="file_item">
        {img && (
          <img
            className="file_img"
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
