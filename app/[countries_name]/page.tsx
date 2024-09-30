import { countries } from '../data/countries';
import { notFound } from 'next/navigation';

type Props = {
  params: { countries_name?: string };
};

export default function CountryPage({ params }: Props) {
  const { countries_name } = params;

  // Check if countries_name is provided
  if (!countries_name) {
    return <div>Error: No country name provided!</div>;
  }

  // Find the country based on the provided name
  const country = countries.find(
    (c) => c.name.toLowerCase() === countries_name.toLowerCase()
  );

  // Show 404 if the country doesn't exist
  if (!country) {
    return notFound();
  }

  return (
    <div style={{ color: 'lightgreen', padding: '20px', backgroundColor: '#FFFACD', borderRadius: '10px' }}>
      <h1>{country.name}</h1>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}