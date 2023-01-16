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
