'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg'>
      <div className='container mx-auto flex gap-10 flex-row justify-evenly items-end'>
        <div className='w-full mb-4 md:mb-0'>
          <label className='block text-sm font-medium mb-2 text-black'>
          Room Type
        </label>
          <div className='relative bg-white rounded-md p-2'>
            <select
              value={roomTypeFilter}
              placeholder={'Room Type'}
              onChange={handleRoomTypeChange}
              className='w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none'
            >
              <option value='All'>All</option>
              <option value='Basic'>Basic</option>
              <option value='Luxury'>Luxury</option>
              <option value='Suite'>Suite</option>
            </select>
          </div>
        </div>
        <div className='w-full mb-4 md:mb-0'>
          <label className='block text-sm font-medium mb-2 text-black'>
            Search
          </label>
          <div className={'bg-white rounded-md p-2'}>
          <input
            type='search'
            id='search'
            placeholder='Search Rooms'
            className='w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white'
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          </div>
        </div>

        <button
          className='btn-primary w-full'
          type='button'
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
