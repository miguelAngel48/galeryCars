import { useState, useEffect } from 'react'
import './App.css'
import ContainerImage from './components/ContainerImage'

const items = [
  { id: 1, image: "/img/AstonMartinImg.png", video: "/video/AstonMartin.mp4" },
  { id: 2, image: "/img/LamborghiniHuracan.png", video: "/video/LamborghiniHuracan.mp4" },
  { id: 3, image: "/img/Mclaren.png", video: "/video/Mclaren.mp4" },
  { id: 4, image: "/img/Mustang.png", video: "/video/Mustang.mp4" }
];

function App() {
  const [activeItemId, setActiveItemId] = useState(null);
  const activeItem = items.find(item => item.id === activeItemId);

  useEffect(() => {
    if (activeItem) {
      document.documentElement.style.setProperty('--bg-image', `url(${activeItem.image})`);
    } else {
      document.documentElement.style.setProperty('--bg-image', `none`);
    }
  }, [activeItem]);
  return (
    <>
      <div className='galery'>
        {items.map((item) => (
          <ContainerImage
            key={item.id}
            image={item.image}
            video={item.video}
            isActive={activeItemId === item.id}
            onActivate={() => setActiveItemId(item.id)}
            onDeactivate={() => setActiveItemId(null)}

          />

        ))}
      </div>
    </>
  )
}

export default App
