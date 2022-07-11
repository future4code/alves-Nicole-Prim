import React from 'react'
import UseGetData from '../Hooks/UseGetData'

export function ListTripsPage () {
  const {dados, loading, erro} = UseGetData("/trips")

  const trips = dados?.trips

  return (
    <div>ListTripsPage</div>
  )
}

export default ListTripsPage