import React from 'react'
import SearchField from 'components/SearchField'

export default function CamerasSearch() {
  return (
    <SearchField
      style={{
        width: '100%',
        height: 'fit-content',
      }}
      placeholder="Поиск"
    />
  )
}
