'use client';

import { useState } from 'react';
import './ContractForm.css';

interface ContractData {
  tenantName: string;
  startDate: string;
  rentalAmount: number;
  guarantorName: string;
  guarantorAddress: string;
  propertyAddress: string;
  roomNumber: string;
  depositAmount: number;
}

interface ContractFormProps {
  onSubmit: (data: ContractData) => void;
  initialData: ContractData | null;
}

export function ContractForm({ onSubmit, initialData }: ContractFormProps) {
  const [formData, setFormData] = useState<ContractData>({
    tenantName: initialData?.tenantName || '',
    startDate: initialData?.startDate || '',
    rentalAmount: initialData?.rentalAmount || 0,
    guarantorName: initialData?.guarantorName || '',
    guarantorAddress: initialData?.guarantorAddress || '',
    propertyAddress: initialData?.propertyAddress || '',
    roomNumber: initialData?.roomNumber || '',
    depositAmount: initialData?.depositAmount || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contract-form">
      <h1>Tenancy Contract Details</h1>
      
      <div>
        <div className="form-group">
          <label htmlFor="tenantName">
            Tenant&apos;s Full Name
          </label>
          <input
            type="text"
            id="tenantName"
            name="tenantName"
            value={formData.tenantName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rentalAmount">
            Rental Amount (£)
          </label>
          <input
            type="number"
            id="rentalAmount"
            name="rentalAmount"
            value={formData.rentalAmount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="guarantorName">
            Guarantor&apos;s Full Name
          </label>
          <input
            type="text"
            id="guarantorName"
            name="guarantorName"
            value={formData.guarantorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guarantorAddress">
            Guarantor&apos;s Address
          </label>
          <input
            type="text"
            id="guarantorAddress"
            name="guarantorAddress"
            value={formData.guarantorAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyAddress">
            Property Address
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomNumber">
            Room Number
          </label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="depositAmount">
            Deposit Amount (£)
          </label>
          <input
            type="number"
            id="depositAmount"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-button"
          >
            Generate Contract
          </button>
        </div>
      </div>
    </form>
  );
} 