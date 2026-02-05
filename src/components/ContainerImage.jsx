import { useRef, useEffect } from "react"

export default function ContainerImage({ image, video, isActive, onActivate, onDeactivate }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isActive && videoRef.current) {
            videoRef.current.play();
        } else if (!isActive && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isActive]);



    return (
        <div className={`mediaContainer ${isActive ? "is-active" : ""}`}>
            {isActive && (
                <button className="close-button" onClick={onDeactivate}>X</button>
            )}
            <img
                src={image}
                alt=""
                onClick={onActivate}
                className={`media image ${isActive ? "inactive" : "active"}`}

            />
            <video
                ref={videoRef}
                src={video}
                onClick={onDeactivate}

                loop
                className={`media video ${isActive ? "active" : "inactive"}`}

            />
        </div>
    )
}