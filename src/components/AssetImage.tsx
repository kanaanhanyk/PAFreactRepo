import { Image, type ImageProps } from 'expo-image';

import { API_URL } from '@/api/config';

type AssetImageProps = Omit<ImageProps, 'source'> & {
  assetId: string;
};

export function AssetImage({ assetId, ...imageProps }: AssetImageProps) {
  return (
    <Image
      {...imageProps}
      style={{ width: 60, height: 45, resizeMode: 'contain' }}
      source={{ uri: `${API_URL}/api/assets/${assetId}` }}
    />
  );
}
