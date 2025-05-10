'use client';

import { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tenancy Contract Details</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="tenantName" className="block text-sm font-medium text-gray-700">
            Tenant&apos;s Full Name
          </label>
          <input
            type="text"
            id="tenantName"
            name="tenantName"
            value={formData.tenantName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="rentalAmount" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="guarantorName" className="block text-sm font-medium text-gray-700">
            Guarantor&apos;s Full Name
          </label>
          <input
            type="text"
            id="guarantorName"
            name="guarantorName"
            value={formData.guarantorName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="guarantorAddress" className="block text-sm font-medium text-gray-700">
            Guarantor&apos;s Address
          </label>
          <input
            type="text"
            id="guarantorAddress"
            name="guarantorAddress"
            value={formData.guarantorAddress}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">
            Property Address
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">
            Room Number
          </label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div>
          <label htmlFor="depositAmount" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Generate Contract
          </button>
        </div>
      </div>
    </form>
  );
} 