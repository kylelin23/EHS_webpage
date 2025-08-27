import './App.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'

function App() {


  const [data, setData] = useState([]);
  const [measure, setMeasure] = useState("");
  const [developmentalLevel, setdevelopmentalLevel] = useState("");
  const [teachingStrat, setTeachingStrat] = useState("");
  const [resource, setResource] = useState("");

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


  return (

    <div className = "container">
      <div className = "header">
        <h1>Early Head Start's "DRDP Tool"</h1>
      </div>
      <div className = "body">
        <h2>Measure</h2>
        <h2>Developmental Level</h2>
        <h2>Teaching Strategies</h2>
        <h2>Resources</h2>
      </div>
    </div>
  )
}

export default App

