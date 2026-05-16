import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Authentication 
AWS Amplify V6 Authentication `;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 9: Auth ' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day9/protectd" asChild>
        <Button title="Go to Auth" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
