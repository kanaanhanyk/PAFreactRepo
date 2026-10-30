import { Pressable, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router'
import type { DomainResponse } from '@/api/types';
import { AssetImage } from '@/components/AssetImage';

type DomainCardProps = {
  domain: DomainResponse;
  freelancerCount: number;
};

export function DomainCard({ domain, freelancerCount }: DomainCardProps) {
  return (
    <Pressable style={styles.card} onPress={ () => router.push(`/expertises/${domain.id}`)}>
      <AssetImage assetId={domain.photoPath} />
      <Text style={styles.name}>{domain.name}</Text>
      <Text style={{ flex: 1, color: '#BF40FF' }}>{freelancerCount} {'freelancers'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#110A1F',
    paddingVertical: 23,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  name: {
    color: '#FFF',
    fontSize: 22,
  },
});
