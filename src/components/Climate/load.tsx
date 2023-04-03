import React from 'react';

import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from 'styled-components/native';

export function ClimateLoad() {
  const theme = useTheme();
  return (
    <SkeletonPlaceholder>
      <View style={{padding: theme.spacing.mediumSpacing}}>
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={40}
          borderRadius={theme.borderRadius.large}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
