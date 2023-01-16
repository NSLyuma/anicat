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

    const url = 'https://cataas.com/cat';
    const response = await fetch(url);
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

// ------------------------------------------------
// при поломке API закомментить сверху и раскомментить снизу
// ------------------------------------------------

// import { useState } from 'react';
// import CatLoader from './CatLoader';

// function CatImg() {
//   const [imgUrl, setImgUrl] = useState('img/gag.jpg');
//   const [isLoading, setIsLoading] = useState(true);

//   const imgEl = document.querySelector<HTMLImageElement>('.broken-img');

//   const getCatImg = async () => {
//     setIsLoading(true);

//     if (imgEl) {
//       imgEl.style.opacity = '0';
//     }

//     const url = 'https://api.thecatapi.com/v1/images/search';
//     const response = await fetch(url);
//     const [data] = await response.json();

//     setImgUrl(data.url);
//   };

//   const handleImageLoading = () => {
//     setIsLoading(false);

//     if (imgEl) {
//       imgEl.style.opacity = '1';
//     }
//   };

//   return (
//     <div className="file">
//       <div className="file_item">
//         {isLoading && <CatLoader />}
//         {imgUrl && (
//           <img
//             className="file_img broken-img"
//             onLoad={handleImageLoading}
//             src={imgUrl}
//             alt="cat-img"
//           />
//         )}
//       </div>

//       <button className="file_btn" onClick={getCatImg}>
//         Хочу картинку с котом!
//       </button>
//     </div>
//   );
// }

// export default CatImg;
