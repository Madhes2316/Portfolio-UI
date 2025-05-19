import './skill.css';

const Skill = () => {

  type TechItem ={
    id: number,
    item: string
  }

  const LanguageTech : TechItem[] = [
    {
      id:1,
      item:'HTML'
    },
    {
      id:2,
      item:'CSS'
    },
    {
      id:3,
      item:'TypeScript'
    },
    {
      id:4,
      item:'JavaScript'
    }
  ]

  const FrontEnd : TechItem[] = [
    {
      id:1,
      item:'Angular'
    },
    {
      id:2,
      item:'React'
    }
  ]

  const BackEnd : TechItem[] = [
    {
      id:1,
      item:'NodeJS'
    },
    {
      id:2,
      item:'ExpressJS'
    }
  ]

  const CloudAWS : TechItem[] = [
    {
      id:1,
      item:'Route53'
    },
    {
      id:2,
      item:'Cloudfront'
    },
    {
      id:3,
      item:'S3'
    },
    {
      id:4,
      item:'DynamoDB'
    },
    {
      id:5,
      item:'Lambda'
    },
    {
      id:6,
      item:'API-Gateway'
    },
    {
      id:7,
      item:'Eventbridge'
    },
    {
      id:8,
      item:'SQS'
    },
    {
      id:9,
      item:'SNS'
    },
    {
      id:10,
      item:'StepFunctions'
    },
    {
      id:11,
      item:'Cloudformation'
    },
    {
      id:12,
      item:'Codepipeline'
    }
  ]

  const Tools : TechItem[] = [
    {
      id:1,
      item:'Git'
    }
  ]

  return (
    <>
        <div className='mainSkill-div'>
            <div className='skill-div'>
                <div className='technologies-button'>
                  <button>Technologies</button>
                </div>
                <h3>Languages</h3>
                <div className='technologies-div'>
                    {LanguageTech.map((techItem)=>(
                      <span className='techItems-span' key={techItem.id}>{techItem.item}</span>
                    ))}
                </div>
                <h3>Frontend</h3>
                <div className='technologies-div'>
                    {FrontEnd.map((techItem)=>(
                      <span className='techItems-span' key={techItem.id}>{techItem.item}</span>
                    ))}
                </div>
                <h3>Backend</h3>
                <div className='technologies-div'>
                    {BackEnd.map((techItem)=>(
                      <span className='techItems-span' key={techItem.id}>{techItem.item}</span>
                    ))}
                </div>
                <h3>Cloud - AWS Services</h3>
                <div className='technologies-div'>
                    {CloudAWS.map((techItem)=>(
                      <span className='techItems-span' key={techItem.id}>{techItem.item}</span>
                    ))}
                </div>
                <h3>Tools</h3>
                <div className='technologies-div'>
                    {Tools.map((techItem)=>(
                      <span className='techItems-span' key={techItem.id}>{techItem.item}</span>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Skill;