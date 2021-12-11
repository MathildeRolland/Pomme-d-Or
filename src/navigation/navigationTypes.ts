import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Stack types
export type StackParamsList = {
    LandingPage: undefined,
    Settings: undefined,
    WorkCard: undefined,
    PauseCard: undefined
};

export type LandingPageProps = NativeStackScreenProps<StackParamsList, 'LandingPage'>;
export type WorkCardProps = NativeStackScreenProps<StackParamsList, 'WorkCard'>;
export type PauseCardProps = NativeStackScreenProps<StackParamsList, 'PauseCard'>;
export type SettingsProps = NativeStackScreenProps<StackParamsList, 'Settings'>;

// Navigation
export type workCardNavigationType = NativeStackNavigationProp<StackParamsList>;


