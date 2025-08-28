import './App.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'
import Select from 'react-select';

function App() {

  // Initializing Variables:
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
    {value: 'respondingEarlier', label: 'Responding Earlier'},
    {value: 'respondingLater', label: 'Responding Later'},
    {value: 'exploringEarlier', label: 'Exploring Earlier'},
    {value: 'exploringMiddle', label: 'Exploring Middle'},
    {value: 'exploringLater', label: 'Exploring Later'},
    {value: 'buildingEarlier', label: 'Building Earlier'},
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
          isMulit
        />
        <Select
          defaultValue = {selectedDevelopmentalLevel}
          onChange={(selected) => setSelectedDevelopmentalLevel(selected)}
          placeholder="Select Developmental Level"
          options = {developmentalLevels}
          isMulit
        />
        <Select
          defaultValue = {selectedTeachingStrats}
          onChange={(selected) => setSelectedTeachingStrats(selected)}
          placeholder="Select Teaching Strategy"
          options = {teachingStrats}
          isMulit
        />
        <Select
          defaultValue = {selectedResources}
          onChange={(selected) => setSelectedResources(selected)}
          placeholder="Select Resources"
          options = {resources}
          isMulit
        />
      </div>

      <div className="blob-outer">
          <div className="blob-card">
            <svg className="blob-svg" viewBox="0 0 900 700" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="#0bb6af" />
                  <stop offset="100%" stopColor="#089e97" />
                </linearGradient>
              </defs>
              {/* Path shaped to look like your Canva blob (top bump + bottom tail) */}
              <path fill="url(#blobGrad)" d="
                M140,330
                C 60,300 20,240 30,190
                C 45,120 130,90 230,120
                C 320,146 360,70 445,45
                C 520,24 590,60 640,115
                C 700,180 790,170 850,225
                C 900,270 900,350 860,405
                C 825,452 790,480 770,520
                C 740,580 700,640 610,660
                C 520,680 450,640 410,600
                C 365,555 330,545 270,560
                C 210,575 150,550 130,500
                C 110,450 120,380 140,330 Z" />
            </svg>

            <div className="blob-text">
              <strong>Welcome teachers!</strong><br />
              Here is a tool you can use to find the desired teaching strategies
              based on a child's developmental profile.
            </div>
          </div>
        </div>
        <div className="blob-inner">
          <p>
            <strong>Welcome teachers!</strong><br />
            Here is a tool you can use to find the desired teaching strategies
            based on a child's developmental profile.
          </p>
        </div>
      </div>

);
}

export default App

