import { useEffect, useState } from 'react';
import { CakeCard } from './CakeCard/CakeCard';
import { CakeTypeSelector } from './CakeTypeSelector/CakeTypeSelector';
import './CakesGrid.css';

export const CakesGrid = ({ cakes, addToCart }) => {
  const [filteredCakes, setFilteredCakes] = useState(cakes)
  const [types, setTypes] = useState([{
    id: 0,
    name: 'All'
  },{
    id: 1,
    name: 'Cakes'
  },{
    id: 2,
    name: 'CupCakes'
  },{
    id: 3,
    name: 'Desserts'
  }])
  const [type, setType] = useState(types[0]);

  useEffect(() => {
    setFilteredCakes(cakes.filter((cake) => type.id === 0 || type.id === cake.typeId))
  }, [type])

  const changeType = (newType) => {
    setType(newType)
  }

  return (
      <div
        className='CakesGrid'
      >
        <CakeTypeSelector
          types={types}
          changeType={changeType}
        />
        {filteredCakes.map((cake) => 
          <CakeCard
            cake={cake}
            addToCart={addToCart}
          />
        )}
      </div>
  );
}
