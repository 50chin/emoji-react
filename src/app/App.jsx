import './styles/global.css';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, searchInput] = useState('');
  const [pageValue, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(4);
  const [limitValue, setLimit] = useState(6);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        `/api/emoji?search=${searchValue}&page=${pageValue}&limit=${limitValue}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLastPage(json.lastPage);
      })
      .catch((err) => console.log(err));
  }, [searchValue, pageValue, limitValue, lastPage]);

  const searchHandler = (evt) => {
    searchInput(evt.target.value);
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
      <Footer
        data={data}
        limitValue={limitValue}
        setLimit={setLimit}
        setPage={setPage}
        pageValue={pageValue}
        lastPage={lastPage}
      />
    </>
  );
}

export default App;
