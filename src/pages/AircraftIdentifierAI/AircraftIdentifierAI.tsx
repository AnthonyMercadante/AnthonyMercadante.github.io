import PageShell from '../../components/PageShell';
import MediaEmbed from '../../components/MediaEmbed';
import React from 'react';
import Image1 from '../../assets/images/beingInterviewed.jpg';
import StoryLink from '../../components/StoryLink';

const AircraftIdentifierAI = () => {
  return (
    <PageShell
      title="Using Machine Learning for Historical Aircraft Identification"
      eyebrow="Machine learning / Applied research"
      parent={{ to: '/MachineLearningProjects', label: 'Machine learning' }}
      className="case-study"
    >
      <div className="case-content">
        <div className="case-origin">
          <StoryLink
            chapter="research"
            label="Trained from scratch, on one GPU, with nobody to ask"
          />
        </div>

        <div className="case-columns">
          <div className="case-column">
            <MediaEmbed
              src="https://www.youtube.com/embed/eLWxkoEQQEM?si=Xs98ybDqlvF4ecn6"
              title="Using Machine Learning for Historical Aircraft Identification — news coverage"
              poster={Image1}
            />

            <p>
              Our applied research team, in a collaboration with the{' '}
              <span className="case-emphasis">National Air Force Museum of Canada</span>, used{' '}
              <span className="font-bold">AI</span> to identify aircraft from historical
              photographs.
            </p>

            <img
              loading="lazy"
              decoding="async"
              src={Image1}
              alt="Stephen Adams Interview"
              className="w-1/2 md:w-1/2 mx-auto h-auto shadow-lg my-4"
              width="1280"
              height="1707"
            />
            <p>
              It was an honor to represent our team and discuss the project's intricacies on CHCH
              News, emphasizing the practical, hands-on skills gained through our educational
              approach.
            </p>
          </div>

          <div className="case-column">
            {/* Embedded video of the application demo */}
            <MediaEmbed
              src="https://www.youtube.com/embed/L8QHCNwK01g?si=K1i3XGflU49yBJ4m"
              title="Using Machine Learning for Historical Aircraft Identification — application demo"
            />

            <h2>
              Powering <span className="case-emphasis">AI</span> with Python Libraries and Advanced
              Model Training
            </h2>

            <p>
              Our project leveraged an advanced suite of{' '}
              <span className="case-emphasis">Python libraries</span>, including
              <span className="case-emphasis"> TensorFlow</span> for deep learning algorithms,
              <span className="case-emphasis"> OpenCV</span> for image processing tasks,
              <span className="case-emphasis"> PyTorch</span> for neural network training,
              <span className="case-emphasis"> numpy</span> for high-performance scientific
              computing, and
              <span className="case-emphasis"> pandas</span> for data manipulation and analysis.
              This technological stack has been instrumental in handling the complexities of
              processing vast datasets of historical aircraft images, enabling us to train our AI
              models with unprecedented <span className="case-emphasis">precision</span> and{' '}
              <span className="case-emphasis">efficiency</span>.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default AircraftIdentifierAI;
