import './styles/global.css';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';
import { useState } from 'react';
import { data } from '../data/emoji';

function App() {
  const [searchValue, searchInput] = useState('');

  const searchHandler = (evt) => {
    searchInput(evt.target.value);
    console.log(searchValue);
  };
  const cards = data.filter(
    (el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      el.keywords.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header searchHandler={searchHandler} searchValue={searchValue} />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default App;
