import { FaEnvelope, FaPhone, FaIdBadge  } from 'react-icons/fa'

import React from 'react'

export const ClientInfo = ({client}) => {
  return (
    <>
    <h5 className='mt-5'>Client Information</h5>
    <ul className="list-group col-md-4">
      <li className="list-group-item">
        <FaIdBadge className='mr-2' />{` ${client.name}`}
      </li>
      <li className="list-group-item">
        <FaEnvelope className='mr-2' />{` ${client.email}`}
      </li>
      <li className="list-group-item">
        <FaPhone className='mr-2' />{` ${client.phone}`}
      </li>
    </ul>
    </>
  )
}
