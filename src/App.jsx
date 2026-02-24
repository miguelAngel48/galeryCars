import { useState, useEffect } from 'react'
import './App.css'
import ContainerImage from './components/ContainerImage'

const items = [
  { id: 1, image: "/img/AstonMartinImg.jpg", video: "/video/AstonMartin.mp4", alt: "Aston Martin" },
  { id: 2, image: "/img/LamborghiniHuracan.jpg", video: "/video/LamborghiniHuracan.mp4", alt: "Lamborghini Huracan" },
  { id: 3, image: "/img/Mclaren.jpg", video: "/video/Mclaren.mp4", alt: " Mclaren" },
  { id: 4, image: "/img/Mustang.jpg", video: "/video/Mustang.mp4", alt: "Mustang" }
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
            tabIndex="0"
            key={item.id}
            image={item.image}
            video={item.video}
            isActive={activeItemId === item.id}
            alt={item.alt}
            onActivate={() => setActiveItemId(item.id)}
            onDeactivate={() => setActiveItemId(null)}

          />

        ))}
      </div>
    </>
  )
}

export default App
