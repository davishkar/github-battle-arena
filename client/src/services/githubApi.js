import axios from 'axios';

// The frontend no longer needs the token, it simply asks our Vercel Serverless Function!
export const fetchBattleData = async (player1, player2) => {
  try {
    const { data } = await axios.get(`/api/battle?p1=${player1}&p2=${player2}`);
    return data;
  } catch (error) {
    console.error(`Error fetching battle data:`, error);
    throw new Error('Failed to fetch battle data. Please check the usernames.');
  }
};
