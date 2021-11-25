import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Stack types
export type StackTypes = {
    LandingPage: undefined,
    HomePage: undefined,
    Settings: undefined
};

export type LandingPageProps = NativeStackScreenProps<StackTypes, 'LandingPage'>;
export type HomepageProps = NativeStackScreenProps<StackTypes, 'HomePage'>;
export type SettingsProps = NativeStackScreenProps<StackTypes, 'Settings'>;


