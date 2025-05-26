import {useState} from "react";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "image",
  className = "",
  fallbackSrc = "/fallback.jpg",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
};

export default Image;
