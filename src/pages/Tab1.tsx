import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText } from '@ionic/react';
import './Tab1.css';
import { useBingImageSearch, fetchImageInsights } from '../hooks/useBingImageSearch'; 
import { useState, useEffect } from 'react';

const Tab1: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { results, loading, setQuery } = useBingImageSearch('18fb76ebc1mshaca616159a74d6ep119278jsn3f0f84ed3c4a');
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [imageInsights, setImageInsights] = useState<any | null>(null);

  const handleSearch = () => {
    setQuery(searchQuery);
    setSelectedImageId(null);
  };

  // Function to fetch image insights when an image is selected
  const fetchAndSetImageInsights = async (imageId: string) => {
    const insights = await fetchImageInsights('YOUR_BING_IMAGE_SEARCH_API_KEY', imageId); // Replace with your API key
    if (insights) {
      setImageInsights(insights);
    }
  };

  // Watch for changes in selectedImageId and fetch image insights
  useEffect(() => {
    if (selectedImageId) {
        fetchAndSetImageInsights(selectedImageId);
      }
    }, [selectedImageId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore what's trending</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='search-bar'>
      <IonInput
          placeholder="Search for images"
          value={searchQuery}
          onIonChange={(e) => setSearchQuery(e.detail.value!)}
        />
        <IonButton onClick={handleSearch}>
          Search
        </IonButton>
        </div>
        <div className="image-grid">
          {loading ? (
            <p>Loading...</p>
          ) : (
            results.map((result) => (
              <div className="image-item" key={result.id} onClick={() => setSelectedImageId(result.id)}>
                <img src={result.thumbnailUrl} alt={result.name} />
              </div>
            ))
          )}
        </div>
        {imageInsights && (
          <div className='image-insights'>
            <IonText>
              <h2>Image Insights</h2>
              <p>Description: {imageInsights.description.captions[0].text}</p>
              <p>Tags: {imageInsights.tags.map((tag: any) => tag.name).join(', ')}</p>
            </IonText>
          </div>
        )}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
