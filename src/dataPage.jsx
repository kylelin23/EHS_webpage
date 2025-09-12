import './dataPage.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function DataPage() {

  // Initializing Variables:

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [selectedMeasure, setSelectedMeasure] = useState('Not Selected');
  const [selectedDevelopmentalLevel, setSelectedDevelopmentalLevel] = useState('Not Selected');
  const [selectedTeachingStrats, setSelectedTeachingStrats] = useState(['Not Selected']);
  const [selectedResources, setSelectedResources] = useState('Not Selected');

  const [developmentalLevelOpen, setDevelopmentalLevelOpen] = useState(false);
  const [teachingStratOpen, setTeachingStratOpen] = useState(false);

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
  { value: "Planned Learning Activity", label: "Planned Learning Activity" },
  { value: "Interactions/Teaching Strategies", label: "Developmental Interactions and Strategies" },
  { value: "Learning Environment and Materials", label: "Learning Environment and Materials" },
  { value: "Family Engagement", label: "Family Engagement" },
  { value: "Professional Growth and Development", label: "Professional Growth and Development" }
];

  const resources = [
  {
    value: "Frog Street",
    label: "Frog Street"
  },
  {
    value: "ITERS-3 Materials",
    label: "ITERS"
  },
  {
    value: "ASQ Activities",
    label: "ASQ"
  },
  {
    value: "HSELOF",
    label: "HSELOF"
  },
  {
    value: "Center on the Social and Emotional Foundations for Early Learning grantee of HS, CCB",
    label: "CSEFEL"
  },
  {
    value: "National Center for Pyramid Model Innovations",
    label: "Pyramid Model"
  },
  {
    value: "Attendanceworks.org",
    label: "Attendance Works"
  }
];

  // Functions:
  const navigateBack = () => {
    navigate("/");
  }

  const atlDropDown = () => {
    setSelectedMeasure('Not Selected');
    setATLOpen(!ATLOpen);
    setSEDOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);

  }

  const sedDropDown = () => {
    setSelectedMeasure('Not Selected');
    setSEDOpen(!SEDOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);
  }

  const lldDropDown = () => {
    setSelectedMeasure('Not Selected');
    setLLDOpen(!LLDOpen);
    setATLOpen(false);
    setSEDOpen(false);
    setCOGOpen(false);
    setPHYOpen(false);
  }

  const cogDropDown = () => {
    setSelectedMeasure('Not Selected');
    setCOGOpen(!COGOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setSEDOpen(false);
    setPHYOpen(false);
  }

  const phyDropDown = () => {
    setSelectedMeasure('Not Selected');
    setPHYOpen(!PHYOpen);
    setATLOpen(false);
    setLLDOpen(false);
    setCOGOpen(false);
    setSEDOpen(false);
  }

  const handleDevelopmentalLevelButton = (level) => {
    if (selectedDevelopmentalLevel != (level)){
      // if (selectedDevelopmentalLevel.length >= 2){ // If there are already two Developmental Levels
      //   selectedDevelopmentalLevel.splice(0, 1);
      // }
      setSelectedDevelopmentalLevel(level);
    }
    else{
      setSelectedDevelopmentalLevel('Not Selected');
    }
    setTeachingStratOpen(true);
  }

  const handleTeachingStratButton = (teachingStrat) => {
    if (!(selectedTeachingStrats.includes(teachingStrat))){ // If you are clicking on a new teaching strat
      if (selectedTeachingStrats.length >= 2 || selectedTeachingStrats[0] == 'Not Selected'){
        selectedTeachingStrats.splice(0, 1);
      }
      setSelectedTeachingStrats([...selectedTeachingStrats, teachingStrat]);
    }
    else{
      if(selectedTeachingStrats.length == 1){
        setSelectedTeachingStrats(['Not Selected']);
      }
      else{
        setSelectedTeachingStrats(selectedTeachingStrats.filter(item => item !== teachingStrat));
      }
    }
  }

  const handleResourceButton = (resource) => {
    if (selectedResources != (resource)){
      // if (selectedDevelopmentalLevel.length >= 2){ // If there are already two Developmental Levels
      //   selectedDevelopmentalLevel.splice(0, 1);
      // }
      setSelectedResources(resource);
    }
    else{
      setSelectedResources('Not Selected');
    }
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

    let filteredData = data;


      if(selectedMeasure != "Not Selected"){
        filteredData = filteredData.filter(row => row["DRDP Measure"] === selectedMeasure);
      }

      if(selectedDevelopmentalLevel != "Not Selected"){
          filteredData = filteredData.filter(row => {
            const levels = row["** DRDP Developmental Level "].split(',').map(l => l.trim());
            return levels.includes(selectedDevelopmentalLevel);
          });
      }
      if (!(selectedTeachingStrats.includes("Not Selected"))){
          filteredData = filteredData.filter(row => {
            const levels2 = row["** Teaching Practice Category"].split(',').map(l => l.trim());
            return selectedTeachingStrats.some(strat => levels2.includes(strat));
          });
      }
      if(selectedResources != "Not Selected"){
        filteredData = selectedResources
          ? filteredData.filter(row => row["Resource Agency"] === selectedResources)
          : filteredData;
      }





  return (
  <div className="container">
    <header className="header header--compact" role="banner">
        <h1 className="header-title">Early Head Start Learning Library</h1>
        <p className="header-subtitle">Create data-driven lesson and action plans for children’s growth</p>
      </header>


    <div className = "body">
{/*
      <div className = "testingText">Measure: {selectedMeasure} </div>
      <div className = "testingText">Developmental Level: {selectedDevelopmentalLevel} </div>
      <div className = "testingText">Teaching Strategy: {selectedTeachingStrats} </div>
      <div className = "testingText">Resource: {selectedResources} </div> */}

      <div style = {{display: "flex", justifyContent: 'center'}}>
        <div className = "bar">
          <div className = "domainText">DRDP Domains</div>
          <div className = "domainSubText">Select One</div>
        </div>
      </div>

      <div className = "dropdown2">
        <div className="measureCategoryContainer">
          <button onClick={atlDropDown} className = {`measureCategory ${ATLOpen == true ? "selected" : ""}`} style = {{backgroundColor: '#3f80d4'}}>
                Approaches to Learning (ATL-REG) {ATLOpen ? "▲" : "▼"}
              </button>

              <button onClick={sedDropDown} className = {`measureCategory ${SEDOpen == true ? "selected" : ""}`} style = {{backgroundColor: '#a1135f'}}>
                Social and Emotional Development (SED) {SEDOpen ? "▲" : "▼"}
              </button>

              <button onClick={lldDropDown} className = {`measureCategory ${LLDOpen == true ? "selected" : ""}`} style = {{backgroundColor: '#fcba03'}}>
                Language and Literacy (LLD) {LLDOpen ? "▲" : "▼"}
              </button>

              <button onClick={cogDropDown} className = {`measureCategory ${COGOpen == true ? "selected" : ""}`} style = {{backgroundColor: '#239947'}}>
                Cognition (COG) {COGOpen ? "▲" : "▼"}
              </button>

              <button onClick={phyDropDown} className = {`measureCategory ${PHYOpen == true ? "selected" : ""}`} style = {{backgroundColor: '#e38120'}}>
                Perceptual, Motor, and Physical Development (PD-HLTH) {PHYOpen ? "▲" : "▼"}
              </button>
        </div>
        <div className = "measures">
          <div style = {{display: 'flex', flexDirection: 'row', gap: 10}}>
          {ATLOpen &&
                measures["Approaches to Learning"].map((m) => (
                  <button key={m} style = {{backgroundColor: '#a6ddff'}} className = {`textContainer ${selectedMeasure.includes(m) ? "selected" : ""}`}
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                )}
                  >
                    <div className = "text">
                      {m}
                    </div>
                  </button>
                ))}
          </div>
          <div style = {{display: 'flex', flexDirection: 'row', gap: 10}}>
          {SEDOpen &&
                measures["Social and Emotional Development"].map((m) => (
                  <button key={m} style = {{backgroundColor: '#a6ddff'}} className = {`textContainer ${selectedMeasure.includes(m) ? "selected" : ""}`}
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                  )}
                  >
                    <div className = "text">
                      {m}
                    </div>
                  </button>
                ))}
            </div>

          <div style = {{display: 'flex', flexDirection: 'row', gap: 10}}>
          {LLDOpen &&
                measures["Language and Literacy"].map((m) => (
                  <button key={m} style = {{backgroundColor: '#a6ddff'}} className = {`textContainer ${selectedMeasure.includes(m) ? "selected" : ""}`}
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                  )}
                  >
                    <div className = "text">
                      {m}
                    </div>
                  </button>
                ))}
          </div>

          <div style = {{display: 'flex', flexDirection: 'row', gap: 10}}>
          {COGOpen &&
                measures["Cognition"].map((m) => (
                <button key={m} style = {{backgroundColor: '#a6ddff'}} className = {`textContainer ${selectedMeasure.includes(m) ? "selected" : ""}`}
                onClick = {() => (
                  setSelectedMeasure(m),
                  setDevelopmentalLevelOpen(true)
                )}
                >
                  <div className = "text">
                      {m}
                    </div>
                </button>
                ))}
          </div>
          <div style = {{display: 'flex', flexDirection: 'row', gap: 10}}>
          {PHYOpen &&
                measures["Perceptual, Motor, and Physical Development"].map((m) => (
                  <button key={m} style = {{backgroundColor: '#a6ddff'}} className = {`textContainer ${selectedMeasure.includes(m) ? "selected" : ""}`}
                  onClick = {() => (
                    setSelectedMeasure(m),
                    setDevelopmentalLevelOpen(true)
                )}
                  >
                    <div className = "text">
                      {m}
                    </div>
                  </button>
                ))}
          </div>
        </div>

        <div style = {{display: 'flex', justifyContent: 'center'}}>

        {developmentalLevelOpen &&
        <div className="developmentalLevelOuterContainer">
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className = "titleText">
              DRDP Developmental Levels
            </div>
            <div className = "smallText" style = {{color: 'black'}}>
              (Select One)
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
                  <div className = {`text ${selectedDevelopmentalLevel == (level) ? "selected" : ""}`}>
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
            <div className = "titleText">
              Teaching Practices
            </div>
            <div className = "smallText" style = {{color: 'black'}}>
              (Select Up To Two)
            </div>
          </div>
            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <div className = "developmentalLevelContainer">
                {
                  teachingStrats.map((teachingStrat, index) => (
                  <button className = {`textContainer
                    ${selectedTeachingStrats.includes(teachingStrat.value) ? "selected" : ""}
                    ${teachingStrat == 'Planned Learning Activity' ? "plannedLearningActivity" : ""}
                    ${teachingStrat == 'Interactions/Teaching Strategies' ? "interactions" : ""}
                    ${teachingStrat == 'Learning Environment and Materials' ? "learningEnv" : ""}
                    ${teachingStrat == 'Family Engagement' ? "fam" : ""}
                    ${teachingStrat == 'Professional Growth and Development' ? "proGrowth" : ""}

                    `}
                  key={index}
                  onClick={() => handleTeachingStratButton(teachingStrat.value)}
                  >
                    <div className = {`text ${selectedTeachingStrats.includes(teachingStrat.value) ? "selected" : ""}`}>
                      {teachingStrat.label}
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
                <div className = "titleText">
                  Resources
                </div>
              </div>
              <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

              <div className="dropdownContainer2">
                <div className = "developmentalLevelContainer">
                  {
                    resources.map((resource, index) => (
                    <button className = {`textContainer
                      ${selectedResources == resource.value ? "selected" : ""}
                      ${resource.value == 'Frog Street' ? "frogStreet" : ""}
                      ${resource.value == 'ITERS-3 Materials' ? "iters" : ""}
                      ${resource.value == 'ASQ Activities' ? "asq" : ""}
                      ${resource.value == 'HSELOF' ? "hselof" : ""}
                      ${resource.value == 'Center on the Social and Emotional Foundations for Early Learning grantee of HS, CCB' ? "center" : ""}
                      ${resource.value == 'National Center for Pyramid Model Innovations' ? "pyramid" : ""}
                      ${resource.value == 'Attendanceworks.org' ? "attendance" : ""}
                      `}
                    key={index}
                    // onClick={() => setSelectedResources(resource)}
                    onClick={() => handleResourceButton(resource.value)}

                    >
                        <div className = {`text
                          ${selectedResources.includes(resource.value) ? "selected" : ""}`}>
                          {resource.label}
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

          <div className = "testingText">
            {selectedMeasure}; {selectedDevelopmentalLevel}; {selectedTeachingStrats.join(", ")}; {selectedResources}
          </div>


          {filteredData.map((teachingPractice, index) => (
            <div className = "teachingStrategy" key = {index}>
              <a href={teachingPractice["URL"]} className = "dataLink">
                <u>{teachingPractice["** FS Domain (should be Cognitive, Language, Physical or Social Emotional)"]} ({teachingPractice["Activity Title"]}){teachingPractice["Age Range (months) should be the numbers only, e.g., 6-12)"] ? `: ${teachingPractice["Age Range (months) should be the numbers only, e.g., 6-12)"]} months` : ""}</u>
              </a>
              <div className = "dataText">
                {teachingPractice["Activity Description"]}
              </div>
            </div>
          ))}
        </div>

      }



        <div className = "feedbackContainer">
          <div className = "smallText" style = {{color: 'gray'}}>If you have questions or feedback please fill out this Service Request Form</div>
        </div>
    </div>
    </div>

);
}

export default DataPage