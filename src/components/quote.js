import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'mfGG47s05F8D6p05DjCIZA==bM1kiW3SEssMKg31',
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setQuote(data[0]?.quote || 'No quote available');
        } else {
          setError('Error fetching quote');
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="quote">
      <h2>Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
