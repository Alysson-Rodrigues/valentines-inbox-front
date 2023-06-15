import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = '5|scRxWZ4zLWrYn5gGcsI4Hxa1O0ta1RND5gP5f1YG';
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:8000/api/inbox', { headers });
        console.log('Data fetched:', response.data);
        setMessages(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen w-screen">
    <div className="mx-auto">
      <div className="flex flex-col w-full p-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-secondary  font-sans p-4 rounded shadow w-full mt-2">
            {message.author && (
            <div className='flex items-center'>
            <p className="mt-2">{message.author}</p>
            <div className='bg-light-pink rounded-md p-1 items-center ml-2'><p className='text-sm'>author</p></div>
            </div>
            )}
            <h2 className="text-lg font-semibold">{message.title}</h2>
            <p className="mt-2">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default App;

