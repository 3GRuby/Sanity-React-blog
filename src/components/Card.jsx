import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';

function Card() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        body,
        date,
        mainImage{
            asset->{
              _id,
              url
            },
            alt
          }

    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  console.log(projectData);
  return (
    <>
      {projectData &&
        projectData.map((project, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={project.mainImage.asset.url}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">
                <BlockContent
                  blocks={project.body}
                  projectId="2hp9gld0"
                  dataset="production"
                />
              </p>
            </div>
          </div>
        ))}
      ;
    </>
  );
}

export default Card;
