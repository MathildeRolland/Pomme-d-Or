import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Stack types
export type StackParamsList = {
    LandingPage: undefined,
    HomePage: undefined,
    Settings: undefined,
    WorkCard: undefined,
    PauseCard: undefined
};

export type LandingPageProps = NativeStackScreenProps<StackParamsList, 'LandingPage'>;
export type HomepageProps = NativeStackScreenProps<StackParamsList, 'HomePage'>;
export type WorkCardProps = NativeStackScreenProps<StackParamsList, 'WorkCard'>;
export type PauseCardProps = NativeStackScreenProps<StackParamsList, 'PauseCard'>;
export type SettingsProps = NativeStackScreenProps<StackParamsList, 'Settings'>;


