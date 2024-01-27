import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';

const AutomationAssistant = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(25, 25, 25, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    color: 'white',
    textAlign: 'left',
  };

  return (
    <div className="flex flex-col items-center bg-black text-white py-6">
      <button onClick={handleBack} className="absolute top-5 left-5 z-10 text-white">
        <ArrowBackIcon />
      </button>

      <div className="container mx-auto px-4 lg:px-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient"><br></br>
          Automation Assistant: Streamlining Grant Proposals
        </h1>

        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:w-1/2 text-left px-4 mb-6">
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                The <span className="text-blue-400">Challenge</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                From September 2022 to December 2022, I served as an Automation Assistant within the college's research department, reporting directly to the manager of funding proposals. My primary mission? To develop an application aimed at automating the <span className="text-green-400">grant proposal creation process</span>.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                My <span className="text-yellow-400">Approach</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                Using my skills in Python, Qt 6, OpenAI, httpx, and SQLite, I embarked on designing and implementing a comprehensive automation solution. The process involved creating templates, forms, and process flows tailored to the specific needs of grant proposal creation.
              </p>
            </div>



            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                Key <span className="text-purple-400">Responsibilities</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Automation Strategies:</strong> I developed strategies to automate repetitive and time-consuming tasks within the grant proposal process.<br /><br />
                <strong>Process Flow Development:</strong> Designing intuitive and effective process flows was crucial to ensure a seamless transition from manual to automated procedures.<br /><br />
                <strong>System Troubleshooting & Maintenance:</strong> Identifying and resolving issues was a constant task, as was maintaining the overall health of the automation system.<br /><br />
                <strong>Technical Support:</strong> Providing ongoing support to the research department staff, ensuring they could navigate and utilize the new system effectively.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 text-left px-4">
            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-cyan-400">Outcomes</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                <strong>Efficiency:</strong> The automation of the grant proposal process reduced the time and effort required, allowing the research department to focus on more strategic tasks.<br /><br />
                <strong>Accuracy:</strong> With automated templates and forms, the likelihood of errors in proposals was greatly reduced.<br /><br />
                <strong>Integration:</strong> Successfully integrating the automation processes into the existing workflow without disrupting ongoing operations was a major achievement.
              </p>
            </div>

            <div style={cardStyle}>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-orange-400">Conclusion</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                This position was more than a job; it was a learning experience that honed my skills in automation and software development. It taught me the value of precision, innovation, and user-centric design in creating solutions that can transform an organization's workflow. Thank you for taking the time to read about this exciting chapter in my professional journey. I look forward to the new challenges and opportunities that lie ahead in the world of software development and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LandscapeOverlay />
    </div>
  );
};

export default AutomationAssistant;
