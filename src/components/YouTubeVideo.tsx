interface YouTubeVideoProps {
  url: string;
  title: string;
  className?: string;
  allowFullScreen?: boolean;
}

// Fonction utilitaire pour extraire l'ID YouTube d'une URL
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : null;
}

// Fonction pour générer l'URL d'embed YouTube
function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = getYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

export default function YouTubeVideo({ 
  url, 
  title, 
  className = "w-full h-full",
  allowFullScreen = true 
}: YouTubeVideoProps) {
  const embedUrl = getYouTubeEmbedUrl(url);
  
  if (!embedUrl) {
    return null;
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={allowFullScreen}
    />
  );
}
