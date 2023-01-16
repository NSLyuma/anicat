import React, { useEffect, useState } from 'react';

const getRandom = () => {
  return Math.floor(Math.random() * (201 - 1) + 1);
};

function AnimeQuiz() {
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState<any[]>([]);
  const [url, setUrl] = useState('');
  const [score, setScore] = useState(0);
  const [isRightAnswer, setIsRightAnswer] = useState('');

  const btnChange = document.querySelector<HTMLImageElement>('.unactive');

  const getData = async () => {
    btnChange?.removeAttribute('disabled');
    setIsRightAnswer('');

    const response = await fetch(
      `https://api.jikan.moe/v4/characters/${getRandom()}`,
    );
    const result = await response.json();
    console.log(result);
    setUrl(result.data.images.jpg.image_url);
    setName(result.data.name.split(' ').map((n: any) => n.toLowerCase()));
    console.log(name);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event?.target.value.toLowerCase());
  };

  const compareValues = () => {
    if (name.includes(answer)) {
      setScore((prevValue) => prevValue + 10);
      setIsRightAnswer('Правильно!');
    } else {
      setIsRightAnswer('Неправильно!');
    }
    setAnswer('');
    if (btnChange) {
      btnChange.setAttribute('disabled', 'true');
    }
  };

  return (
    <div className="quiz">
      <a className="return" href="/anime">
        Назад
      </a>

      <div className="quiz_score">
        <p>Счёт: {score}</p>
        <div className="quiz_is-right">
          <p>{isRightAnswer}</p>
          <p>
            {isRightAnswer === 'Неправильно!' && (
              <div className="quiz_right">
                Правильный ответ: {name.join(' ')}
              </div>
            )}
          </p>
        </div>
      </div>

      {url && <img className="quiz_img" src={url} alt="character" />}
      <input
        className="quiz_input"
        name="answer"
        onChange={handleOnChange}
        value={answer}
        type="text"
        placeholder="Ответ"
      />
      <button className="quiz_btn unactive" onClick={compareValues}>
        Проверить
      </button>
      <button className="quiz_btn quiz_btn-m" onClick={getData}>
        Дальше
      </button>
    </div>
  );
}

export default AnimeQuiz;
