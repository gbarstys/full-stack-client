import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeashContainer from '../../components/leashContainer';
import LeashCard from '../../components/leashCard';
import Leash from '../../types/leash';

const ProductsPage: React.FC = () => {
  const [leashes, setLeashes] = useState<Leash[]>([]);

  useEffect(() => {
    axios.get<Leash[]>('http://localhost:8000/leashes')
      .then(({ data }) => setLeashes(data))
      .catch(console.error);
  }, []);

  return (
    <LeashContainer>
      {leashes.map(({ id, ...leashprops }) => <LeashCard key={id} {...leashprops} />)}
    </LeashContainer>
  );
};

export default ProductsPage;
