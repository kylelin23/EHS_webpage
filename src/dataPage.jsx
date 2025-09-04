import './dataPage.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

function DataPage() {

  // Initializing Variables:

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [selectedMeasure, setSelectedMeasure] = useState('COG 3: Number Sense of Quantity');
  const [selectedDevelopmentalLevel, setSelectedDevelopmentalLevel] = useState([]);
  const [selectedTeachingStrats, setSelectedTeachingStrats] = useState([]);
  const [selectedResources, setSelectedResources] = useState('Frog Street');

  const [developmentalLevelOpen, setDevelopmentalLevelOpen] = useState(false);
  const [teachingStratOpen, setTeachingStratOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  const [ATLOpen, setATLOpen] = useState(false);
  const [SEDOpen, setSEDOpen] = useState(false);
  const [LLDOpen, setLLDOpen] = useState(false);
  const [COGOpen, setCOGOpen] = useState(false);
  const [PHYOpen, setPHYOpen] = useState(false);


  // Data For Dropdowns:
  // const measures = [
  //   // Approaches to Learning
  //   { value: 'ATL-REG 1: Attention Maintenance', label: 'ATL-REG 1: Attention Maintenance' },
  //   { value: 'ATL-REG 2: Self-Comforting', label: 'ATL-REG 2: Self-Comforting' },
  //   { value: 'ATL-REG 3: Imitation', label: 'ATL-REG 3: Imitation' },
  //   { value: 'ATL-REG 4: Curiosity and Initiative in Learning', label: 'ATL-REG 4: Curiosity and Initiative in Learning' },
  //   { value: 'ATL-REG 5: Self-Control of Feelings and Behavior', label: 'ATL-REG 5: Self-Control of Feelings and Behavior' },

  //   // Social and Emotional Development
  //   { value: 'SED 1: Identity of Self in Relation to Others', label: 'SED 1: Identity of Self in Relation to Others' },
  //   { value: 'SED 2: Social and Emotional Understanding', label: 'SED 2: Social and Emotional Understanding' },
  //   { value: 'SED 3: Relationships and Social Interactions with Familiar Adults', label: 'SED 3: Relationships and Social Interactions with Familiar Adults' },
  //   { value: 'SED 4: Relationships and Social Interactions with Peers', label: 'SED 4: Relationships and Social Interactions with Peers' },
  //   { value: 'SED 5: Symbolic and Sociodramatic Play', label: 'SED 5: Symbolic and Sociodramatic Play' },

  //   // Language and Literacy
  //   { value: 'LLD 1: Understanding of Language (Receptive)', label: 'LLD1: Understanding of Language (Receptive)' },
  //   { value: 'LLD 2: Responsiveness to Language', label: 'LLD2: Responsiveness to Language' },
  //   { value: 'LLD 3: Communication and Use of Language (Expressive)', label: 'LLD 3: Communication and Use of Language (Expressive)' },
  //   { value: 'LLD 4: Reciprocal Communication and Conversation', label: 'LLD 4: Reciprocal Communication and Conversation' },
  //   { value: 'LLD 5: Interest in Literacy', label: 'LLD 5: Interest in Literacy' },

  //   // Cognition
  //   { value: 'COG 1: Spatial Relationships', label: 'COG 1: Spatial Relationships' },
  //   { value: 'COG 2: Classification', label: 'COG 2: Classification' },
  //   { value: 'COG 3: Number Sense of Quantity', label: 'COG 3: Number Sense of Quantity' },
  //   { value: 'COG 8: Cause and Effect', label: 'COG 8: Cause and Effect' },
  //   { value: 'COG 9: Inquiry Through Observation and Investigation', label: 'COG 9: Inquiry Through Observation and Investigation' },
  //   { value: 'COG 11: Knowledge of the Natural World', label: 'COG 11: Knowledge of the Natural World' },

  //   // Perceptual, Motor, and Physical Development
  //   { value: 'PD-HLTH 1: Perceptual-Motor Skills and Movement Concepts', label: 'PD-HLTH 1: Perceptual-Motor Skills and Movement Concepts' },
  //   { value: 'PD-HLTH 2: Gross Locomotor Movement Skills', label: 'PD-HLTH 2: Gross Locomotor Movement Skills' },
  //   { value: 'PD-HLTH 3: Gross Motor Manipulative Skills', label: 'PD-HLTH 3: Gross Motor Manipulative Skills' },
  //   { value: 'PD-HLTH 4: Fine Motor Skills', label: 'PD-HLTH 4: Fine Motor Skills' },
  //   { value: 'PD-HLTH 5: Safety', label: 'PD-HLTH 5: Safety' },
  //   { value: 'PD-HLTH 6: Personal Care Routines: Hygiene', label: 'PD-HLTH 6: Personal Care Routines: Hygiene' },
  //   { value: 'PD-HLTH 7: Personal Care Routines: Feeding', label: 'PD-HLTH 7: Personal Care Routines: Feeding' },
  //   { value: 'PD-HLTH 8: Personal Care Routines: Dressing', label: 'PD-HLTH 8: Personal Care Routines: Dressing' },
  // ];

  const measures = {
    "Approaches to Learning": [
      "ATL-REG 1: Attention Maintenance",
      "ATL-REG 2: Self-Comforting",
      "ATL-REG 3: Imitation",
      "ATL-REG 4: Curiosity and Initiative in Learning",
      "ATL-REG 5: Self-Control of Feelings and Behavior"
    ],
    "Social and Emotional Development": [
      "SED 1: Identity of Self in Relation to Others",
      "SED 2: Social and Emotional Understanding",
      "SED 3: Relationships and Social Interactions with Familiar Adults",
      "SED 4: Relationships and Social Interactions with Peers",
      "SED 5: Symbolic and Sociodramatic Play"
    ],
    "Language and Literacy": [
      "LLD1: Understanding of Language (Receptive)",
      "LLD2: Responsiveness to Language",
      "LLD 3: Communication and Use of Language (Expressive)",
      "LLD 4: Reciprocal Communication and Conversation",
      "LLD 5: Interest in Literacy"
    ],
    "Cognition": [
      "COG 1: Spatial Relationships",
      "COG 2: Classification",
      "COG 3: Number Sense of Quantity",
      "COG 8: Cause and Effect",
      "COG 9: Inquiry Through Observation and Investigation",
      "COG 11: Knowledge of the Natural World"
    ],
    "Perceptual, Motor, and Physical Development": [
      "PD-HLTH 1: Perceptual-Motor Skills and Movement Concepts",
      "PD-HLTH 2: Gross Locomotor Movement Skills",
      "PD-HLTH 3: Gross Motor Manipulative Skills",
      "PD-HLTH 4: Fine Motor Skills",
      "PD-HLTH 5: Safety",
      "PD-HLTH 6: Personal Care Routines: Hygiene",
      "PD-HLTH 7: Personal Care Routines: Feeding",
      "PD-HLTH 8: Personal Care Routines: Dressing"
    ]
  };

  const developmentalLevels = [
    "Responding Earlier",
    "Responding Later",
    "Exploring Earlier",
    "Exploring Middle",
    "Exploring Later",
    "Building Earlier"
  ];

  const teachingStrats = [
    "Planned Learning Activity",
    "Interactions/Teaching Strategies",
    "Learning Environment and Materials",
    "Family Engagement",
    "Professional Growth and Development"
  ];

  const resources = [
    "Frog Street",
    "ITERS-3 Materials",
    "ASQ Activities",
    "HSELOF",
    "Center on the Social and Emotional Foundations for Early Learning grantee of HS, CCB",
    "National Center for Pyramid Model Innovations",
    "Attendanceworks.org"
  ]

  // const developmentalLevels = [
  //   {value: 'Responding Earlier', label: 'Responding Earlier', isImportant: true},
  //   {value: 'Responding Later', label: 'Responding Later', isImportant: false},
  //   {value: 'Exploring Earlier', label: 'Exploring Earlier', isImportant: false},
  //   {value: 'Exploring Middle', label: 'Exploring Middle', isImportant: false},
  //   {value: 'Exploring Later', label: 'Exploring Later', isImportant: false},
  //   {value: 'Building Earlier', label: 'Building Earlier', isImportant: false},
  // ];

  // const teachingStrats = [
  //   { value: 'Planned Learning Activity', label: 'Planned Learning Activity' },
  //   { value: 'Interactions/Teaching Strategies', label: 'Interactions/Teaching Strategies' },
  //   { value: 'Learning Environment and Materials', label: 'Learning Environment and Materials' },
  //   { value: 'Family Engagement', label: 'Family Engagement' },
  //   { value: 'Professional Growth and Development', label: 'Professional Growth and Development' },
  // ];

  // const resources = [
  //   { value: 'Frog Street', label: 'Frog Street' }, // Add Frog Street Conscious Discipline
  //   { value: 'HSELOF', label: 'HSELOF' },
  //   { value: 'ASQ Activities', label: 'ASQ Activities'},
  //   { value: 'ITERS-3 Materials', label: 'ITERS Materials'},
  //   { value: 'National Center for Pyramid Model Innovations', label: 'Pyramid Model'},
  //   { value: 'Center on the Social and Emotional Foundations for Early Learning grantee of HS, CCB', label: 'CSEFEL' },
  //   { value: 'Attendanceworks.org', label: 'Attendanceworks.org' },
  // ];

  // Functions:
  const navigateBack = () => {
    navigate("/");
  }

  const atlDropDown = () => {
    setATLOpen(!ATLOpen);
  }

  const sedDropDown = () => {
    setSEDOpen(!SEDOpen);
  }

  const lldDropDown = () => {
    setLLDOpen(!LLDOpen);
  }

  const cogDropDown = () => {
    setCOGOpen(!COGOpen);
  }

  const phyDropDown = () => {
    setPHYOpen(!PHYOpen);
  }

  const developmentalLevelDropDown = () => {
    setDevelopmentalLevelOpen(!developmentalLevelOpen);
  }

  const teachingStratDropDown = () => {
    setTeachingStratOpen(!teachingStratOpen);
  }

  const resourceDropDown = () => {
    setResourceOpen(!resourceOpen);
  }

  const resourceButton = (resource) => {
    setSelectedResources(resource);
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
      fetch('realData.csv')
        .then(response => response.text())
        .then(text => {
          const result = Papa.parse(text, { header: true }) // Put parsed data in result
          setData(result.data) // data = result
        })
    }, [])

    // How to get parsed data: data[index][category]
    // Ex: data[0]["DRDP Measure"]

    let filteredData = [];

    if (
      selectedMeasure ||
      (selectedDevelopmentalLevel && selectedDevelopmentalLevel.length > 0) ||
      (selectedTeachingStrats && selectedTeachingStrats.length > 0) ||
      selectedResources
    ) {
      filteredData = selectedMeasure
        ? data.filter(row => row["DRDP Measure"] === selectedMeasure)
        : data;

      if (selectedDevelopmentalLevel && selectedDevelopmentalLevel.length > 0) {
        filteredData = filteredData.filter(row => {
          const levels = row["** DRDP Developmental Level "].split(',').map(l => l.trim());
          return selectedDevelopmentalLevel.some(level => levels.includes(level));
        });
      }

      if (selectedTeachingStrats && selectedTeachingStrats.length > 0) {
        filteredData = filteredData.filter(row => {
          const levels2 = row["** Teaching Practice Category"].split(',').map(l => l.trim());
          return selectedTeachingStrats.some(level2 => levels2.includes(level2));
        });
      }

      filteredData = selectedResources
        ? filteredData.filter(row => row["Resource Agency"] === selectedResources)
        : filteredData;
    }


    // Testing:


  return (
  <div className="container">
    <div className="header">
      <h1>Early Head Start's "DRDP Tool"</h1>
    </div>


    <div className = "body">
      <div className = "testingText">Measure: {selectedMeasure} </div>
      <div className = "testingText">Developmental Level: {selectedDevelopmentalLevel} </div>
      <div className = "testingText">Teaching Strategy: {selectedTeachingStrats} </div>
      <div className = "testingText">Resource: {selectedResources} </div>


      <div className = "dropdown2">
        <div className="measureCategoryContainer">
          <button onClick={atlDropDown} className = "measureCategory">
                Approaches to Learning {ATLOpen ? "▲" : "▼"}
              </button>

              <button onClick={sedDropDown} className = "measureCategory">
                Social and Emotional Development {SEDOpen ? "▲" : "▼"}
              </button>

              <button onClick={lldDropDown} className = "measureCategory">
                Language and Literacy {LLDOpen ? "▲" : "▼"}
              </button>

              <button onClick={cogDropDown} className = "measureCategory">
                Cognition {COGOpen ? "▲" : "▼"}
              </button>

              <button onClick={phyDropDown} className = "measureCategory">
                Perceptual, Motor, and Physical Development {PHYOpen ? "▲" : "▼"}
              </button>
        </div>
        <div className = "measures">
          {ATLOpen &&
                measures["Approaches to Learning"].map((m) => (
                  <button key={m} className = "measureStyle">{m}</button>
                ))}
          {SEDOpen &&
                measures["Social and Emotional Development"].map((m) => (
                  <button key={m} className = "measureStyle">{m}</button>
                ))}
          {LLDOpen &&
                measures["Language and Literacy"].map((m) => (
                  <button key={m} className = "measureStyle">{m}</button>
                ))}
          {COGOpen &&
                measures["Cognition"].map((m) => (
                <button key={m} className = "measureStyle">{m}</button>
                ))}
          {PHYOpen &&
                measures["Perceptual, Motor, and Physical Development"].map((m) => (
                  <button key={m} className = "measureStyle">{m}</button>
                ))}
        </div>

        <div className="dropdownContainer2">
          <button onClick={developmentalLevelDropDown} className="box">
            Developmental Level {developmentalLevelOpen ? "▲" : "▼"}
          </button>
          <div className = "developmentalLevelContainer">
            {developmentalLevelOpen &&
              developmentalLevels.map((level, index) => (
              <div className = "textContainer" key={index}>
                <div className = "text">
                  {level}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="dropdownContainer2">
          <button onClick={teachingStratDropDown} className="box">
            Teaching Strategy {teachingStratOpen ? "▲" : "▼"}
          </button>
          <div className = "developmentalLevelContainer">
            {teachingStratOpen &&
              teachingStrats.map((teachingStrat, index) => (
              <div className = "textContainer" key={index}>
                  <div className = "text">
                    {teachingStrat}
                  </div>
              </div>
            ))}
          </div>

        </div>

        <div className="dropdownContainer2">
          <button onClick={resourceDropDown} className="box">
            Resources {resourceOpen ? "▲" : "▼"}
          </button>
          <div className = "developmentalLevelContainer">
            {resourceOpen && resources.map((resource, index) => (
              <button className = "textContainer"
              key={index}
              onClick={() => setSelectedResources(resource)}
              >
                  <div className = "text">
                    {resource}
                  </div>
              </button>
            ))}
          </div>
        </div>
      </div>

{/*
      <div className="dropdowns">
        <Select
          value = {selectedMeasure}
          onChange={(selected) => setSelectedMeasure(selected)}
          placeholder="Select DRDP Measure"
          options = {measures}
          className = "dropdownText"
        />
        <Select
          value = {selectedDevelopmentalLevel}
          onChange={(selected) => setSelectedDevelopmentalLevel(selected)}
          placeholder="Select Developmental Level"
          options = {developmentalLevels}
          isMulti
          styles = {customStyles}
        />
        <Select
          value = {selectedTeachingStrats}
          onChange={(selected) => setSelectedTeachingStrats(selected)}
          placeholder="Select Teaching Strategy"
          options = {teachingStrats}
          isMulti
          className = "dropdownText"
        />
        <Select
          value = {selectedResources}
          onChange={(selected) => setSelectedResources(selected)}
          placeholder="Select Resources"
          options = {resources}
          className = "dropdownText"
        />
      </div> */}

      <div className = "data">
        {filteredData.map((teachingPractice, index) => (
          <div key = {index}>
            <a href={teachingPractice["URL"]} className = "dataLink">
              <u>{teachingPractice["** FS Domain (should be Cognitive, Language, Physical or Social Emotional)"]} ({teachingPractice["Activity Title"]}): {teachingPractice["Age Range (months) should be the numbers only, e.g., 6-12)"]} months</u>
            </a>
            <div className = "dataText">
              {teachingPractice["Activity Description"]}
            </div>
          </div>
        ))}
      </div>
        <div className = "backButtonContainer">
          <button onClick = {navigateBack}>Back</button>
        </div>
    </div>
    </div>

);
}

export default DataPage

