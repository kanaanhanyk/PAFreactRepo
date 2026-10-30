import { ExpertiseResponse } from "@/api/types"
import { Pressable, Text } from 'react-native'

type ExpertiseCardProps = {
  expertise: ExpertiseResponse;
  freelancerCount: number;
}

export function ExpertiseCard({ expertise, freelancerCount }: ExpertiseCardProps) {
  return (
    <Pressable>
      <Text>
        {expertise.name}
      </Text>
    </Pressable>
  );
}
