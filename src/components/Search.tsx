import React from 'react'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import tw from '@styles/common/Search.module.scss'
import { AppDispatch } from '@/redux/store'
import { setSearchValue } from '@/redux/slices/filterSlice'

const Search = React.memo(function Search() {
  const dispatch = useDispatch<AppDispatch>()
  const [value, setValue] = React.useState('')

  const [search, setSearch] = React.useState(false)

  const inputRef = React.useRef(null)

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 1500),
    []
  )

  const onClickClear = () => {
    setValue('')
    if (inputRef.current) (inputRef.current as HTMLInputElement).focus()
    updateSearchValue('')
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

    updateSearchValue(event.target.value)
  }
  return (
    <div className='searhHead flexCenter col-span-2 row-start-1 ss:col-span-1 ss:row-start-auto'>
      <div className={`${tw.searchBox} ${search ? tw.active : ''}`}>
        <div
          role='presentation'
          className={tw.searchIcon}
          onClick={() => setSearch((prev) => !prev)}
        />
        <div className={tw.inputContainer}>
          <input
            className={tw.searchInput}
            ref={inputRef}
            type='text'
            name=''
            placeholder='type to search'
            id='mySearch'
            value={value}
            onChange={onChangeInput}
          />
        </div>
        {value && (
          <span className={tw.xmark} role='presentation' onClick={onClickClear} />
        )}
      </div>
    </div>
  )
})
export default Search
