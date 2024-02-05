export interface CustomInputProps {
    span: string;
    value: string;
    onChange?(value:string): void;
    validation?(value:string): boolean;
    errorMessage?: string;
    getError?(error:boolean): void;
}