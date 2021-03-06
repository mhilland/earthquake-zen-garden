import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a.properties[sortConfig.key] < b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a.properties[sortConfig.key] > b.properties[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

const Features = ({ features }) => {
  const { items, requestSort } = useSortableData(features)

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="my-6">USGS All Earthquakes, Past Hour</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>
              <span class="cursor-pointer" onClick={() => requestSort('title')}>Title</span>
            </th>
            <th>
              <span class="cursor-pointer" onClick={() => requestSort('mag')}>Magnitude</span>
            </th>
            <th>
              <span class="cursor-pointer" onClick={() => requestSort('time')}>Time</span>
            </th>
          </tr>
        </thead>
        <tbody>
        {items.map(feature =>
          <tr key={feature.id}>
            <td className="whitespace-nowrap pr-6 align-top">
              <Link to={`/feature/${feature.id}`}>
                {feature.properties.title}
              </Link>
            </td>
            <td className="text-center whitespace-nowrap px-6 align-top">{feature.properties.mag}</td>
            <td className="text-center whitespace-nowrap px-6 align-top">{format(feature.properties.time, 'MMM d, yyyy, HH:mm a')}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default Features