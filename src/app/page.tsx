'use client';

import { useState } from 'react';
import { ContractForm } from '@/components/ContractForm';
import { ContractGenerator } from '@/components/ContractGenerator';
import { usePDF } from 'react-to-pdf';

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

export default function Home() {
  const [contractData, setContractData] = useState<ContractData | null>(null);
  const { toPDF, targetRef } = usePDF({
    filename: contractData ? `tenancy-agreement-${contractData.tenantName}.pdf` : 'tenancy-agreement.pdf',
    page: { margin: 20 },
    
  });

  const handleFormSubmit = (data: ContractData) => {
    setContractData(data);
  };

  const handleEdit = () => {
    setContractData(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {contractData === null ? (
          <ContractForm onSubmit={handleFormSubmit} initialData={contractData} />
        ) : (
          <div className="space-y-6">
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Edit Details
              </button>
              <button
                onClick={() => toPDF()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </button>
            </div>
            <div ref={targetRef}>
              <ContractGenerator data={contractData} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
