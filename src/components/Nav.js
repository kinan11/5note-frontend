import React from 'react'
import Button from './Button'


const Nav = () => {
  return (
    <div className='buttons' >
        <h1>Nazwa Tablicy</h1>
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Konto'}
        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Grupy'}
        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Dodaj notatkę'}
        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Zmień tablicę'}
        />
    </div>
  )
}

export default Nav