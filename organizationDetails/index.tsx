import React from 'react'
import { Link } from 'react-router-dom'
import OrganizationForm from './Form'
const Organization= () => {
  return (
    <React.Fragment>
       <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div className='mt-1'>Organization Page</div>
        <Link to='/organization-form'><button className="btn btn-success mt-3" >Get Started</button>
</Link>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Organization