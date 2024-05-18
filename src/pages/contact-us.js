import React from "react";
import Layout from "./layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Form Submitted Successfully!');
    reset();
  }

  return (
    <Layout pageTitle="Contact Us">
      <div className="container">
        <div className="contact-us-section">
          <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                  <div className="col-12">
                      <div className="form-group">
                          <label htmlFor="name">Name<span className="text-danger">*</span></label>
                          <input type="text" name="name" className="form-control custom-form-control" id="name" placeholder="Name" 
                          {...register("name", {
                            required: "Please Enter Name",
                            setValueAs: value => value.trim()
                          })}
                          />
                          {errors.name && <span className="invalid-text">{errors.name?.message}</span>}
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="phn_no">Mobile Number<span className="text-danger">*</span></label>
                                  <input type="text" className="form-control custom-form-control" name="mobile_number" placeholder="Mobile Number" minLength="10" maxLength="10" 
                                  {...register("mobile_number", {
                                    required: "Please Enter Mobile Number",
                                    pattern : {
                                      value: /^[6-9]\d{9}$/
                                    },
                                    setValueAs: value => parseInt(value)
                                  })}/>
                                  {errors.mobile_number && <span className="invalid-text">{errors.mobile_number?.message}</span>}
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="email">Email Address<span className="text-danger">*</span></label>
                                  <input type="text" className="form-control custom-form-control" name="email_address" id="email_address" placeholder="Email Address"
                                  {...register("email_address", {
                                    required: "Please Enter Email Address",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Please Enter Valid Email Address"
                                    }
                                  })}/>
                                  {errors.email_address && <span className="invalid-text">{errors.email_address?.message}</span>}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      <div className="form-group mb-0">
                          <label htmlFor="your-message">Message</label>
                          <textarea className="form-control" name="message" placeholder="Message" rows="3"
                          {...register("message")}></textarea>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="py-3">
                          <button type="submit" className="btn btn-contact text-white submit-button">Submit</button>
                      </div>
                  </div>
              </div>
              </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}