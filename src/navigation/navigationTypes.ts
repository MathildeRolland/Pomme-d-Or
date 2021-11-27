import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Stack types
export type StackParamsList = {
    LandingPage: undefined,
    HomePage: undefined,
    Settings: undefined
};

export type LandingPageProps = NativeStackScreenProps<StackParamsList, 'LandingPage'>;
export type HomepageProps = NativeStackScreenProps<StackParamsList, 'HomePage'>;
export type SettingsProps = NativeStackScreenProps<StackParamsList, 'Settings'>;


