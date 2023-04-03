import React from 'react';

import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from 'styled-components/native';

export function TemperatureLoad() {
  const theme = useTheme();
  return (
    <SkeletonPlaceholder>
      <View style={{alignItems: 'center'}}>
        <SkeletonPlaceholder.Item
          width={80}
          height={80}
          borderRadius={theme.borderRadius.large}
          marginBottom={theme.spacing.smallSpacing}
        />
        <SkeletonPlaceholder.Item
          width={40}
          height={40}
          marginLeft={theme.spacing.smallSpacing}
          borderRadius={theme.borderRadius.medium}
          marginBottom={theme.spacing.smallSpacing}
        />

        <SkeletonPlaceholder.Item
          width={200}
          height={30}
          borderRadius={theme.borderRadius.medium}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
