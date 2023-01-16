import { useEffect, useState } from 'react';
import CatLoader from './CatLoader';

function CatGif() {
  const [gif, setGif] = useState<Blob>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getCatGif = async () => {
    setIsLoading(true);
    setGif(undefined);

    const url = 'https://cataas.com/cat/gif';
    const response = await fetch(url);
    const newGif: Blob = await response.blob();
    setGif(newGif);
  };

  const handleImageLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="file">
      <div className="file_item">
        {isLoading && <CatLoader />}
        {gif && (
          <img
            className="file_img"
            onLoad={handleImageLoading}
            src={URL.createObjectURL(gif)}
            alt="cat-gif"
          />
        )}
      </div>

      <button className="file_btn" onClick={getCatGif}>
        Хочу гифку с котом!
      </button>
    </div>
  );
}

export default CatGif;

// ------------------------------------------------
// при поломке API закомментить сверху и раскомментить снизу
// ------------------------------------------------

// import { useState } from 'react';
// import CatLoader from './CatLoader';

// const getRandom = () => {
//   return Math.floor(Math.random() * (16 - 1) + 1);
// };

// function CatGif() {
//   const [gif, setGif] = useState('/img/cats/cat1.gif');
//   const [isLoading, setIsLoading] = useState(true);

//   const gifEl = document.querySelector<HTMLImageElement>('.broken-gif');

//   const getCatGif = () => {
//     setIsLoading(true);

//     if (gifEl) {
//       gifEl.style.opacity = '0';
//     }

//     setGif(`/img/cats/cat${getRandom()}.gif`);
//   };

//   const handleImageLoading = () => {
//     setIsLoading(false);

//     if (gifEl) {
//       gifEl.style.opacity = '1';
//     }
//   };

//   return (
//     <div className="file">
//       <div className="file_item">
//         {isLoading && <CatLoader />}
//         {gif && (
//           <img
//             className="file_img broken-gif"
//             onLoad={handleImageLoading}
//             src={gif}
//             alt="cat-gif"
//           />
//         )}
//       </div>

//       <button className="file_btn" onClick={getCatGif}>
//         Хочу гифку с котом!
//       </button>
//     </div>
//   );
// }

// export default CatGif;
