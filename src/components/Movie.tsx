import React, { FC, useState } from "react";
import { observer } from "mobx-react";

import { useStores } from "../stores/Context";

interface Props {}

const Movie: FC<Props> = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newRate, setNewRate] = useState<number>(1);
  const [newTitle, setNewTitle] = useState<string>("");

  const { movieStore } = useStores();

  const onRateChange = (value: number) => {
    setNewRate(value);
  };

  const onModalOk = () => {
    movieStore.createMovie(newTitle, newRate);
    setNewRate(1);
    setNewTitle("");
    setIsModalOpen(false);
  };

  const onDelete = (id: number) => {
    movieStore.deleteMovie(id);
  };

  const onExistingRateChange = (id: number, rate: number) => {
    movieStore.changeRate(id, rate);
  };

  return (
    <div>
      <ul>
        {movieStore.movies.map(({ id, rate, title }) => {
          return (
            <li key={id}>
              <p>Num: {id}</p>
              <p>Rate: {rate}</p>
              <p>Title: {title}</p>
              <p>
                <button onClick={() => onDelete(id)}>삭제</button>
              </p>
              <br />
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          placeholder="title"
          value={newTitle}
          onChange={e => setNewTitle(e.currentTarget.value)}
        />
        <select
          onChange={e => setNewRate(+e.currentTarget.value)}
          value={newRate}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => onModalOk()}>추가</button>
      </div>
    </div>
  );
});

export default Movie;
