import React from 'react'
import { CountIncrement } from './components/CountIncrement'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App(){
   return (
      <>
         <RepositoryList />
         <CountIncrement/>
      </>
   )
}