import React, { useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { SearchContext } from '@pages/Home'

const SearchBox = styled.div`
  ${tw`
  bg-white
  w-[60px]
  h-[60px]
  rounded-full
  shadow
  shadow-amber-50
  relative
  overflow-hidden
`}
  transition:0.5s;
  &.active {
    width: 360px;
  }
`
const SearchIcon = styled.div`
  ${tw`
  absolute
  top-0
  left-0
  w-[60px]
  h-[60px]
  bg-white
  rounded-full
  grid
  place-items-center
  z-[999]
  cursor-pointer
`}
  &::before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border: 3px solid #ef6043;
    border-radius: 50%;
    transform: translate(-2px, -2px);
  }
  &::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 10px;
    background: #ef6043;
    transform: translate(6px, 6px) rotate(-45deg);
  }
`
const InputContainer = styled.div`
  ${tw`
  relative left-[3.75rem] grid h-[3.75rem] w-[16rem] place-items-center
`}
`
const SearchInput = styled.input`
  ${tw`
  absolute
  top-0
  left-0
  w-full
  h-full
  border-0
  outline-0
  text-black/[.60]
  font-poppins
  text-lg
  py-2.5  
`}
  background-size: cover;
`
const Xmark = styled.span`
  ${tw`
  absolute
  top-[50%]
  right-4
  h-4
  w-4
  cursor-pointer
  grid
  place-self-center
  translate-y-[-50%]
  
  `}
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(-45deg);
  }
  &:hover::after {
    background: #000000;
  }
  &:hover::before {
    background: #000000;
  }
`

// const Search = ({ searchValue, setSearchValue }: HeaderProps) => {
const Search = () => {
  const [search, setSearch] = React.useState(false)
  // * 4 в том месте где нужно применить контекст используем хук const value = useContext(SearchContext)
  const searchData = useContext(SearchContext)
  if (searchData && 'setSearchValue' in searchData) {
    const { searchValue, setSearchValue } = searchData
    return (
      <div className='flexCenter'>
        <SearchBox className={search ? 'active' : ''}>
          <SearchIcon onClick={() => setSearch((prev) => !prev)} />
          <InputContainer>
            <SearchInput
              type='text'
              name=''
              placeholder='type to search'
              id='mySearch'
              value={searchData?.searchValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchValue(event.target.value)
              }}
            />
          </InputContainer>
          {searchValue && <Xmark onClick={() => setSearchValue('')} />}
        </SearchBox>
      </div>
    )
  }
  return <p>Unknown Error</p>
}
export default Search
