import './dataPage.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function DataPage() {

  // Initializing Variables:

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [selectedDevelopmentalLevel, setSelectedDevelopmentalLevel] = useState([]);
  const [selectedTeachingStrats, setSelectedTeachingStrats] = useState([]);
  const [selectedResources, setSelectedResources] = useState('');

  const [developmentalLevelOpen, setDevelopmentalLevelOpen] = useState(false);
  const [teachingStratOpen, setTeachingStratOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  const [ATLOpen, setATLOpen] = useState(false);
  const [SEDOpen, setSEDOpen] = useState(false);
  const [LLDOpen, setLLDOpen] = useState(false);
  const [COGOpen, setCOGOpen] = useState(false);
  const [PHYOpen, setPHYOpen] = useState(false);

  // DATA

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
      "LLD 1: Understanding of Language (Receptive)",
      "LLD 2: Responsiveness to Language",
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

  // Functions:
  const navigateBack = () => {
    navigate("/");
  }

  const atlDropDown = () => {
    setATLOpen(!ATLOpen);
    setSEDOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);
  }

  const sedDropDown = () => {
    setSEDOpen(!SEDOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);
  }

  const lldDropDown = () => {
    setLLDOpen(!LLDOpen);
    setATLOpen(false);
    setSEDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);
  }

  const cogDropDown = () => {
    setCOGOpen(!COGOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setSEDOpen(false);
    setPHYOpen(false);
  }

  const phyDropDown = () => {
    setPHYOpen(!PHYOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setCOGOpen(false);
  }

  const handleDevelopmentalLevelButton = (level) => {
    if (!(selectedDevelopmentalLevel.includes(level))){
      if (selectedDevelopmentalLevel.length >= 2){ // If there are already two Developmental Levels
        selectedDevelopmentalLevel.splice(0, 1);
      }
      setSelectedDevelopmentalLevel([...selectedDevelopmentalLevel, level]);
    }
    else{
      setSelectedDevelopmentalLevel(selectedDevelopmentalLevel.filter(item => item !== level));
    }
    setTeachingStratOpen(true);
  }

  const handleTeachingStratButton = (teachingStrat) => {
    if (!(selectedTeachingStrats.includes(teachingStrat))){
      if (selectedTeachingStrats.length >= 2){
        selectedTeachingStrats.splice(0, 1);
      }
      setSelectedTeachingStrats([...selectedTeachingStrats, teachingStrat]);
    }
    setResourceOpen(true);
  }


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




  return (
  <div className="container">
    <div className="header">
      <h1>Early Head Start's "DRDP Tool"</h1>
    </div>


    <div className = "body">
{/*
      <div className = "testingText">Measure: {selectedMeasure} </div>
      <div className = "testingText">Developmental Level: {selectedDevelopmentalLevel} </div>
      <div className = "testingText">Teaching Strategy: {selectedTeachingStrats} </div>
      <div className = "testingText">Resource: {selectedResources} </div> */}

      <div style = {{display: "flex", justifyContent: 'center'}}>
        <div className = "bar">
          DRDP Domains (Select One)
        </div>
      </div>

      <div className = "dropdown2">
        <div className="measureCategoryContainer">
          <button onClick={atlDropDown} className = "measureCategory" style = {{backgroundColor: '#3f80d4'}}>
                Approaches to Learning {ATLOpen ? "▲" : "▼"}
              </button>

              <button onClick={sedDropDown} className = "measureCategory" style = {{backgroundColor: '#a1135f'}}>
                Social and Emotional Development {SEDOpen ? "▲" : "▼"}
              </button>

              <button onClick={lldDropDown} className = "measureCategory" style = {{backgroundColor: '#fcba03'}}>
                Language and Literacy {LLDOpen ? "▲" : "▼"}
              </button>

              <button onClick={cogDropDown} className = "measureCategory" style = {{backgroundColor: '#239947'}}>
                Cognition {COGOpen ? "▲" : "▼"}
              </button>

              <button onClick={phyDropDown} className = "measureCategory" style = {{backgroundColor: '#e38120'}}>
                Perceptual, Motor, and Physical Development {PHYOpen ? "▲" : "▼"}
              </button>
        </div>
        <div className = "measures">
          {ATLOpen &&
                measures["Approaches to Learning"].map((m) => (
                  <button key={m} className = "measureStyle"
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                )}
                  >{m}</button>
                ))}
          {SEDOpen &&
                measures["Social and Emotional Development"].map((m) => (
                  <button key={m} className = "measureStyle"
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                  )}
                  >{m}</button>
                ))}
          {LLDOpen &&
                measures["Language and Literacy"].map((m) => (
                  <button key={m} className = "measureStyle"
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                  )}
                  >{m}</button>
                ))}
          {COGOpen &&
                measures["Cognition"].map((m) => (
                <button key={m} className = "measureStyle"
                onClick = {() => (
                  setSelectedMeasure(m),
                  setDevelopmentalLevelOpen(true)
                )}
                >{m}</button>
                ))}
          {PHYOpen &&
                measures["Perceptual, Motor, and Physical Development"].map((m) => (
                  <button key={m} className = "measureStyle"
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                )}
                  >{m}</button>
                ))}
        </div>

        <div style = {{display: 'flex', justifyContent: 'center'}}>

        {developmentalLevelOpen &&
        <div className="developmentalLevelOuterContainer">
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style = {{fontWeight: 'bold', fontSize: 30}}>
              DRDP Developmental Levels
            </div>
            <div style = {{color: 'gray'}}>
              (Select Multiple)
            </div>
          </div>

          <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <div className = "developmentalLevelContainer">
              {
                developmentalLevels.map((level, index) => (
                <button className = {`textContainer
                  ${selectedDevelopmentalLevel.includes(level) ? "selected" : ""}
                  ${level == 'Responding Earlier' ? "respondingEarlier" : ""}
                  ${level == 'Responding Later' ? "respondingLater" : ""}
                  ${level == 'Exploring Earlier' ? "exploringEarlier" : ""}
                  ${level == 'Exploring Middle' ? "exploringMiddle" : ""}
                  ${level == 'Exploring Later' ? "exploringLater" : ""}
                  ${level == 'Building Earlier' ? "buildingEarlier" : ""}
                  }`}
                key={index}
                onClick={() => handleDevelopmentalLevelButton(level)}
                >
                  <div className = {`text ${selectedDevelopmentalLevel.includes(level) ? "selected" : ""}`}>
                    {level}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
        }
        </div>

        <div style = {{display: 'flex', justifyContent: 'center'}}>
          {teachingStratOpen &&

          <div className="teachingStratOuterContainer">

            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style = {{fontWeight: 'bold', fontSize: 30}}>
              Teaching Practices
            </div>
            <div style = {{color: 'gray'}}>
              (Select Multiple)
            </div>
          </div>
            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <div className = "developmentalLevelContainer">
                {
                  teachingStrats.map((teachingStrat, index) => (
                  <button className = {`textContainer
                    ${selectedTeachingStrats.includes(teachingStrat) ? "selected" : ""}
                    ${teachingStrat == 'Planned Learning Activity' ? "plannedLearningActivity" : ""}
                    ${teachingStrat == 'Interactions/Teaching Strategies' ? "interactions" : ""}
                    ${teachingStrat == 'Learning Environment and Materials' ? "learningEnv" : ""}
                    ${teachingStrat == 'Family Engagement' ? "fam" : ""}
                    ${teachingStrat == 'Professional Growth and Development' ? "proGrowth" : ""}

                    `}
                  key={index}
                  onClick={() => handleTeachingStratButton(teachingStrat)}
                  >
                    <div className = {`text ${selectedTeachingStrats.includes(teachingStrat) ? "selected" : ""}`}>
                      {teachingStrat}
                    </div>
                  </button>
                ))}
              </div>
              </div>
              </div>

            }
        </div>
            <div style = {{display: 'flex', justifyContent: 'center'}}>
              {teachingStratOpen &&
              <div className="resourcesOuterContainer">

                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style = {{fontWeight: 'bold', fontSize: 30}}>
                  Resources
                </div>
              </div>
              <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

              <div className="dropdownContainer2">
                <div className = "developmentalLevelContainer">
                  {
                    resources.map((resource, index) => (
                    <button className = {`textContainer
                      ${selectedResources.includes(resource) ? "selected" : ""}
                      ${resource == 'Frog Street' ? "frogStreet" : ""}
                      ${resource == 'ITERS-3 Materials' ? "iters" : ""}
                      ${resource == 'ASQ Activities' ? "asq" : ""}
                      ${resource == 'HSELOF' ? "hselof" : ""}
                      ${resource == 'Center on the Social and Emotional Foundations for Early Learning grantee of HS, CCB' ? "center" : ""}
                      ${resource == 'National Center for Pyramid Model Innovations' ? "pyramid" : ""}
                      ${resource == 'Attendanceworks.org' ? "attendance" : ""}
                      `}
                    key={index}
                    onClick={() => setSelectedResources(resource)}
                    >
                        <div className = {`text
                          ${selectedResources.includes(resource) ? "selected" : ""}`}>
                          {resource}
                        </div>
                    </button>
                  ))}
                </div>
              </div>
              </div>
              </div>
              }
            </div>



      </div>


      {teachingStratOpen &&

        <div className = "data">
          <div style = {{display: "flex", justifyContent: 'center'}}>
            <div className = "bar2">
              Planned Learning Activities
            </div>
          </div>
          {filteredData.map((teachingPractice, index) => (
            <div className = "teachingStrategy" key = {index}>
              <a href={teachingPractice["URL"]} className = "dataLink">
                <u>{teachingPractice["** FS Domain (should be Cognitive, Language, Physical or Social Emotional)"]} ({teachingPractice["Activity Title"]}): {teachingPractice["Age Range (months) should be the numbers only, e.g., 6-12)"]} months</u>
              </a>
              <div className = "dataText">
                {teachingPractice["Activity Description"]}
              </div>
            </div>
          ))}
        </div>

      }



        <div className = "feedbackContainer">
          <div style = {{color: 'gray'}}>If you have questions or feedback please fill out this Service Request Form</div>
        </div>
    </div>
    </div>

);
}

export default DataPage

