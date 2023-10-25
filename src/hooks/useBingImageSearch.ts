// src/hooks/useBingImageSearch.ts

import { useState, useEffect } from 'react';
import axios from 'axios';

interface ImageResult {
  id: string;
  name: string;
  thumbnailUrl: string;
  contentUrl: string;
}

export const useBingImageSearch = (apiKey: string) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ImageResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(
          'https://bing-image-search1.p.rapidapi.com/images/search',
          {
            headers: {
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
              'X-RapidAPI-Key': '18fb76ebc1mshaca616159a74d6ep119278jsn3f0f84ed3c4a',
            },
            params: {
              q: query,
            },
          }
        );
        setResults(response.data.value);
      } catch (error) {
        console.error('Error fetching images:', error);
        setResults([]);
      }
      setLoading(false);
    };

    fetchImages();
  }, [apiKey, query]);

  return { query, setQuery, results, loading };
};

// Function to fetch image insights
export const fetchImageInsights = async (apiKey: string, imageId: string) => {
  try {
    const response = await axios.get(
      `https://bing-image-search1.p.rapidapi.com/images/details`,
      {
        headers: {
          'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
          'X-RapidAPI-Key': '18fb76ebc1mshaca616159a74d6ep119278jsn3f0f84ed3c4a',
        },
        params: {
          id: imageId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching image insights:', error);
    return null;
  }
};
