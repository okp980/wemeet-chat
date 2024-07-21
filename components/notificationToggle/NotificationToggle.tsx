import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toggle from 'react-native-toggle-element';

import CustomText from '../customText/CustomText';
import {Svg} from '../../constants';
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from '../../services/modules/auth';

type Props = {};

const NotificationToggle = (props: Props) => {
  const {data, error} = useGetProfileQuery();
  const [update] = useUpdateProfileMutation();

  return (
    <View className="mt-4 flex-row items-center ">
      <View className="rounded bg-primary py-1 px-2">
        <Svg.Send fill={'white'} width={15} />
      </View>
      <View className="flex-1 pl-4">
        <CustomText as="regular">Push Notification</CustomText>
      </View>
      <View>
        <Toggle
          value={data?.getNotifications}
          onPress={val => update({getNotifications: val as boolean})}
          trackBar={{
            width: 80,
            height: 35,
            radius: 20,
            activeBackgroundColor: '#E94057',
            inActiveBackgroundColor: '#b4b8bb',
          }}
          thumbButton={{
            activeBackgroundColor: '#eadfdf',
            inActiveBackgroundColor: '#eadfdf',
          }}
          thumbStyle={{
            height: 35,
            width: 50,
          }}
        />
      </View>
    </View>
  );
};

export default NotificationToggle;
