import { useRef, useEffect } from "react"

export default function ContainerImage({ image, video, isActive, onActivate, onDeactivate, alt }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isActive && videoRef.current) {
            videoRef.current.play();
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isActive]);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isActive) {
                onDeactivate();
            } else {
                onActivate();
            }
        }
    }


    return (
        <div className={`mediaContainer ${isActive ? "is-active" : ""}`}
            tabIndex='0'
            onKeyDown={handleKeyDown}
            onClick={isActive ? onDeactivate : onActivate}
            role="button"
            aria-passed={isActive}
        >
            {isActive && (
                <button className="close-button" onClick={onDeactivate}>X</button>
            )}

            <img
                src={image}
                alt={alt}
                className={`media image ${isActive ? "inactive" : "active"}`}

            />
            <video
                ref={videoRef}
                src={video}
                loop
                className={`media video ${isActive ? "active" : "inactive"}`}

            />
        </div>
    )
}