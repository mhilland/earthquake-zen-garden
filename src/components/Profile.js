import React from 'react'
import Data from '../data'

const Profile = () => {
  const { profile } = Data
  const { firstName, lastName, avatarImage, phone, email, bio } = profile

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="my-6">Profile</h2>
      <div className="flex">
        <div className="max-w-xs pr-6">
          <img src={avatarImage} />
        </div>
        <table className="table-auto max-w-xs">
          <tbody>
            <tr>
              <td className="whitespace-nowrap pr-6 align-top">First name</td>
              <td className="text-gray-dark">{firstName}</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pr-6 align-top">Last name</td>
              <td className="text-gray-dark">{lastName}</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pr-6 align-top">Phone</td>
              <td className="text-gray-dark">{phone}</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pr-6 align-top">Email</td>
              <td className="text-gray-dark">{email}</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap pr-6 align-top">Bio</td>
              <td className="text-gray-dark">{bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile