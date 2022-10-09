export interface Room{
    id: string;
    name: string;
    description: string;
    floor?: number;
    sensors: string[];
}

export interface Sensor{
    id: string;
    name: string;
}