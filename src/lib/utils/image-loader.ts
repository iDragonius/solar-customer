import Config from "@/lib/config";

export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${Config.serverUrl}${src}?w=${width}&q=${quality || 75}`;
};
