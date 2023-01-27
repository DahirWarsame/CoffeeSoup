import { useState, useEffect } from 'react';

const useCoffeeMachine = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [extras, setExtras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610');
        const json = await response.json();
        setCoffeeTypes(json.types);
        setSizes(json.sizes);
        setExtras(json.extras);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { coffeeTypes, sizes, extras, loading, error };
};

export default useCoffeeMachine;