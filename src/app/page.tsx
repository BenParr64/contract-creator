'use client';

import { useState } from 'react';
import { ContractForm } from '@/components/ContractForm';
import { ContractGenerator } from '@/components/ContractGenerator';
import { usePDF } from 'react-to-pdf';
import './page.css';

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
    page: {
      format: 'a4',
      orientation: 'portrait',
      margin: 10,
    },
    method: 'open',
    resolution: 2, // Higher resolution for better quality
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
            <div className="action-buttons">
              <button
                onClick={handleEdit}
                className="action-button edit"
              >
                Edit Details
              </button>
              <button
                onClick={() => toPDF()}
                className="action-button download"
              >
                Download PDF
              </button>
            </div>
            <div ref={targetRef} className="pdf-container">
              <ContractGenerator data={contractData} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
