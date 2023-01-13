import { useState } from 'react';

function CatGif() {
  const [gif, setGif] = useState<Blob>();

  const getCatGif = async () => {
    const url = 'https://cataas.com/cat/gif';
    const response = await fetch(url);
    const newGif: Blob = await response.blob();
    setGif(newGif);
  };

  return (
    <div className="file">
      <div className="file_item">
        {gif && (
          <img
            className="file_img"
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
