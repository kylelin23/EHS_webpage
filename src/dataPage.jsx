import './dataPage.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

function DataPage() {

  // Initializing Variables:

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [selectedMeasure, setSelectedMeasure] = useState(null);
  const [selectedDevelopmentalLevel, setSelectedDevelopmentalLevel] = useState(null);
  const [selectedTeachingStrats, setSelectedTeachingStrats] = useState(null);
  const [selectedResources, setSelectedResources] = useState(null);


  // Data For Dropdowns:
  const measures = [
    // Approaches to Learning
    { value: 'ATL-REG1', label: 'ATL-REG 1: Attention Maintenance' },
    { value: 'ATL-REG2', label: 'ATL-REG 2: Self-Comforting' },
    { value: 'ATL-REG3', label: 'ATL-REG 3: Imitation' },
    { value: 'ATL-REG4', label: 'ATL-REG 4: Curiosity and Initiative in Learning' },
    { value: 'ATL-REG5', label: 'ATL-REG 5: Self-Control of Feelings and Behavior' },

    // Social and Emotional Development
    { value: 'SED1', label: 'SED 1: Identity of Self in Relation to Others' },
    { value: 'SED2', label: 'SED 2: Social and Emotional Understanding' },
    { value: 'SED3', label: 'SED 3: Relationships and Social Interactions with Familiar Adults' },
    { value: 'SED4', label: 'SED 4: Relationships and Social Interactions with Peers' },
    { value: 'SED5', label: 'SED 5: Symbolic and Sociodramatic Play' },

    // Language and Literacy
    { value: 'LLD1', label: 'LLD1: Understanding of Language (Receptive)' },
    { value: 'LLD2', label: 'LLD2: Responsiveness to Language' },
    { value: 'LLD3', label: 'LLD 3: Communication and Use of Language (Expressive)' },
    { value: 'LLD4', label: 'LLD 4: Reciprocal Communication and Conversation' },
    { value: 'LLD5', label: 'LLD 5: Interest in Literacy' },

    // Cognition
    { value: 'COG1', label: 'COG 1: Spatial Relationships' },
    { value: 'COG2', label: 'COG 2: Classification' },
    { value: 'COG3', label: 'COG 3: Number Sense of Quantity' },
    { value: 'COG8', label: 'COG 8: Cause and Effect' },
    { value: 'COG9', label: 'COG 9: Inquiry Through Observation and Investigation' },
    { value: 'COG11', label: 'COG 11: Knowledge of the Natural World' },

    // Perceptual, Motor, and Physical Development
    { value: 'PD-HLTH1', label: 'PD-HLTH 1: Perceptual-Motor Skills and Movement Concepts' },
    { value: 'PD-HLTH2', label: 'PD-HLTH 2: Gross Locomotor Movement Skills' },
    { value: 'PD-HLTH3', label: 'PD-HLTH 3: Gross Motor Manipulative Skills' },
    { value: 'PD-HLTH4', label: 'PD-HLTH 4: Fine Motor Skills' },
    { value: 'PD-HLTH5', label: 'PD-HLTH 5: Safety' },
    { value: 'PD-HLTH6', label: 'PD-HLTH 6: Personal Care Routines: Hygiene' },
    { value: 'PD-HLTH7', label: 'PD-HLTH 7: Personal Care Routines: Feeding' },
    { value: 'PD-HLTH8', label: 'PD-HLTH 8: Personal Care Routines: Dressing' },
  ];

  const developmentalLevels = [
    {value: 'respondingEarlier', label: 'Responding Earlier', isImportant: true},
    {value: 'respondingLater', label: 'Responding Later', isImportant: false},
    {value: 'exploringEarlier', label: 'Exploring Earlier', isImportant: false},
    {value: 'exploringMiddle', label: 'Exploring Middle', isImportant: false},
    {value: 'exploringLater', label: 'Exploring Later', isImportant: false},
    {value: 'buildingEarlier', label: 'Building Earlier', isImportant: false},
  ];

  const teachingStrats = [
    { value: 'plannedLearning', label: 'Planned Learning Activity' },
    { value: 'interactions', label: 'Interactions/Teaching Strategies' },
    { value: 'learningEnvironment', label: 'Learning Environment and Materials' },
    { value: 'familyEngagement', label: 'Family Engagement' },
    { value: 'professionalGrowth', label: 'Professional Growth and Development' },
  ];

  const resources = [
    { value: 'frogStreet', label: 'Frog Street' },
    { value: 'learningGenieFamilyEngagement', label: 'Learning Genie Family Engagement' },
    { value: 'asqActivities', label: 'ASQ Activities' },
    { value: 'itersMaterials', label: 'ITERS Materials' },
  ];

  // Functions:
  const navigateBack = () => {
    navigate("/");
  }

  // Styling:
  const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.data.isImportant ? 'red' : 'black', // red if isImportant is true
    backgroundColor: state.isSelected ? '#ddd' : 'white',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.data.isImportant ? 'red' : 'black', // selected value color
  }),
};

  // Grab data from sampleData.csv
  useEffect(() => {
      fetch('sampleData.csv')
        .then(response => response.text())
        .then(text => {
          const result = Papa.parse(text, { header: true }) // Put parsed data in result
          setData(result.data) // data = result
        })
    }, [])

    // How to get parsed data: data[index][category]
    // Ex: data[0]["DRDP Measure"]


    // Testing:


  return (
  <div className="container">
    <div className="header">
      <h1>Early Head Start's "DRDP Tool"</h1>
    </div>



      <div className="dropdowns">
        <Select
          defaultValue = {selectedMeasure}
          onChange={(selected) => setSelectedMeasure(selected)}
          placeholder="Select DRDP Measure"
          options = {measures}
        />
        <Select
          defaultValue = {selectedDevelopmentalLevel}
          onChange={(selected) => setSelectedDevelopmentalLevel(selected)}
          placeholder="Select Developmental Level"
          options = {developmentalLevels}
          isMulti
          styles = {customStyles}
        />
        <Select
          defaultValue = {selectedTeachingStrats}
          onChange={(selected) => setSelectedTeachingStrats(selected)}
          placeholder="Select Teaching Strategy"
          options = {teachingStrats}
          isMulti
        />
        <Select
          defaultValue = {selectedResources}
          onChange={(selected) => setSelectedResources(selected)}
          placeholder="Select Resources"
          options = {resources}
        />
      </div>
      <button onClick = {navigateBack}>Back</button>
    </div>

);
}

export default DataPage

