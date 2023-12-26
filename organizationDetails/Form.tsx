import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FormGroup } from "reactstrap";
import './form.css'
import axios from "axios";
interface FormData {
  organizationName: string;
  organizationType: string;
  email:string;
  websiteURL:string;
  privacyOfficerName:string
}

const OrganizationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    organizationType: "",
    email:'',
    websiteURL:'',
    privacyOfficerName:''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };
useEffect(()=>{
    const fetchInitialData=async () => {
        try{
          const orgId=''
            const response=await axios.get(`http://47.32.254.89:7000/api/org/getById/${orgId}`,)//pass organization id
            const data=await response.data;
            setFormData({
                organizationName: data.organizationName,
                organizationType: data.organizationType,
                email: data.email,
                websiteURL: data.websiteURL,
                privacyOfficerName: data.privacyOfficerName,
              });
            
            } catch (error) {
              console.error('Error fetching initial data:', error);
            }
          };
      
          
          fetchInitialData();
        }, []); 
        
    

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="label">
        <div className="container">
        <h1 className="mt-1">Details</h1>
        <hr></hr>
        <FormGroup>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label htmlFor="organizationName" className="label">Organization Name</label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              placeholder="OrganizationName"
            />
          </div>

          <div className="mt-2">
            <label htmlFor="organizationType" className="label">Organization Type</label>
            <input
              type="text"
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleInputChange}
              placeholder="OrganizationType"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="websiteURL" className="label">Website URL</label>
            <input
              type="text"
              id="websiteURL"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleInputChange}
              placeholder="Website URL"
            />
          </div>
         
          <div className="mt-2">
            <label htmlFor="websiteURL" className="label">HIPPA Privacy Officer Name</label>
            <input
              type="text"
              id="privacyOfficerName"
              name="privacyOfficerName"
              value={formData.privacyOfficerName}
              onChange={handleInputChange}
              placeholder="HIPPA Privacy Officer Name"
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-success" >Submit</button>
          </div>
          
        </form>
        </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;