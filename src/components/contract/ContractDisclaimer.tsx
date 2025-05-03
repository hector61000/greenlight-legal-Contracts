
import React from 'react';

const ContractDisclaimer: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-sm mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <i className="fas fa-exclamation-triangle text-yellow-400"></i>
        </div>
        <div className="mr-3">
          <p className="text-sm text-yellow-700">
            هذا نموذج استرشادي فقط. ننصح بمراجعة المحامي الخاص بك قبل استخدام أي عقد في معاملاتك القانونية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContractDisclaimer;
