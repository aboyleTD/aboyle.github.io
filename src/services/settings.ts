const LOCAL_STORAGE_SETTINGS_KEY: string = 'settings';
interface ExplanationSettings {
    language: string;
}
export const DEFAULT_SETTINGS: ExplanationSettings = {
    language: 'en',
};

export function persistSettings(newSettings: ExplanationSettings): void {
    const settingsString = JSON.stringify(newSettings);
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, settingsString);
}

export function getSettings(): ExplanationSettings {
    const settingsString = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
    if (settingsString === null) {
        persistSettings(DEFAULT_SETTINGS);
        return DEFAULT_SETTINGS;
    }

    return JSON.parse(settingsString!) as ExplanationSettings;
}

export function setLanguage(language: string): void {
    const currentSettings = getSettings();
    const newSettings = { ...currentSettings, language };
    persistSettings(newSettings);
    window.location.reload();
}

export function getLanguage(): string {
    const settings = getSettings();
    return settings.language;
}