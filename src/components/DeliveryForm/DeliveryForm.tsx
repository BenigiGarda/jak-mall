import React from "react";
import "./DeliveryForm.css";
function DeliveryForm() {
  return (
    <div className="delivery-details">
      <div className="delivery-details-header">
        <div className="content-header-title">
          <p>Delivery details</p>
          <div></div>
        </div>
        <form>
          <input type="checkbox" name="Dropshipper" />
          <label htmlFor="Dropshipper">Send as Dropshipper</label>
        </form>
      </div>
      <div className="delivery-details-form">
        <label className="form-wrapper">
          <input type="text" required />
          <label htmlFor="">Name</label>
        </label>
        <label className="form-wrapper">
          <input type="text" required />
          <label htmlFor="">Dropshipper Name</label>
        </label>
        <label className="form-wrapper">
          <input type="text" required />
          <label htmlFor="">Phone Number</label>
        </label>
        <label className="form-wrapper">
          <input type="text" required />
          <label htmlFor="">Dropshipper Phone Number</label>
        </label>
        <label className="form-wrapper-address">
          <textarea required />
          <label htmlFor="">Delivery Address</label>
        </label>
      </div>
    </div>
  );
}

export default DeliveryForm;
