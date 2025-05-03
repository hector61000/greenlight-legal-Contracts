
/**
 * Helper function to ensure all required contract data fields are present
 * This helps bridge the gap between optional fields in forms and required fields in components
 */
export const ensureRequiredContractData = (contractData: any) => {
  return {
    firstPartyName: contractData.firstPartyName || '',
    firstPartyNationality: contractData.firstPartyNationality || '',
    firstPartyAddress: contractData.firstPartyAddress || '',
    firstPartyID: contractData.firstPartyID || '',
    secondPartyName: contractData.secondPartyName || '',
    secondPartyNationality: contractData.secondPartyNationality || '',
    secondPartyAddress: contractData.secondPartyAddress || '',
    secondPartyID: contractData.secondPartyID || '',
    contractDate: contractData.contractDate || '',
    additionalTerms: contractData.additionalTerms
  };
};
