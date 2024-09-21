import React, { useState } from 'react';
import './Symptom-Matching.css'; // Import the CSS file

const conditionsData = [
  { 
    condition: 'Flu', 
    symptoms: ['fever', 'cough', 'sore throat', 'fatigue'],
    treatments: ['Rest', 'Stay hydrated', 'Over-the-counter medications']
  },
  { 
    condition: 'Cold', 
    symptoms: ['cough', 'runny nose', 'sore throat'],
    treatments: ['Rest', 'Stay hydrated', 'Decongestants']
  },
  { 
    condition: 'Allergy', 
    symptoms: ['sneezing', 'itchy eyes', 'runny nose'],
    treatments: ['Antihistamines', 'Avoid allergens', 'Nasal sprays']
  },
  { 
    condition: 'COVID-19', 
    symptoms: ['fever', 'cough', 'loss of taste or smell'],
    treatments: ['Rest', 'Hydration', 'Consult a doctor']
  },
  // Add more conditions and symptoms as needed
];

const SymptomMatching = () => {
  const [query, setQuery] = useState('');
  const [filteredConditions, setFilteredConditions] = useState(conditionsData);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    
    const filtered = conditionsData.filter(condition =>
      condition.symptoms.some(symptom => symptom.includes(searchTerm))
    );

    setFilteredConditions(filtered);
  };

  const toggleTreatment = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="symptom-matching-container">
      <h2 className="symptom-matching-title">Symptom Matching</h2>
      <input
        type="text"
        placeholder="Enter a symptom..."
        value={query}
        onChange={handleSearch}
        className="symptom-input"
      />
      <table className="symptom-table">
        <thead>
          <tr>
            <th>Condition</th>
            <th>Symptoms</th>
            <th>Treatments</th>
          </tr>
        </thead>
        <tbody>
          {filteredConditions.length > 0 ? (
            filteredConditions.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{item.condition}</td>
                  <td>{item.symptoms.join(', ')}</td>
                  <td>
                    <button 
                      onClick={() => toggleTreatment(index)} 
                      className="toggle-button"
                    >
                      {expandedIndex === index ? '▲' : '▼'}
                    </button>
                  </td>
                </tr>
                {expandedIndex === index && (
                  <tr className="treatment-row">
                    <td colSpan="3">
                      <ul className="treatment-list">
                        {item.treatments.map((treatment, idx) => (
                          <li key={idx}>{treatment}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="3">No conditions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SymptomMatching;
