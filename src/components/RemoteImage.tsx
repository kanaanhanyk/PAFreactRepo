import { Image } from 'expo-image';

type Props = { id: string; url: string; token?: string };

export function RemoteImage({ id, url, token }: Props) {
  return (
    <Image
      source={{
        uri: url,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        cacheKey: id, // stable key, even if the URL changes
      }}
      cachePolicy="memory-disk"
      recyclingKey={id} // helps inside FlatList/FlashList
      contentFit="cover"
      transition={150}
      style={{ width: 200, height: 200 }}
      onError={(e) => console.warn('image failed', id, e.error)}
    />
  );
}
