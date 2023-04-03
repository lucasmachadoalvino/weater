import React from 'react';

import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from 'styled-components/native';

export function HeaderLoad() {
  const theme = useTheme();
  return (
    <SkeletonPlaceholder>
      <View
        style={{flexDirection: 'row', padding: theme.spacing.mediumSpacing}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <SkeletonPlaceholder.Item
            width={20}
            height={20}
            borderRadius={theme.borderRadius.large}
          />
          <SkeletonPlaceholder.Item
            width={120}
            height={20}
            marginLeft={theme.spacing.smallSpacing}
            borderRadius={theme.borderRadius.large}
          />
        </View>

        <SkeletonPlaceholder.Item
          width={20}
          height={20}
          borderRadius={theme.borderRadius.large}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
