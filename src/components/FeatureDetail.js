import React from 'react'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import Data from '../data'

const FeatureDetail = () => {
  const { data } = Data
  const { id } = useParams()
  const feature = data.features.find(feature => feature.id === id)
  const { title, mag, time, status, tsunami, type } = feature.properties

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="my-6">USGS All Earthquakes, Past Hour</h2>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Title</td>
            <td className="text-gray-dark">{title}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Magnitude</td>
            <td className="text-gray-dark">{mag}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Time</td>
            <td className="text-gray-dark">{format(time, 'MMM d, yyyy, HH:mm a')}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Status</td>
            <td className="text-gray-dark">{status}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Tsunami</td>
            <td className="text-gray-dark">{tsunami}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap pr-6 align-top">Type</td>
            <td className="text-gray-dark">{type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FeatureDetail