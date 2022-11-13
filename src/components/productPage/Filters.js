import './Filters.css';
/* import Slider from 'rc-slider';
 */ import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Filters = ({ getAdvertsFilter }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('');
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeSale = (event) => {
    let isForSale = event.target.value;
    if (isForSale === 'true') {
      isForSale = true;
    }
    if (isForSale === 'false') {
      isForSale = false;
    }

    setSale(isForSale);
  };

  const handleChangeTags = (event) => {
    const tagsArray = Array.from(event.target.selectedOptions);
    let tags = tagsArray.map((option) => {
      return option.value;
    });
    tags = tags.filter((tag) => tag !== '');

    setTags(tags);
  };

  //TODO controlar que precio minimo sea menor que máximo y viceversa
  const handleChangeMinPrice = (event) => {
    if (event.target.value === '') {
      setMinPrice(0);
    } else {
      setMinPrice(event.target.value);
    }
  };

  const handleChangeMaxPrice = (event) => {
    if (event.target.value === '') {
      setMaxPrice(0);
    } else {
      setMaxPrice(event.target.value);
    }
  };
  //----------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = [name, sale, minPrice, maxPrice, tags];
    getAdvertsFilter(filters);
  };

  return (
    <form className="adverts-filters-container" onSubmit={handleSubmit}>
      <div className="adverts-filters">
        <div>
          <label htmlFor="byName">Por nombre</label>
          <input type="text" name="byName" id="byName" onChange={handleChangeName} />
        </div>

        <div>
          <fieldset className="filter-fieldset-radio" onChange={handleChangeSale}>
            <legend>Tipo de anuncio:</legend>

            <label htmlFor="bySell">Venta</label>
            <input type="radio" name="bySell" id="bySell" value={true} />

            <label htmlFor="byBuy">Compra</label>
            <input type="radio" name="bySell" id="byBuy" value={false} />

            <label htmlFor="All">Todos</label>
            <input type="radio" name="bySell" id="All" value="" />
          </fieldset>
        </div>

        <div className="byPrice">
          <label htmlFor="byPrice">Por precio</label>
          <input
            type="number"
            name="byPrice"
            id="byPriceMin"
            placeholder="Precio mínimo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMinPrice}
          />
          <input
            type="number"
            name="byPrice"
            id="byPriceMax"
            placeholder="Precio máximo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMaxPrice}
          />

          {/* <Slider value={[0, 1000]} range /> */}
        </div>

        <div>
          <label htmlFor="byTags">Por tags</label>
          <select
            name="byTags"
            id="byTags"
            style={{ padding: '20px' }}
            multiple
            onChange={handleChangeTags}
          >
            <option value="" id="none">
              ---
            </option>
            <option value="lifestyle" id="lifestyle">
              Lifestyle
            </option>
            <option value="mobile" id="mobile">
              Mobile
            </option>
            <option value="motor" id="motor">
              Motor
            </option>
            <option value="work" id="work">
              Work
            </option>
          </select>
        </div>

        <button type="submit" /* disabled={isDisabled()} */>Filtrar</button>
      </div>
    </form>
  );
};

export default Filters;
