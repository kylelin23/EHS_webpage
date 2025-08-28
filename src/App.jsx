import './App.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'

function App() {

  // Initializing Variables:
  const [data, setData] = useState([]);

  const [measure, setMeasure] = useState("");
  const [measureOpen, setMeasureOpen] = useState(false);
  const [ATLOpen, setATLOpen] = useState(false);
  const [SEDOpen, setSEDOpen] = useState(false);
  const [LLDOpen, setLLDOpen] = useState(false);
  const [COGOpen, setCOGOpen] = useState(false);
  const [PHYOpen, setPHYOpen] = useState(false);


  const [developmentalLevel, setdevelopmentalLevel] = useState("");
  const [developmentalLevelOpen, setDevelopmentalLevelOpen] = useState(false);

  const [teachingStrat, setTeachingStrat] = useState("");
  const [teachingStratOpen, setTeachingStratOpen] = useState(false);

  const [resource, setResource] = useState("");
  const [resourceOpen, setResourceOpen] = useState(false);

  // Data For Dropdowns:
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
    "CA Infant/Toddler Frameworks",
    "ASQ Activities",
    "ITERS Materials",
    "HSELOF",
    "CDC"
  ]

  // Functions:
  const measureDropDown = () => {
    if (measureOpen){
      setATLOpen(false);
      setSEDOpen(false);
      setLLDOpen(false);
      setCOGOpen(false);
      setPHYOpen(false);
    }
    setMeasureOpen(!measureOpen);
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

    {/* 👇 make the body a 2-column layout */}
    <div className="body two-col">
      {/* LEFT: all dropdowns grouped */}
      <div className="dropdowns">
        <div className="dropdownContainer">
          <button onClick={measureDropDown} className="dropdown">
            Measure {measureOpen ? "▲" : "▼"}
          </button>
          {measureOpen && (
            <>
              <button onClick={atlDropDown}>
                Approaches to Learning {ATLOpen ? "▲" : "▼"}
              </button>
              {ATLOpen &&
                measures["Approaches to Learning"].map((m) => (
                  <div key={m}>{m}</div>
                ))}

              <button onClick={sedDropDown}>
                Social and Emotional Development {SEDOpen ? "▲" : "▼"}
              </button>
              {SEDOpen &&
                measures["Social and Emotional Development"].map((m) => (
                  <div key={m}>{m}</div>
                ))}

              <button onClick={lldDropDown}>
                Language and Literacy {LLDOpen ? "▲" : "▼"}
              </button>
              {LLDOpen &&
                measures["Language and Literacy"].map((m) => (
                  <div key={m}>{m}</div>
                ))}

              <button onClick={cogDropDown}>
                Cognition {COGOpen ? "▲" : "▼"}
              </button>
              {COGOpen &&
                measures["Cognition"].map((m) => <div key={m}>{m}</div>)}

              <button onClick={phyDropDown}>
                Perceptual, Motor, and Physical Development {PHYOpen ? "▲" : "▼"}
              </button>
              {PHYOpen &&
                measures["Perceptual, Motor, and Physical Development"].map((m) => (
                  <div key={m}>{m}</div>
                ))}
            </>
          )}
        </div>
          
        <div className="dropdownContainer">
          <button onClick={developmentalLevelDropDown} className="dropdown">
            Developmental Level {developmentalLevelOpen ? "▲" : "▼"}
          </button>
          {developmentalLevelOpen &&
            developmentalLevels.map((lvl) => <div key={lvl}>{lvl}</div>)}
        </div>

        <div className="dropdownContainer">
          <button onClick={teachingStratDropDown} className="dropdown">
            Teaching Strategy {teachingStratOpen ? "▲" : "▼"}
          </button>
          {teachingStratOpen &&
            teachingStrats.map((ts) => <div key={ts}>{ts}</div>)}
        </div>

        <div className="dropdownContainer">
          <button onClick={resourceDropDown} className="dropdown">
            Resources {resourceOpen ? "▲" : "▼"}
          </button>
          {resourceOpen && resources.map((r) => <div key={r}>{r}</div>)}
        </div>
      </div>

      {/* RIGHT: blob */}
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
    </div>

);
}

export default App

