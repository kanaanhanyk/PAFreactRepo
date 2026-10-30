import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from 'react-native'
import { getAsync } from '@/api/client'
import { ExpertiseResponse, ExpertisesResponse } from '@/api/types'
import { API_URL } from '@/api/config';
import { useEffect, useState } from 'react';
import { ExpertiseCard } from "@/components/ExpertiseCard";

export default function ExpertisesScreen() {
  const [expertises, setExpertises] = useState<ExpertiseResponse[]>([]);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    const load = async () => {
      try {
        const domainId = Number(id);
        const data: ExpertisesResponse = await getAsync(`api/expertises?domainId=${domainId}`);
        setExpertises(data.items);

//           const expertiseCounts: ExpertisesDetails[] = []
//           data.items.map((async expertise) => {
//             getAsync(`${API_URL}/api/frelancers/count?expertiseId=${expertise.Id});
//           })

      } catch (e) {

      } finally {

      }
    };
    load();
  }, []);

  return (
    <FlatList
      data={expertises}
      keyExtractor={(e) => e.id.toString()}
      renderItem={({ item }) => (
        <ExpertiseCard
          expertise={item}
          freelancerCount={3}
        />
      )}
    />
  );
}
