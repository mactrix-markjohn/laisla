import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, hash, classnames, heights}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = src;
    });

    return (
        <>
            <div className={classnames} style={{ display: imageLoaded ? "none" : "inline" }}>
                <Blurhash
                    className={classnames}
                    hash={hash}
                    width='100vw'
                    height={heights}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img
                className={classnames}
                src={src}
                alt=""
                style={{
                    display: !imageLoaded ? "none" : "inline"
                }}
            />
        </>
    );
};

export default ImageComponent;
