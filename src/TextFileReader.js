import React, { useState, useEffect } from 'react';

const TextFileReader = ({ filePath }) => {
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const content = await response.text();
        setTextContent(content);
      } catch (error) {
        console.error('Error loading text file:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <div>
      <p>{textContent}</p>
    </div>
  );
};

export default TextFileReader;
