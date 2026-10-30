import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { DomainResponse, DomainsResponse, DomainsDetails } from '@/api/types';
import { DomainCard } from '@/components/DomainCard';
import { getAsync } from '@/api/client'

export default function DomainsScreen() {
  const [domains, setDomains] = useState<DomainResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [counts, setCounts] = useState<DomainsDetails[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data: DomainsResponse = await getAsync(`api/domains`);
        setDomains(data.items);

        // const counts: DomainsDetails[] = [];
        // for (const domain of data.items) {
        //   const count: number = await getAsync(`api/freelancers/count?domainId=${domain.id}`)
        //   counts.push({ domain: domain.id, count });
        // }
        // setCounts(counts);

        const domainCounts: DomainsDetails[] = await Promise.all(
          data.items.map(async (domain): Promise<DomainsDetails> => {
            const count: number = await getAsync(`api/freelancers/count?domainId=${domain.id}`);
            return { domain: domain.id, count };
          })
        );
        setCounts(domainCounts);

      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load domains');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <View><ActivityIndicator /></View>;
  if (error) return <Text>{error}</Text>;

  const countByDomain = new Map(counts.map((c) => [c.domain, c.count]));

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#241B32',
        experimental_backgroundImage: 'radial-gradient(circle at 0% 0%, #83739A, transparent 60%)',
      }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 52, fontFamily: 'Rubik', padding: 16, color: '#FFF' }}>
          Domains
        </Text>
      </View>
      <FlatList
        data={domains}
        keyExtractor={(d) => d.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
        renderItem={({ item }) => (
          <DomainCard
            domain={item}
            //freelancerCount={counts.find((c) => c.domain === item.id)?.count ?? 0} />
            freelancerCount={countByDomain.get(item.id) ?? 0} />
        )}
      />
    </SafeAreaView>
  );
}
