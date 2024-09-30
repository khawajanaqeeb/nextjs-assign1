import Link from 'next/link';
import { countries } from './data/countries';

export default function Home() {
  return (
    <div>
      <h1 style={{
                color: '#34980b', // Change text color to a nice blue
                fontSize: '20px', // Increase font size to 20px
                padding:10
              }}>Country List</h1>
      <ul style={{ listStyleType: 'none', padding: 10 }}> {/* Remove default list styles */}
        {countries.map((country) => (
          <li key={country.name} style={{ margin: '10px 0' }}> {/* Add margin between items */}
            <Link
              href={`/${country.name.toLowerCase()}`}
              style={{
                color: '#3498db', // Change text color to a nice blue
                fontSize: '20px', // Increase font size to 20px
                
              }}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}