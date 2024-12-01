import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import SearchBar from './components/SearchBar'
import { useDebounce } from './hooks/useDebounce';
import useFetch from './hooks/useFetch';
import { ProductCardProps } from './components/ProductCard';
import Dropdown from './components/ui/DropDown';
import logo from './assets/Logo.svg'

export enum SortOption {
  PRICE_LOW_TO_HIGH = "Price: Low to High",
  PRICE_HIGH_TO_LOW = "Price: High to Low",
  RATING = "Rating",
}

function App() {

  const [query, setQuery] = useState<string>("");
  const [sortOption, setSortOptions] = useState<string>("");
  const debouncedQuery = useDebounce(query, 500);
  const { data: products, loading, error } = useFetch('/products');

  if (error) {
    return <div className='text-primary'>Error fetching the data</div>
  }

  if (!products || loading) {
    return <div className='text-primary'>Loading...</div>
  }

  const filteredProducts = (products as Array<ProductCardProps>).filter((product) =>
    product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const sortedFilteredProducts = [...filteredProducts];
  switch (sortOption) {
    case SortOption.PRICE_LOW_TO_HIGH:
      sortedFilteredProducts.sort((a, b) => a.price - b.price);
      break;
    case SortOption.PRICE_HIGH_TO_LOW:
      sortedFilteredProducts.sort((a, b) => b.price - a.price);
      break;
    case SortOption.RATING:
      sortedFilteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    default:
      break;
  }

  // Handle search input change
  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleSort = (option: string) => {
    setSortOptions(option);
  }

  return (
    <>
      <header className='relative -mx-[calc(50vw-50%)] p-8 -mt-8 top-0 flex items-center gap-5 bg-gradient-to-b from-grape-dark via-grape to-grape-light'>
        <img src={logo} width={60} height={60}/>
        <SearchBar query={query} onSearch={handleSearch} />
      </header>
      <main className='mt-10'>
        <section className='flex w-full px-4 justify-between flex-col md:flex-row'>
          <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold text-primary mb-10'>
            Product Catalogue
          </h2>
          <div className='ml-auto'>
            <Dropdown
              options={[
                SortOption.PRICE_LOW_TO_HIGH,
                SortOption.PRICE_HIGH_TO_LOW,
                SortOption.RATING
              ]}
              onSelect={handleSort}
              placeholder="Sort by"
            />
          </div>
        </section>
        <Products products={sortedFilteredProducts} />
      </main>
    </>
  )
}

export default App
