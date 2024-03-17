import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreatedUUID: React.FC = () => {
  const [uuid, setUuid] = useState<string>('');

  useEffect(() => {
    getOrCreateUUID();
  }, []);

  const getOrCreateUUID = () => {
    let userUUID = localStorage.getItem('userUUID');
    if (!userUUID) {
      userUUID = uuidv4();
      localStorage.setItem('userUUID', userUUID);
    }
    setUuid(userUUID);
    console.log(userUUID);
  };

  return (
    <div>
      <button onClick={() => console.log(uuid)}>Show UUID</button>
    </div>
  );
};

export default CreatedUUID;
