
export interface Room{
    id: string;
    name: string;
    description: string;
    floor?: number;
    sensors: number[];
    lastUpdated?: Date;
}

export interface Sensor{
    id: string;
    name: string;
    lastUpdated?: Date;
}


export interface PropertyLocation{
    id: string;
    name: string;
    rooms: Room[];
    lastUpdated?: Date;
}