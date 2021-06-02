import { WebPlugin } from '@capacitor/core';
import { SpeechRecognitionPlugin, UtteranceOptions } from './definitions';
export declare class SpeechRecognitionWeb extends WebPlugin implements SpeechRecognitionPlugin {
    constructor();
    available(): Promise<{
        available: boolean;
    }>;
    start(options: UtteranceOptions): Promise<void>;
    stop(): Promise<void>;
    getSupportedLanguages(): Promise<{
        languages: any[];
    }>;
    hasPermission(): Promise<{
        permission: boolean;
    }>;
    requestPermission(): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SpeechRecognition: SpeechRecognitionWeb;
export { SpeechRecognition };
